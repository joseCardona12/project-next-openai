interface ProgressBarProps {
    current: number
    total: number
  }
  
  export function ProgressBar({ current, total }: ProgressBarProps) {
    const progress = (current / total) * 100
  
    return (
      <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
        <div className="h-full bg-purple-500 transition-all duration-300 ease-in-out" style={{ width: `${progress}%` }} />
      </div>
    )
  }
  