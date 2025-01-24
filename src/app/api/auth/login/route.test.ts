import { POST } from '@/app/api/auth/login/route';
import { prisma } from '@/lib/prisma';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

jest.mock('@/lib/prisma', () => ({
  prisma: {
    user: {
      findUnique: jest.fn(),
    },
  },
}));

jest.mock('bcrypt', () => ({
  compare: jest.fn(),
}));

jest.mock('jsonwebtoken', () => ({
  sign: jest.fn(),
}));

describe('POST /auth/login', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should return status 400 if email or password is missing', async () => {
    const mockRequest = {
      json: jest.fn().mockResolvedValue({}),
    } as unknown as Request;

    const response = await POST(mockRequest);

    if(!response) return
    expect(response.status).toBe(400);

    const body = await response.json();
    expect(body.error).toBe('Email and password are required');

    expect(prisma.user.findUnique).not.toHaveBeenCalled();
    expect(bcrypt.compare).not.toHaveBeenCalled();
    expect(jwt.sign).not.toHaveBeenCalled();
  });

  it('should return status 401 if user is not found', async () => {
    const mockRequest = {
      json: jest.fn().mockResolvedValue({ email: 'prueba@prueba.com', password: 'password123' }),
    } as unknown as Request;

    (prisma.user.findUnique as jest.Mock).mockResolvedValue(null);

    const response = await POST(mockRequest);

    if(!response) return
    expect(response.status).toBe(401);

    const body = await response.json();
    expect(body.error).toBe('Invalid credentials');

    expect(prisma.user.findUnique).toHaveBeenCalledWith({ where: { email: 'prueba@prueba.com' } });
    expect(bcrypt.compare).not.toHaveBeenCalled();
    expect(jwt.sign).not.toHaveBeenCalled();
  });

  it('should return status 401 if the password is invalid', async () => {
    const mockRequest = {
      json: jest.fn().mockResolvedValue({ email: 'prueba@prueba.com', password: 'wrongpassword' }),
    } as unknown as Request;

    (prisma.user.findUnique as jest.Mock).mockResolvedValue({
      id: 1,
      name: 'Prueba',
      email: 'prueba@prueba.com',
      password: 'hashedpassword',
    });

    (bcrypt.compare as jest.Mock).mockResolvedValue(false);

    const response = await POST(mockRequest);

    if(!response) return
    expect(response.status).toBe(401);

    const body = await response.json();
    expect(body.error).toBe('Invalid credentials');

    expect(prisma.user.findUnique).toHaveBeenCalledWith({ where: { email: 'prueba@prueba.com' } });
    expect(bcrypt.compare).toHaveBeenCalledWith('wrongpassword', 'hashedpassword');
    expect(jwt.sign).not.toHaveBeenCalled();
  });

  it('should return status 200 and a token if login is successful', async () => {
    const mockRequest = {
      json: jest.fn().mockResolvedValue({ email: 'prueba@prueba.com', password: 'password123' }),
    } as unknown as Request;

    (prisma.user.findUnique as jest.Mock).mockResolvedValue({
      id: 1,
      name: 'Prueba',
      email: 'prueba@prueba.com',
      password: 'hashedpassword',
    });

    (bcrypt.compare as jest.Mock).mockResolvedValue(true);

    (jwt.sign as jest.Mock).mockReturnValue('mocked-jwt-token');

    const response = await POST(mockRequest);

    if(!response) return
    expect(response.status).toBe(200);

    const body = await response.json();
    expect(body.message).toBe('Successful login');
    expect(body.user).toEqual({
      id: 1,
      name: 'Prueba',
      email: 'prueba@prueba.com',
      jwt: 'mocked-jwt-token',
    });

    expect(prisma.user.findUnique).toHaveBeenCalledWith({ where: { email: 'prueba@prueba.com' } });
    expect(bcrypt.compare).toHaveBeenCalledWith('password123', 'hashedpassword');
    expect(jwt.sign).toHaveBeenCalledWith(
      expect.objectContaining({
        id: 1,
        name: 'Prueba',
        email: 'prueba@prueba.com',
      }),
      process.env.JWT_KEY
    );
  });

  it('should return status 500 if JWT_KEY is not defined', async () => {
    const originalEnv = process.env.JWT_KEY;
    delete process.env.JWT_KEY;

    const mockRequest = {
      json: jest.fn().mockResolvedValue({ email: 'prueba@prueba.com', password: 'password123' }),
    } as unknown as Request;

    (prisma.user.findUnique as jest.Mock).mockResolvedValue({
      id: 1,
      name: 'Prueba',
      email: 'prueba@prueba.com',
      password: 'hashedpassword',
    });

    (bcrypt.compare as jest.Mock).mockResolvedValue(true);

    const response = await POST(mockRequest);

    if(!response) return
    expect(response.status).toBe(500);

    const body = await response.json();
    expect(body.message).toBe('JWT_KEY is not defined in the environment variables');

    process.env.JWT_KEY = originalEnv;
  });
});
