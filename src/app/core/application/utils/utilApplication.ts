class UtilApplication {

    public createPrompt(target:string,current_level:string, age_range:string, day_week: string):string{
        const prompt:string = ` 
        Con los siguientes datos:
        - Objetivo del entrenamiento: ${target}
        - Nivel actual del usuario: ${current_level}
        - Rango de edad del usuario: ${age_range}
        - Día de la semana para el entrenamiento: ${day_week}

        Quiero que generes una lista de hasta 10 ejercicios recomendados basados en estos parámetros. La salida debe ser en formato JSON y cada ejercicio debe incluir las siguientes propiedades:
        id: Identificador del ejercicio.    
        - exercise_name: Nombre del ejercicio.
        - number_second: Duración en segundos por repetición (si es aplicable).
        - number_repetitions: Número de repeticiones recomendadas por serie.
        - url_image_random: URL de una imagen representativa o aleatoria relacionada con el ejercicio.

        Asegúrate de que los ejercicios estén alineados con el nivel del usuario, su rango de edad y el objetivo proporcionado, y que sean variados para trabajar diferentes partes del cuerpo.
        Dame solo el json parseado.
        `
        return prompt;
    }
}

export default new UtilApplication();