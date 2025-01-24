import { ChatMessage } from "../molecules/ChatMessage"
import { MessageInput } from "../molecules/MessageInput"

interface Message {
  id: string
  content: string
  isAI: boolean
}

interface ChatContainerProps {
  messages: Message[]
  onSendMessage: (message: string) => void
}

export function ChatContainer({ messages, onSendMessage }: ChatContainerProps) {
  return (
    <div className="flex flex-col h-[calc(100vh-64px)]">
      <div className="flex-1 overflow-y-auto">
        {messages.map((message) => (
          <ChatMessage key={message.id} content={message.content} isAI={message.isAI} />
        ))}
      </div>
      <MessageInput onSend={onSendMessage} />
    </div>
  )
}

