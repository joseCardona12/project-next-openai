import { Header } from "../molecules/Header"

interface ChatLayoutProps {
  children: React.ReactNode
  menuItems: Array<{
    id: number
    title: string
    onClick: () => void
  }>
}

export function ChatLayout({ children, menuItems }: ChatLayoutProps) {
  return (
    <div className="h-screen flex flex-col bg-gray-50">
      <Header menuItems={menuItems} />
      {children}
    </div>
  )
}

