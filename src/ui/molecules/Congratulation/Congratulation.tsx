"use client"
import Image from "next/image"
import { UseNavigateTo } from "@/app/core/application/hooks"

export default function Congratulation() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-[#8B5CF6] via-[#7C3AED] to-[#6D28D9] p-6">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <h1 className="text-3xl font-extrabold text-white mb-2 tracking-tight">¡Felicitaciones!</h1>
          <p className="text-xl text-purple-100 font-medium">Has completado tu rutina con éxito</p>
        </div>

        <div className="relative w-48 h-48 mx-auto">
          <div className="absolute inset-0 bg-white/20 rounded-full blur-xl animate-pulse" />
          <div className="relative bg-white p-2 rounded-full shadow-2xl transform transition-all duration-500 hover:scale-105">
            <Image
              src="/img/joseui.png"
              alt="Congratulations Image"
              width={300}
              height={300}
              className="rounded-full shadow-lg"
            />
          </div>
        </div>

        <div className="text-center">
          <button
            onClick={() => UseNavigateTo("/firstHome")}
            className="inline-flex items-center px-8 py-3 text-lg font-semibold text-purple-700 bg-gradient-to-r from-[#F59E0B] to-[#FBBF24] rounded-full shadow-xl hover:from-[#F59E0B] hover:to-[#F59E0B] transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl"
          >
            Continuar
          </button>
        </div>
      </div>
    </div>
  )
}

