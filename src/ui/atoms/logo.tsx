import styles from './logo.module.scss'; // Importamos el archivo SCSS

export function Logo() {
  return (
    <div className={styles['logo-container']}>
      <img src="/path/to/your/logo.png" alt="Logo" className={styles['logo-image']} />
      <span className={styles['logo-text']}>Smart UI</span>
    </div>
  );
}
