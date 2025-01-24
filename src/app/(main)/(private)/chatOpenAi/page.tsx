"use client"

import { ChatContainer } from "@/ui/organisms"
import { ChatLayout } from "@/ui/template"
import { useState } from "react"

interface Message {
  id: string
  content: string
  isAI: boolean
}

const initialMessages: Message[] = [
  {
    id: "1",
    content:
      "To take creatine effectively: 1. Standard dose is 5 grams per day. 2. Loading phase (optional): Take 20g/day 5-7 days with water or beverage. 4. No specific timing needed. 5. Can be taken consistently for best results. 6. Consider supplementing with creative!",
    isAI: true,
  },
]

const menuItems = [
  {
    id: 1,
    title: "Clear Chat",
    onClick: () => {
      // This will be handled by the page component
    },
  },
  {
    id: 2,
    title: "Settings",
    onClick: () => alert("Settings clicked"),
  },
  {
    id: 3,
    title: "Help",
    onClick: () => alert("Help clicked"),
  },
]

export default function ChatPage() {
  const [messages, setMessages] = useState<Message[]>(initialMessages)

  const handleSendMessage = (content: string) => {
    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      content,
      isAI: false,
    }

    // Simulate AI response
    const aiResponse: Message = {
      id: (Date.now() + 1).toString(),
      content: "This is a simulated AI response. In a real application, this would be the response from OpenAI's API.",
      isAI: true,
    }

    setMessages([...messages, userMessage, aiResponse])
  }

  const handleClearChat = () => {
    setMessages([])
  }

  const menuItemsWithHandlers = menuItems.map((item) => (item.id === 1 ? { ...item, onClick: handleClearChat } : item))

  return (
    <ChatLayout menuItems={menuItemsWithHandlers}>
      <ChatContainer messages={messages} onSendMessage={handleSendMessage} />
    </ChatLayout>
  )
}

