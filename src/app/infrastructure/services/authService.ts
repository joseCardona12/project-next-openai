// Define the API URL as a constant
const API_URL = '/api/auth/login';

// Define the User interface to represent the user data structure
export interface User {
  id: string;
  name: string;
  email: string;
  jwt: string;
}

// Define the expected shape of the response from the API
interface LoginResponse {
  user?: User;
  message?: string;
}

// The loginUser function for authenticating the user
export const loginUser = async (email: string, password: string): Promise<User> => {
  try {
    // Perform the API request to login
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    // Check if the response is not OK (e.g., 4xx, 5xx errors)
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Error al hacer login');
    }

    // Parse the JSON response
    const data: LoginResponse = await response.json();

    // Check if the 'user' object is returned
    if (!data.user) {
      throw new Error('Credenciales incorrectas');
    }

    // Return the user data
    return data.user;
  } catch (error) {
    // Handle any errors
    if (error instanceof Error) {
      throw new Error(error.message);
    }
    throw new Error('Error desconocido al hacer login');
  }
};
