import { Navbar } from "@/ui/organisms";
import LoginForm from "@/ui/organisms/auth/LoginForm";
import { Footer } from "@/ui/organisms/home/footer";

export const LoginTemplate = () => {
  return (
    <div>
      <Navbar />
      <main>
        <LoginForm />
      </main>
      <Footer />
    </div>
  );
};
