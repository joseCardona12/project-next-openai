import { Footer, Navbar } from "@/ui/organisms";
import "./termsTemplate.styles.scss";

export function TermTemplate() {
  return (
    <div>
      <Navbar />
      <main className="main">
        <section>
          <h2>1. Introducción</h2>
          <p>
            Bienvenido a Smart UI, una aplicación diseñada para ayudarte a
            alcanzar tus objetivos fitness mediante un programa personalizado.
            Al utilizar nuestra aplicación, aceptas estos términos y
            condiciones.
          </p>
        </section>

        <section>
          <h2>2. Uso de la Aplicación</h2>
          <p>
            Smart UI utiliza el contexto proporcionado por el usuario para crear
            rutinas de ejercicios específicas. La aplicación también permite la
            interacción con OpenAI para obtener información útil sobre cómo
            mejorar tu rendimiento.
          </p>
        </section>

        <section>
          <h2>3. Privacidad</h2>
          <p>
            Respetamos tu privacidad. Toda la información proporcionada se
            utiliza únicamente para personalizar tu experiencia y mejorar
            nuestros servicios. El contexto que nos brindas al iniciar (como tus
            objetivos fitness, nivel de experiencia y preferencias) se envía a
            OpenAI para generar rutinas de ejercicios personalizadas y
            recomendaciones adaptadas a tus necesidades.
          </p>
          <br />
          <p>
            No compartimos tus datos personales con terceros para fines
            comerciales o publicitarios. Sin embargo, para poder ofrecerte un
            servicio de calidad, es necesario que OpenAI procese la información
            que proporcionas.
          </p>
        </section>

        <section>
          <h2>4. Responsabilidad</h2>
          <p>
            Smart UI no se hace responsable de lesiones o daños que puedan
            ocurrir durante el uso de la aplicación. Es importante seguir las
            recomendaciones de profesionales de la salud antes de comenzar
            cualquier programa de ejercicios.
          </p>
        </section>

        <section>
          <h2>5. Modificaciones</h2>
          <p>
            Nos reservamos el derecho de modificar estos términos y condiciones
            en cualquier momento. Te notificaremos de cualquier cambio
            significativo.
          </p>
        </section>
      </main>
      <Footer />
    </div>
  );
}
