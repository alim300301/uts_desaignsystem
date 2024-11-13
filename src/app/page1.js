import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <aside className={styles.sidebar}>
        <button className={styles.button}>Button 1</button>
        <button className={styles.button}>Button 2</button>
        <button className={styles.button}>Button 3</button>
      </aside>

      <main className={styles.mainContent}>
        <div className={styles.cardGrid}>
          <div className={styles.card}>Card 1</div>
          <div className={styles.card}>Card 2</div>
          <div className={styles.card}>Card 3</div>
          <div className={styles.card}>Card 4</div>
        </div>
      </main>
    </div>
  );
}