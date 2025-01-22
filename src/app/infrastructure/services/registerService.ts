export interface RegisterUserData {
    name: string;
    email: string;
    password: string;
    gender_id: number;
}

export const registerUser = async (data: RegisterUserData) => {
    const API_URL = '/api/auth/register'; // URL relativa

    try {
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        // Verificar si la respuesta es exitosa
        if (!response.ok) {
            // Intenta leer el cuerpo de la respuesta como texto para ver el error
            const errorData = await response.text(); // Usamos text() en lugar de json() para depurar
            console.error('Error response:', errorData); // Verifica qué es lo que está devolviendo el servidor
            throw new Error(errorData || 'Error al registrar el usuario');
        }

        // Verifica si la respuesta tiene el formato JSON
        const contentType = response.headers.get('Content-Type');
        if (contentType && contentType.includes('application/json')) {
            const result = await response.json();
            return result;
        } else {
            throw new Error('La respuesta no es JSON');
        }
    } catch (error) {
        if (error instanceof Error) {
            // Aquí puedes agregar más detalles específicos del error
            // Ejemplo: si es un error de red, agregar un mensaje más claro
            if (error.message.includes('NetworkError')) {
                throw new Error('No se pudo conectar al servidor. Verifique su conexión a Internet.');
            } else if (error.message.includes('Failed to fetch')) {
                throw new Error('Hubo un problema al realizar la solicitud. Intenta nuevamente más tarde.');
            } else if (error.message.includes('Unexpected token')) {
                throw new Error('Hubo un problema con la respuesta del servidor.');
            }
            return new Error(error.message); 
        } else {
            // Maneja cualquier error desconocido
            throw new Error('Error desconocido al registrar el usuario');
        }
    }
};
