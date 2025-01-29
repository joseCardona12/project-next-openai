"use client"
import Onboarding from "@/ui/molecules/steps/Onboarding";
import { Footer } from "@/ui/organisms/home/footer";

export default function HomeView(){
    return (
        <div className="containergeneral">
            <Onboarding/>
            <Footer />
        </div>
    )
}