import { ChatInterface } from "@/ui/organisms/chat/chat-interface"
import { Navbar } from "@/ui/organisms/home/navbar"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-600 to-purple-800">
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <div className="text-center mb-8 text-white">
          <h2 className="text-4xl font-bold mb-4">Transforma tu cuerpo</h2>
          <p className="text-purple-100">Alcanza tus objetivos fitness con nuestro programa personalizado.</p>
        </div>

        <ChatInterface />
      </main>
    </div>
  )
}

