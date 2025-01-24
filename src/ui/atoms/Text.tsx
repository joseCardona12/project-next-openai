interface TextProps {
    variant: "title" | "subtitle" | "detail"
    children: React.ReactNode
  }
  
  export function Text({ variant, children }: TextProps) {
    const styles = {
      title: "text-xl font-bold text-gray-900",
      subtitle: "text-lg text-gray-700",
      detail: "text-sm text-gray-600",
    }
  
    return <div className={styles[variant]}>{children}</div>
  }
  