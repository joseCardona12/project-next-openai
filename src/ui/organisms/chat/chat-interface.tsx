"use client";
import React, { useState, useEffect } from "react";
import { useContextState, useOpenAiState, useUserState } from "@/app/core/application/global-state";
import { OpenAiService } from "@/app/infrastructure/services";
import { IOpenAiResponseReply, IOpenAiResponseStatus } from "@/app/core/application/dto";
import { ChatBubble } from "@/ui/atoms/chat/chat-bubble";
import { ChatInput } from "@/ui/molecules/chat/chat-input";
import { LoadingDots } from "@/ui/atoms/chat/loading-dots";

interface Message {
  content: string;
  isAI: boolean;
}

const ChatInterface: React.FC = () => {
  const { contextState } = useContextState((state) => state);
  const { setOpenAiResponse } = useOpenAiState((state) => state);
  const [target, current_level, age_range, day_week] = contextState;
  const { user } = useUserState((state) => state);

  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSendMessage = async (content: string) => {
    setMessages((prev) => [...prev, { content, isAI: false }]);
    setIsLoading(true);

    try {
      const prompt = `User wants to know something about: ${content}. Target: ${target}, Level: ${current_level}, Age range: ${age_range}, Days per week: ${day_week}`;

      const response = await OpenAiService.createPromptAPi(prompt, user?.token || "");
      const dataReply = response as IOpenAiResponseReply;
      const aiMessage = dataReply.reply.trim();

      setMessages((prev) => [...prev, { content: aiMessage, isAI: true }]);
      setOpenAiResponse(dataReply); // Actualiza la respuesta de OpenAI en el estado global

    } catch (error) {
      console.error("Error al obtener la respuesta de la IA:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-white w-full max-w-2xl mx-auto h-[600px] flex flex-col rounded-lg shadow-md rounded-xl">
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message, index) => (
          <ChatBubble key={index} content={message.content} isAI={message.isAI} />
        ))}

        {isLoading && (
          <div className="flex items-center">
            <div className="mr-2 bg-purple-100 rounded-full p-2">
              <div className="w-6 h-6 text-purple-600">🤖</div>
            </div>
            <LoadingDots />
          </div>
        )}
      </div>

      <div className="p-4 border-t">
        <ChatInput onSend={handleSendMessage} disabled={isLoading} />
      </div>
    </div>
  );
};

export default ChatInterface;
