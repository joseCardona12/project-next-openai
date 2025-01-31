"use client";
import { useEffect } from "react";
import styles from "../steps/Steps.module.scss";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";


const ContextPush: React.FC = () => {
  const router = useRouter();

  useEffect(()=>{
    router.push("/home");
  }, [])
  return (
    <div className={styles.contextpush}>
      <div className={styles.header}>
        <h2 className={styles.title}>
          wait a moment, we are preparing your routine
        </h2>
      </div>
      <div className={styles.optionsGrid}>
        <Image
          src="/img/joseui.png"
          alt="Jose Iu Smart"
          className={styles.icon}
          width={400} 
          height={400} 
        />
      </div>
      <button className={styles.continueButton}>
          <p>
            <Link href="/exercises">Continue</Link>
          </p>
      </button>;

    </div>
  );
};

export default ContextPush;
