"use client";
import ContextPush from "@/ui/molecules/steps/ContextPush";

export default function ContextView() {
  const {} = useContextState((state) => state);
  return (
    <div className="containergeneral">
      <ContextPush />
    </div>
  );
}
