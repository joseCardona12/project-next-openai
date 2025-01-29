import { Brain } from 'lucide-react'

interface ChatBubbleProps {
  content: string
  isAI?: boolean
}

export function ChatBubble({ content, isAI = false }: ChatBubbleProps) {
  return (
    <div className={`flex ${isAI ? 'justify-start' : 'justify-end'} mb-4`}>
      {isAI && (
        <div className="mr-2 flex items-center justify-center bg-purple-100 rounded-full w-fit h-fit">
          <Brain className="w-6 h-6 text-purple-600" />
        </div>
      )}
      <div
        className={`p-4 rounded-lg max-w-[80%] ${
          isAI
            ? 'bg-purple-100 text-purple-900 pl-12' // Agregar padding izquierdo para dejar espacio para el ícono
            : 'bg-purple-600 text-white'
        }`}
      >
        {content}
      </div>
    </div>
  )
}
