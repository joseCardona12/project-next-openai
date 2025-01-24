import { TextChat } from "../atoms/TextChat"

interface ChatMessageProps {
  content: string
  isAI: boolean
}

export function ChatMessage({ content, isAI }: ChatMessageProps) {
  return (
    <div className={`max-w-2xl mx-auto p-4 ${isAI ? "flex justify-end" : ""}`}>
      <div
        className={`max-w-[80%] rounded-lg p-4 shadow-sm ${
          isAI ? "bg-orange-50 border border-orange-100" : "bg-white border border-gray-100"
        }`}
      >
        <TextChat variant="message">{content}</TextChat>
      </div>
    </div>
  )
}
