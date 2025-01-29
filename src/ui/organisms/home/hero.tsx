"use client";
import { useRouter } from "next/navigation";
import { SimpleButton } from "../../atoms/home/simple-button"
export function Hero() {
  const router = useRouter();
  
  const handleClick = ():void =>{ // Navigate to the login page
    console.log("Click");
    router.push("/login");
  }
    return (
      <section className="w-full py-24 bg-gradient-to-b from-[#8B3DFF] to-[#7A2EE3]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl text-white">Transforma tu cuerpo</h1>
              <p className="mx-auto max-w-[700px] text-lg text-white/80">
                Alcanza tus objetivos fitness con nuestro programa personalizado.
              </p>
            </div>
            <SimpleButton onClick={handleClick} variant="primary" size="lg">
              Comienza ahora
            </SimpleButton>
          </div>
        </div>
      </section>
    )
  }
  