interface NavLinkProps {
  href?: string;
  children: React.ReactNode;
  onClick?: () => void;
}

export function NavLink({ href, children, onClick }: NavLinkProps) {
  return (
    <a
      href={href}
      className="text-sm text-gray-600 hover:text-[#8B3DFF] transition-colors"
      onClick={onClick}
    >
      {children}
    </a>
  );
}
