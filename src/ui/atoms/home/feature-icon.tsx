import type { LucideIcon } from "lucide-react"

interface FeatureIconProps {
  Icon: LucideIcon
}

export function FeatureIcon({ Icon }: FeatureIconProps) {
  return (
    <div className="p-4 bg-primary/10 rounded-full">
      <Icon className="h-6 w-6 text-primary" />
    </div>
  )
}

