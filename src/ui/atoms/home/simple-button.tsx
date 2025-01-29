import type React from "react"

interface SimpleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary"
  size?: "sm" | "md" | "lg"
}

export const SimpleButton: React.FC<SimpleButtonProps> = ({
  children,
  variant = "primary",
  size = "md",
  className = "",
  ...props
}) => {
  const baseStyle = "inline-flex items-center justify-center rounded-full font-medium transition-colors"

  const variantStyles = {
    primary: "bg-[#FFB800] text-black hover:bg-[#E6A600]",
    secondary: "bg-[#8B3DFF] text-white hover:bg-[#7A2EE3]",
  }

  const sizeStyles = {
    sm: "text-sm h-9 px-4",
    md: "text-base h-10 px-6",
    lg: "text-lg h-12 px-8",
  }

  const buttonStyle = `${baseStyle} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`

  return (
    <button className={buttonStyle} {...props}>
      {children}
    </button>
  )
}

