import { Logo } from "../../atoms/logo"
import { NavLink } from "../../molecules/home/nav-link"

export function Navbar() {
  return (
    <header className="border-b">
      <div className="container flex h-16 items-center justify-between">
        <Logo />
        <nav className="flex items-center space-x-6">
          <NavLink href="#features">Características</NavLink>
          <NavLink href="#pricing">Precios</NavLink>
          <NavLink href="#contact">Contacto</NavLink>
        </nav>
      </div>
    </header>
  )
}