import type { InputHTMLAttributes } from "react"

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  fullWidth?: boolean
}

export function Input({ fullWidth = false, ...props }: InputProps) {
  return (
    <input
      {...props}
      className={`p-3 rounded-lg border border-gray-200 focus:outline-none focus:border-orange-500 ${
        fullWidth ? "w-full" : ""
      }`}
    />
  )
}
