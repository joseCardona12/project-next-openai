"use client"

import { SendHorizontal } from "lucide-react"
import type React from "react"

interface ChatInputProps {
  onSend: (message: string) => void
  disabled?: boolean
}

export function ChatInput({ onSend, disabled }: ChatInputProps) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const form = e.target as HTMLFormElement
    const input = form.elements.namedItem("message") as HTMLInputElement
    const message = input.value.trim()
    if (message) {
      onSend(message)
      form.reset()
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex items-center gap-2 p-2 border border-gray-300 rounded-full shadow-md">
      <input
        name="message"
        placeholder="Escribe tu mensaje..."
        disabled={disabled}
        className="flex-1 px-4 py-3 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-600 disabled:bg-gray-200 disabled:cursor-not-allowed"
      />
      <button
        type="submit"
        disabled={disabled}
        className="p-3 bg-purple-600 text-white rounded-full disabled:bg-gray-400"
      >
        <SendHorizontal className="w-5 h-5" />
        <span className="sr-only">Enviar mensaje</span>
      </button>
    </form>
  )
}


