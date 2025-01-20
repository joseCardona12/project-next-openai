"use client";
import { useContextState } from "@/app/core/application/global-state";
import ContextPush from "@/ui/molecules/contextpush/ContextPush";

export default function ContextView() {
  const {  } = useContextState((state) => state);
  return (
    <div className="containergeneral">
      <ContextPush />
    </div>
  );
}
