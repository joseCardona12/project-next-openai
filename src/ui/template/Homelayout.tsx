import { Navbar } from "../../ui/organisms/home/navbar"
import { Footer } from "../../ui/organisms/home/footer"

interface LayoutProps {
    children: React.ReactNode
  }
  
  export function Layout({ children }: LayoutProps) {
    return (
      <div className="flex flex-col min-h-screen bg-white">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </div>
    )
  }