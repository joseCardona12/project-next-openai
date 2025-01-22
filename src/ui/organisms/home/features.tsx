import { FeatureCard } from "../../molecules/home/feature-card";
import styles from './features.module.scss'; // Importamos el archivo SCSS

export function Features() {
  const features = [
    {
      icon: <svg /* tu SVG aquí */ />,
      title: "Rutinas Personalizadas",
      description: "Obtén planes de entrenamiento adaptados a tus objetivos y nivel.",
    },
    {
      icon: <svg /* tu SVG aquí */ />,
      title: "Entrenamiento Inteligente",
      description: "Aprende la técnica correcta y optimiza tus resultados.",
    },
    {
      icon: <svg /* tu SVG aquí */ />,
      title: "Consejos Nutricionales",
      description: "Recibe recomendaciones personalizadas de nutrición.",
    },
  ];

  return (
    <section className={styles['features-section']} id="features">
      <div className={styles['container']}>
        <div className={`${styles['grid']} ${styles['grid-md']} ${styles['items-start']}`}>
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}
