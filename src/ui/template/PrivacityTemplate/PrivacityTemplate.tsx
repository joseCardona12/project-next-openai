import { Footer, Navbar } from "@/ui/organisms";
import "./privacityTemplate.styles.scss";

export default function PrivacityTemplate() {
  return (
    <div>
      <Navbar />
      <main className="main">
        <section>
          <h2>1. Introducción</h2>
          <p>
            En Smart UI, nos comprometemos a proteger tu privacidad y garantizar
            que tus datos personales se manejen de manera segura y transparente.
            Esta política explica cómo recopilamos, usamos y protegemos la
            información que nos proporcionas.
          </p>
        </section>

        <section>
          <h2>2. Información que Recopilamos</h2>
          <p>
            Para ofrecerte un servicio personalizado, recopilamos la siguiente
            información:
          </p>
          <ul>
            <li>Datos de registro (nombre, correo electrónico, etc.).</li>
            <li>
              Contexto fitness (objetivos, nivel de experiencia, preferencias,
              etc.).
            </li>
            <li>Datos de uso (cómo interactúas con la aplicación).</li>
          </ul>
        </section>

        <section>
          <h2>3. Uso de la Información</h2>
          <p>Utilizamos tu información para:</p>
          <ul>
            <li>
              Crear rutinas de ejercicios personalizadas basadas en tu contexto.
            </li>
            <li>
              Mejorar la calidad de nuestros servicios y la experiencia del
              usuario.
            </li>
            <li>Enviar recomendaciones y actualizaciones relevantes.</li>
          </ul>
          <p>
            Para generar ejercicios personalizados, enviamos tu contexto fitness
            a OpenAI, nuestro proveedor de inteligencia artificial. Esto nos
            permite ofrecerte recomendaciones adaptadas a tus necesidades
            específicas.
          </p>
        </section>

        <section>
          <h2>4. Compartir Información con Terceros</h2>
          <p>
            No compartimos tu información personal con terceros para fines
            comerciales o publicitarios. Sin embargo, para poder ofrecerte un
            servicio de calidad, es necesario que OpenAI procese la información
            que proporcionas.
          </p>
        </section>

        <section>
          <h2>5. Seguridad de los Datos</h2>
          <p>
            Implementamos medidas de seguridad técnicas y organizativas para
            proteger tu información contra accesos no autorizados, pérdida o
            alteración. Sin embargo, recuerda que ningún sistema es
            completamente invulnerable.
          </p>
        </section>

        <section>
          <h2>6. Tus Derechos</h2>
          <p>Tienes derecho a:</p>
          <ul>
            <li>Acceder a la información que tenemos sobre ti.</li>
            <li>Solicitar la corrección o eliminación de tus datos.</li>
            <li>
              Oponerte al procesamiento de tu información en ciertas
              circunstancias.
            </li>
          </ul>
          <p>
            Si deseas ejercer estos derechos, contáctanos a través de los medios
            proporcionados en la aplicación.
          </p>
        </section>

        <section>
          <h2>7. Cambios en esta Política</h2>
          <p>
            Nos reservamos el derecho de actualizar esta política de privacidad
            en cualquier momento. Te notificaremos de cualquier cambio
            significativo a través de la aplicación o por correo electrónico.
          </p>
        </section>

        <section>
          <h2>8. Contacto</h2>
          <p>
            Si tienes preguntas o inquietudes sobre esta política de privacidad,
            no dudes en contactarnos en <strong>smaartui@gmail.com</strong>.
          </p>
        </section>
      </main>
      <Footer />
    </div>
  );
}
