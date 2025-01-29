"use client";
import { inputAlert } from "@/ui/molecules";
import { Logo } from "../../atoms/home/logo";
import { NavLink } from "../../molecules/home/nav-link";
import { useUserState } from "@/app/core/application/global-state";
import { useRouter } from "next/navigation";

export function Navbar() {

  const {user} = useUserState((state)=>state);
  const router = useRouter();

  const handleClick = ():void => {
    if(user){
      router.push("/chatOpenAi");
      return;
    };
    inputAlert("Is required login for access","info");
    console.log("navigate to user")
  }
    return (
      <header className="bg-white border-b border-gray-200">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <Logo />
          <nav className="flex items-center space-x-6">
            <NavLink onClick={handleClick} href="#required-access">bot UI</NavLink>
            <NavLink href="#precios">Precios</NavLink>
            <NavLink href="#contacto">Contacto</NavLink>
          </nav>
        </div>
      </header>
    )
  }
  
  