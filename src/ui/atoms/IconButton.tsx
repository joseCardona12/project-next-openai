import type { ButtonHTMLAttributes } from "react"
import { Menu, Send } from "lucide-react"

interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant: "menu" | "send"
}

export function IconButton({ variant, ...props }: IconButtonProps) {
  return (
    <button {...props} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
      {variant === "menu" ? <Menu className="w-6 h-6" /> : <Send className="w-6 h-6 text-orange-500" />}
    </button>
  )
}
