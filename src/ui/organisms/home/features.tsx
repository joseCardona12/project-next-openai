import { Settings2, Brain, Apple } from "lucide-react"

export function Features() {
  return (
    <section className="w-full py-24 bg-white" id="caracteristicas">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="p-3 rounded-full bg-[#8B3DFF]/10">
              <Settings2 className="h-8 w-8 text-[#8B3DFF]" />
            </div>
            <h3 className="text-xl font-semibold text-black">Rutinas Personalizadas</h3>
            <p className="text-gray-600">Obtén planes de entrenamiento adaptados a tus objetivos y nivel.</p>
          </div>
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="p-3 rounded-full bg-[#8B3DFF]/10">
              <Brain className="h-8 w-8 text-[#8B3DFF]" />
            </div>
            <h3 className="text-xl font-semibold text-black">Entrenamiento Inteligente</h3>
            <p className="text-gray-600">Aprende la técnica correcta y optimiza tus resultados.</p>
          </div>
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="p-3 rounded-full bg-[#8B3DFF]/10">
              <Apple className="h-8 w-8 text-[#8B3DFF]" />
            </div>
            <h3 className="text-xl font-semibold text-black">Consejos Nutricionales</h3>
            <p className="text-gray-600">Recibe recomendaciones personalizadas de nutrición.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

