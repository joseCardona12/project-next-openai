import { Text } from "../atoms/Text";
import { ExerciseDetails } from "../molecules/ExerciseDetails";
import { NavigationButtons } from "../molecules/NavigationButtons";
import { ProgressBar } from "../atoms/ProgressBar";
import { IExercise } from "@/app/core/application/interfaces";
import Image from "next/image";

interface ExerciseCardProps {
  exercise: IExercise;
  currentExercise: number;
  totalExercises: number;
  onNext: () => void;
  onPrevious: () => void;
  onSkip: () => void;
}

export function ExerciseCard({
  exercise,
  currentExercise,
  totalExercises,
  onNext,
  onPrevious,
  onSkip,
}: ExerciseCardProps) {
  return (
    <div className="max-w-md w-full mx-auto space-y-6 p-6 rounded-md">
      <div className="space-y-2">
        <Text variant="subtitle">
          EXERCISE {currentExercise}-{totalExercises}
        </Text>
        <ProgressBar current={currentExercise} total={totalExercises} />
      </div>

      {/* Recuadro con la imagen */}
      <div className="aspect-square bg-gray-100 rounded-lg relative overflow-hidden">
        {exercise.url_image_random ? (
          <Image
            src={exercise.url_image_random}
            alt={exercise.exercise_name}
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        ) : (
          <div className="flex items-center justify-center h-full text-gray-400">
            No image available
          </div>
        )}
      </div>

      <div className="space-y-4 text-center">
        <Text variant="title">{exercise.exercise_name}</Text>
        <ExerciseDetails
          duration={exercise.number_second}
          series={exercise.number_repetitions}
        />
      </div>

      <NavigationButtons
        onPrevious={onPrevious}
        onNext={onNext}
        canGoPrevious={currentExercise > 1}
        canGoNext={currentExercise < totalExercises}
      />

      <button
        onClick={onSkip}
        className="w-full text-center text-gray-500 hover:text-gray-700 text-sm"
      >
        SKIP EXERCISE
      </button>
    </div>
  );
}
