interface TextProps {
    variant: "title" | "message" | "menuItem"
    children: React.ReactNode
  }
  
  export function TextChat({ variant, children }: TextProps) {
    const styles = {
      title: "text-lg font-semibold text-gray-800",
      message: "text-gray-700 leading-relaxed",
      menuItem: "text-sm font-medium text-gray-700",
    }
  
    return <div className={styles[variant]}>{children}</div>
  }