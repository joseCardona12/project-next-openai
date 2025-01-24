import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/ui/sheet"
import { Menu } from "lucide-react"
import { TextChat } from "../atoms"

interface MenuItem {
  id: number
  title: string
  onClick: () => void
}

interface SideMenuProps {
  menuItems: MenuItem[]
}

export function SideMenu({ menuItems }: SideMenuProps) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <button className="p-2 hover:bg-gray-200 rounded-full transition-colors">
          <Menu className="w-6 h-6" />
        </button>
      </SheetTrigger>
      <SheetContent side="left">
        <SheetHeader>
          <SheetTitle>Menu</SheetTitle>
        </SheetHeader>
        <div className="mt-6 space-y-4">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={item.onClick}
              className="w-full text-left p-3 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <TextChat variant="menuItem">{item.title}</TextChat>
            </button>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  )
}

