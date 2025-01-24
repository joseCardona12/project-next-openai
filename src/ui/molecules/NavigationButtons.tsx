import { useEffect } from "react"
import { Button } from "../atoms/Button"
import { useRouter } from "next/navigation"

interface NavigationButtonsProps {
  onPrevious: () => void
  onNext: () => void
  canGoPrevious: boolean
  canGoNext: boolean
}

export function NavigationButtons({ onPrevious, onNext, canGoPrevious, canGoNext }: NavigationButtonsProps) {
  const router = useRouter();
  useEffect(() => {
    if (!canGoNext) {
      router.push("/congratulation");
    }
  }, [canGoNext, router]);
  return (
    <div className="flex justify-between w-full gap-4">
      <Button onClick={onPrevious} variant="secondary" disabled={!canGoPrevious}>
        PREVIOUS
      </Button>
      <Button onClick={onNext} disabled={!canGoNext}>
        NEXT
      </Button>
    </div>
  )
}
