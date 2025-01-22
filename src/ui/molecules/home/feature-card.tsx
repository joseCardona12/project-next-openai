import { JSX } from 'react';
import styles from './featureCard.module.scss'; // Importamos el archivo SCSS

interface FeatureCardProps {
  icon: JSX.Element; // Mantener el tipo de ícono como JSX.Element para los SVGs
  title: string;
  description: string;
}

export function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className={styles['feature-card']}>
      <div className={styles['icon-container']}>
        {icon} {/* Aquí pasamos el componente SVG directamente */}
      </div>
      <h3 className={styles['title']}>{title}</h3>
      <p className={styles['description']}>{description}</p>
    </div>
  );
}
