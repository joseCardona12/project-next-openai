import { POST } from '@/app/api/auth/register/route'; 
import { prisma } from '@/lib/prisma'; 
import bcrypt from 'bcrypt';

jest.mock('@/lib/prisma', () => ({
  prisma: {
    user: {
      findUnique: jest.fn(),
      create: jest.fn(),
    },
  },
}));

jest.mock('bcrypt', () => ({
  hash: jest.fn(),
}));

describe('POST /user', () => {
  it('should create a user and return status 201', async () => {
    const mockUser = { name: 'Prueba', email: 'prueba@prueba.com', gender_id: 1 };

    (prisma.user.findUnique as jest.Mock).mockResolvedValue(null);

    (bcrypt.hash as jest.Mock).mockResolvedValue('hashedPassword123');

    (prisma.user.create as jest.Mock).mockResolvedValue(mockUser);

    const requestObj = {
      json: jest.fn().mockResolvedValue({
        name: 'Prueba',
        gender_id: 1,
        email: 'prueba@prueba.com',
        password: '12345',
      }),
    } as unknown as Request;

    const response = await POST(requestObj);
    if(!response)return

    expect(response).toBeDefined();

    expect(response.status).toBe(201);

    const responseBody = await response.json();
    expect(responseBody.message).toBe('User created');
    expect(responseBody.user).toEqual(mockUser);


    expect(prisma.user.findUnique).toHaveBeenCalledWith({
      where: { email: 'prueba@prueba.com' },
    });

    // Verificamos que create haya sido llamado con los datos correctos
    expect(prisma.user.create).toHaveBeenCalledWith({
      data: {
        name: 'Prueba',
        gender_id: 1,
        email: 'prueba@prueba.com',
        password: 'hashedPassword123',
      },
    });
  });

  it('should return status 400 if required fields are missing', async () => {
    const requestObj = {
      json: jest.fn().mockResolvedValue({
        name: '',
        gender_id: 1,
        email: '',
        password: '',
      }),
    } as unknown as Request;

    const response = await POST(requestObj);

    if(!response)return
    expect(response.status).toBe(400);
    const responseBody = await response.json();
    expect(responseBody.error).toBe('name, gender, email and password are required');

    expect(prisma.user.findUnique).not.toHaveBeenCalled();
    expect(prisma.user.create).not.toHaveBeenCalled();
    expect(bcrypt.hash).not.toHaveBeenCalled();
  });

  it('should return status 400 if email is already registered', async () => {
    const mockUser = { name: 'Prueba ', email: 'prueba@prueba.com', gender_id: 1 };


    (prisma.user.findUnique as jest.Mock).mockResolvedValue(mockUser);

    const requestObj = {
      json: jest.fn().mockResolvedValue({
        name: 'Prueba',
        gender_id: 1,
        email: 'prueba@prueba.com',
        password: 'password123',
      }),
    } as unknown as Request;

    const response = await POST(requestObj);

    if(!response)return
    expect(response.status).toBe(400);
    const responseBody = await response.json();
    expect(responseBody.message).toBe('Email already registered');

    expect(prisma.user.findUnique).toHaveBeenCalledWith({
      where: { email: 'prueba@prueba.com' },
    });

    expect(prisma.user.create).not.toHaveBeenCalled();
    expect(bcrypt.hash).not.toHaveBeenCalled();
  });

  it('should return status 500 if an error occurs', async () => {
    (prisma.user.findUnique as jest.Mock).mockRejectedValue(new Error('Database error'));

    const requestObj = {
      json: jest.fn().mockResolvedValue({
        name: 'Prueba',
        gender_id: 1,
        email: 'prueba@prueba.com',
        password: 'password123',
      }),
    } as unknown as Request;

    const response = await POST(requestObj);

    if(!response)return
    expect(response.status).toBe(500);
    const responseBody = await response.json();
    expect(responseBody.message).toBe('Database error');

    expect(prisma.user.findUnique).toHaveBeenCalledWith({
      where: { email: 'prueba@prueba.com' },
    });

    expect(prisma.user.create).not.toHaveBeenCalled();
    expect(bcrypt.hash).not.toHaveBeenCalled();
  });
});
