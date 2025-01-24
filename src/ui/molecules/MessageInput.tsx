import type { FormEvent } from "react"
import { Input } from "../atoms/Input"
import { IconButton } from "../atoms/IconButton"

interface MessageInputProps {
  onSend: (message: string) => void
}

export function MessageInput({ onSend }: MessageInputProps) {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const input = form.elements.namedItem("message") as HTMLInputElement
    if (input.value.trim()) {
      onSend(input.value)
      input.value = ""
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 p-4 border-t border-gray-200">
      <Input name="message" placeholder="How to take creatine..." fullWidth autoComplete="off" />
      <IconButton type="submit" variant="send" aria-label="Send message" />
    </form>
  )
}

