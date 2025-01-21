"use client";
import { LoginTemplate } from "@/ui/template/LoginTemplate";
import { useEffect } from "react";

export default function LoginView() {
  const prompt: string = "dame una rutina";
  useEffect(() => {
    const postPrompt = async () => {
      const response = await fetch("http://localhost:3000/api/openAi", {
        method: "POST",
        body: JSON.stringify({
          prompt,
        }),
      });
      const data = await response.json();
      console.log("data", data);
    };
    postPrompt();
  });
  return <LoginTemplate />;
}
