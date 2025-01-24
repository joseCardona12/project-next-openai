import { Text } from "../atoms/Text"
import { ExerciseDetails } from "../molecules/ExerciseDetails"
import { NavigationButtons } from "../molecules/NavigationButtons"
import { ProgressBar } from "../atoms/ProgressBar"
import { IExercise } from "@/app/core/application/interfaces"


interface ExerciseCardProps {
  exercise: IExercise
  currentExercise: number
  totalExercises: number
  onNext: () => void
  onPrevious: () => void
  onSkip: () => void
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
    <div className="max-w-md w-full mx-auto space-y-6 p-6">
      <div className="space-y-2">
        <Text variant="subtitle">
          EXERCISE {currentExercise}-{totalExercises}
        </Text>
        <ProgressBar current={currentExercise} total={totalExercises} />
      </div>

      <div className="aspect-square bg-gray-100 rounded-lg" />

      <div className="space-y-4 text-center">
        <Text variant="title">{exercise.exercise_name}</Text>
        <ExerciseDetails duration={exercise.number_second} series={exercise.number_repetitions} />
      </div>

      <NavigationButtons
        onPrevious={onPrevious}
        onNext={onNext}
        canGoPrevious={currentExercise > 1}
        canGoNext={currentExercise < totalExercises}
      />

      <button onClick={onSkip} className="w-full text-center text-gray-500 hover:text-gray-700 text-sm">
        SKIP EXERCISE
      </button>
    </div>
  )
}

