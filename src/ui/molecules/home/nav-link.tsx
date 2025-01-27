
interface NavLinkProps {
    href: string
    children: React.ReactNode
  }
  
  export function NavLink({ href, children }: NavLinkProps) {
    return (
      <a href={href} className="text-sm text-gray-600 hover:text-[#8B3DFF] transition-colors">
        {children}
      </a>
    )
  }
  
  
