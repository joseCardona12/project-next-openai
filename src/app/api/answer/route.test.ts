import { prisma } from '@/lib/prisma';
import jwt from 'jsonwebtoken';
import { POST } from './route';

jest.mock("@/lib/prisma", () => ({
  prisma: {
    answer: {
      create: jest.fn(),
    },
  },
}));

jest.mock("jsonwebtoken", () => ({
  verify: jest.fn(),
}));

describe("POST /api/answer", () => {
  const mockRequest = (body: unknown, token: string | null) =>
    new Request("http://localhost/api/answer", {
      method: "POST",
      headers: {
        Authorization: token ? `Bearer ${token}` : "",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

  beforeEach(() => {
    jest.clearAllMocks();
    process.env.JWT_KEY = "test_jwt_key";
  });

  it("should return 401 if no authorization header is provided", async () => {
    const request = mockRequest({}, null);

    const response = await POST(request);
    if (!response) return;
    const body = await response.json();

    expect(response.status).toBe(401);
    expect(body.error).toBe("Not authorized");
  });

  it("should return 403 if the token is invalid", async () => {
    (jwt.verify as jest.Mock).mockImplementation(() => {
      throw new Error("Invalid token");
    });

    const request = mockRequest({}, "invalid_token");

    const response = await POST(request);
    if (!response) return;
    const body = await response.json();

    expect(response.status).toBe(403);
    expect(body.error).toBe("Invalid token");
  });

  it("should return 400 if required fields are missing", async () => {
    (jwt.verify as jest.Mock).mockReturnValue({ id: 1 });

    const request = mockRequest({ prompt_id: 1 }, "valid_token");

    const response = await POST(request);
    if (!response) return;
    const body = await response.json();

    expect(response.status).toBe(400);
    expect(body.error).toBe("Description and prompt_id are required");
  });

  it("should create an answer and return 201 if all data is valid", async () => {
    (jwt.verify as jest.Mock).mockReturnValue({ id: 1 });
    (prisma.answer.create as jest.Mock).mockResolvedValue({
      id: 1,
      description: 'Test',
      prompt_id: 1,
    });

    const request = mockRequest(
      {
        description: 'Test',
        prompt_id: 1,
      },
      "valid_token"
    );

    const response = await POST(request);
    if (!response) return;
    const body = await response.json();

    expect(response.status).toBe(201);
    expect(body.message).toBe("Answer successfully saved");
    expect(body.answer).toEqual({
      id: 1,
      description: 'Test',
      prompt_id: 1,
    });
  });
});
