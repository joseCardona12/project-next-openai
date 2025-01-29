import { Logo } from "../../atoms/home/logo"
import { NavLink } from "../../molecules/home/nav-link"

export function Navbar() {
    return (
      <header className="bg-white border-b border-gray-200">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <NavLink href="/principalHome"><Logo/></NavLink>
       
          <nav className="flex items-center space-x-6">
            <NavLink href="/chatOpenAi">bot UI</NavLink>
            <NavLink href="#precios">Precios</NavLink>
            <NavLink href="#contacto">Contacto</NavLink>
          </nav>
        </div>
      </header>
    )
  }
  
  