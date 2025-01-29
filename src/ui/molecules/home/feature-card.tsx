import type { LucideIcon } from "lucide-react"
import { FeatureIcon } from "../../atoms/home/feature-icon"

interface FeatureCardProps {
    icon: LucideIcon
    title: string
    description: string
  }
  
  export function FeatureCard({ icon: Icon, title, description }: FeatureCardProps) {
    return (
      <div className="flex flex-col items-center space-y-2 text-center">
        <FeatureIcon Icon={Icon} />
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="text-gray-500">{description}</p>
      </div>
    )
  }
  
  