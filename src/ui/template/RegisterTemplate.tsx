import { Footer, Navbar } from "@/ui/organisms"
import RegisterForm from "@/ui/organisms/auth/RegisterForm"

export const RegisterTemplate = () => {
    return (
        <div>
        <Navbar />
        <main>
          <RegisterForm />
        </main>
        <Footer />
      </div>
    )
}