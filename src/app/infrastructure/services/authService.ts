
const API_URL = 'https://678a9a51dd587da7ac2acfaa.mockapi.io/api/users';


export interface User {
  id: string;
  name: string;
  email: string;
  password: string;
}

export const registerUser = async (name: string, email: string, password: string) => {
  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, password }),
    });

   
    if (!response.ok) {
      const errorData = await response.json(); 
      throw new Error(errorData.message || 'Error al registrar el usuario'); 
    }


    const data = await response.json();
    return data;
  } catch (error) {
    if (error instanceof Error) {
     
      throw new Error(error.message);
    }
  
    throw new Error('Error desconocido al registrar el usuario');
  }
};


export const loginUser = async (name: string, password: string) => {
  try {
    const response = await fetch(`${API_URL}?name=${name}&password=${password}`, {
      method: 'GET',
    });

   
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Error al hacer login');
    }

    const data = await response.json();

 
    if (data.length === 0) {
      throw new Error('Credenciales incorrectas');
    }

    return data[0];
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }
    throw new Error('Error desconocido al hacer login');
  }
};
