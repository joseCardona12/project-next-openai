import Link from "next/link";
import styles from './navLink.module.scss'; 

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

export function NavLink({ href, children }: NavLinkProps) {
  return (
    <Link href={href} className={styles['nav-link']}>
      {children}
    </Link>
  );
}
