import { Dumbbell } from "lucide-react"

export function Logo() {
  return (
    <div className="flex items-center space-x-2">
      <Dumbbell className="h-6 w-6 text-[#8B3DFF]" />
      <span className="font-medium text-black">Smart UI</span>
    </div>
  )
}

