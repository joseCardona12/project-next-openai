"use client"
import { useContextState } from "@/app/core/application/global-state";
import ContextPush from "@/ui/molecules/contextpush/ContextPush";
import DataCollection from "@/ui/organisms/dataCollection/DataCollection";

export default function ContextView(){
    const {contextState} = useContextState((state)=>state);
    console.log("context:", contextState);
    return (
        <div className="containergeneral">
            <ContextPush/>
        </div>
    )
}