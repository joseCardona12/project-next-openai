import { Text } from "../atoms/Text"
import { SideMenu } from "./SideMenu";

interface HeaderProps {
  menuItems: Array<{
    id: number
    title: string
    onClick: () => void
  }>
}

export function Header({ menuItems }: HeaderProps) {
  return (
    <header className="flex items-center gap-4 p-4 bg-gray-100 border-b border-gray-200">
      <SideMenu menuItems={menuItems} />
      <Text variant="title">SMART CHAT</Text>
    </header>
  )
}