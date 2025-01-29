import { POST, GET} from "@/app/api/context/route";
import { prisma } from "@/lib/prisma";
import jwt from "jsonwebtoken";

jest.mock("@/lib/prisma", () => ({
  prisma: {
    context: {
      create: jest.fn(),
    },
  },
}));

jest.mock("jsonwebtoken", () => ({
  verify: jest.fn(),
}));

describe("POST /api/context", () => {
  const mockRequest = (body: unknown, token: string | null) =>
    new Request("http://localhost/api/context", {
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

    const request = mockRequest({ age_range_id: 1 }, "valid_token");

    const response = await POST(request);
    if (!response) return;
    const body = await response.json();

    expect(response.status).toBe(400);
    expect(body.error).toBe(
      "Age range, days per week, currente level and targer are required"
    );
  });

  it("should create a context and return 201 if all data is valid", async () => {
    (jwt.verify as jest.Mock).mockReturnValue({ id: 1 });
    (prisma.context.create as jest.Mock).mockResolvedValue({
      id: 1,
      age_range_id: 1,
      day_week_id: 2,
      user_id: 1,
      current_level_id: 3,
      target_id: 4,
    });

    const request = mockRequest(
      {
        age_range_id: 1,
        day_week_id: 2,
        current_level_id: 3,
        target_id: 4,
      },
      "valid_token"
    );

    const response = await POST(request);
    if (!response) return;
    const body = await response.json();

    expect(response.status).toBe(201);
    expect(body.message).toBe("Context successfully created");
    expect(body.context).toEqual({
      id: 1,
      age_range_id: 1,
      day_week_id: 2,
      user_id: 1,
      current_level_id: 3,
      target_id: 4,
    });
  });
});


describe("GET /api/context", () => {
    const mockRequest = (token: string | null) =>
      new Request("http://localhost/api/context", {
        method: "GET",
        headers: {
          Authorization: token ? `Bearer ${token}` : "", 
        },
      });
  
    beforeEach(() => {
      process.env.JWT_KEY = "test_jwt_key"; 
    });
  
    it("should return 401 if no authorization header is provided", async () => {
      const request = mockRequest(null);
  
      const response = await GET(request);

      if(!response)return
      const body = await response.json();
  
      expect(response.status).toBe(401);
      expect(body.error).toBe("Not authorized");
    });
  
    it("should return 403 if the token is invalid", async () => {
      // Mock the jwt.verify function to throw an error when called
      (jwt.verify as jest.Mock).mockImplementation(() => {
        throw new Error("Invalid token");
      });
    
      const request = mockRequest("invalid_token");
      const response = await GET(request);
    
      if (!response) return;
      const body = await response.json();
    
      expect(response.status).toBe(403);
      expect(body.error).toBe("Invalid token");
    });
    
  
    it("should return 500 if JWT_KEY is not defined", async () => {
      process.env.JWT_KEY = "";  
  
      const request = mockRequest("valid_token");
  
      const response = await GET(request);
      if(!response)return
      const body = await response.json();
  
      expect(response.status).toBe(500);
      expect(body.message).toBe("JWT_KEY is not defined in the environment variables");
    });
  
    it("should return 200 and the context data if the token is valid and context is found", async () => {
      const token = jwt.sign({ id: 5 }, process.env.JWT_KEY!);  
  
      const request = mockRequest(token);
      const response = await GET(request);
      
      if(!response)return
      const body = await response.json();
  
      expect(response.status).toBe(200);
      expect(body.message).toBe("Context successfully found");
      expect(body.context).toEqual({
        id: 2,
        user: {
          id: 5,
          name: "Prueba",
          email: "prueba@prueba.com",
          gender: "men",
        },
        age_ranges: "teenager",
        day_weeks: "2",
        current_levels: "sedentary",
        targets: "lose_weight",
      });
    });
  
  });