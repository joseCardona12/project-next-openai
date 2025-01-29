"use client";
import React, { useState, useEffect } from "react";
import { useContextState, useOpenAiState, useUserState } from "@/app/core/application/global-state";
import { UtilApplication } from "@/app/core/application/utils";
import { AnswerService, OpenAiService, PromptService } from "@/app/infrastructure/services";
import { IOpenAiResponseReply, IOpenAiResponseStatus, IPromptResponseError, IPromptResponseSuccess } from "@/app/core/application/dto";
import { ExerciseCard } from "@/ui/organisms/ExerciseCard";
import { IExercise } from "@/app/core/application/interfaces";

const Home: React.FC = () => {
  const { contextState } = useContextState((state) => state);
  const { setOpenAiResponse } = useOpenAiState((state) => state);
  const [target, current_level, age_range, day_week] = contextState;
  const { user } = useUserState((state) => state);

  const [exercises, setExercises] = useState<IExercise[]>([]);
  const [loading, setLoading] = useState<boolean>(true); 

  const [currentExerciseIndex, setCurrentExerciseIndex] = useState<number>(0);

  const handleNext = (): void => {
    if (currentExerciseIndex < exercises.length - 1) {
      setCurrentExerciseIndex(currentExerciseIndex + 1);
    }
  };

  const handlePrevious = (): void => {
    if (currentExerciseIndex > 0) {
      setCurrentExerciseIndex(currentExerciseIndex - 1);
    }
  };

  const handleSkip = (): void => {
    handleNext();
  };

  useEffect(() => {
    const promptApi = async (): Promise<void> => {
      const prompt: string = UtilApplication.createPrompt(target, current_level, age_range, day_week);
      try {
        // Llama al servicio de OpenAI
        const dataOpenAi: IOpenAiResponseStatus | IOpenAiResponseReply =
          await OpenAiService.createPromptAPi(prompt, user?.token || "");
  
        // Actualiza el estado con la respuesta
        const dataReply = dataOpenAi as IOpenAiResponseReply;
        setOpenAiResponse(dataReply);
  
        // Limpia y parsea el JSON
        let cleanReply = dataReply.reply.trim(); // Elimina espacios en blanco al inicio y final
        if (cleanReply.startsWith("```json")) {
          cleanReply = cleanReply.replace(/```json/g, "").replace(/```/g, ""); // Elimina bloques de Markdown
        }
  
        const exerciseJson: IExercise[] = JSON.parse(cleanReply); // Parsea el JSON limpio
        setExercises(exerciseJson);
  
        // Llama al servicio de prompts
        const dataPrompt: IPromptResponseError | IPromptResponseSuccess =
          await PromptService.postPrompt(prompt, user?.token || "");
  
        const promptSuccess = dataPrompt as IPromptResponseSuccess;
        await AnswerService.createAnswer(dataReply.reply, user?.token || "", promptSuccess.prompt.id);
      } catch (error) {
        console.error("Error fetching prompt data:", error);
      } finally {
        setLoading(false); // Finaliza la carga
      }
    };
  
    promptApi();
  }, [age_range, current_level, day_week, setOpenAiResponse, target, user?.token]); // Add the dependencies here
  

  console.log(exercises);

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-4">
      {loading ? (
        <p>Loading...</p>
      ) : exercises.length > 0 ? (
        <ExerciseCard
          exercise={exercises[currentExerciseIndex]}
          currentExercise={currentExerciseIndex + 1}
          totalExercises={exercises.length}
          onNext={handleNext}
          onPrevious={handlePrevious}
          onSkip={handleSkip}
        />
      ) : (
        <p>No exercises available</p>
      )}
    </div>
  );
};

export default Home;
