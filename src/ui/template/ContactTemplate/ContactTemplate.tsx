import { IconLock } from "@/assets/icons";
import { Footer, Navbar } from "@/ui/organisms";

export default function ContactTemplate() {
  return (
    <div>
      <Navbar />
      <main className="flex-grow flex items-center justify-center bg-gray-50 p-4 min-h-[78vh]">
        <div className="text-center">
          <IconLock className="mx-auto h-12 w-12 text-purple-500" />
          <h1 className="mt-4 text-3xl font-bold text-gray-900">
            Sección no disponible
          </h1>
          <p className="mt-2 text-gray-600">
            Estamos trabajando para ofrecerte esta funcionalidad muy pronto.
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
}
