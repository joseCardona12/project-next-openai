import { Text } from "../atoms/Text"

interface ExerciseDetailsProps {
  duration: string
  series: number
}

export function ExerciseDetails({ duration, series }: ExerciseDetailsProps) {
  return (
    <div className="space-y-1 text-center">
      <Text variant="detail">{duration}</Text>
      <Text variant="detail">{series} SERIES</Text>
    </div>
  )
}
