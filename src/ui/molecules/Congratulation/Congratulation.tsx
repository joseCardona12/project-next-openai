"use client";
import { UseNavigateTo } from "@/app/core/application/hooks";

export default function Congratulation() {
  return (
    <div>
      <p>Congratulations! You have completed your routine.</p>
      <img src="/img/joseui.png" />
      <button onClick={() => UseNavigateTo("/firstHome")}>Continue</button>
    </div>
  );
}
