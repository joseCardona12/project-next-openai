import Onboarding from "@/ui/molecules/onboarding/Onboarding";
import { Footer, Navbar } from "@/ui/organisms";

export default function OnboardingTemplate() {
  return (
    <div>
      <Navbar />
      <main>
        <Onboarding />
      </main>
      <Footer />
    </div>
  );
}
