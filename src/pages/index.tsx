import Head from "next/head";
import Image from "next/image";

import styles from "@/styles/home.module.css";
import heroImg from "@/public/assets/hero.png";

export default function Home() {
  return (
    <div className={`${styles.container} d-flex-column-center`}>
      <Head>
        <title>Tarefas+</title>
      </Head>
      <main className={styles.main}>
        <div className="d-flex-column-center">
          <Image
            className={styles.hero}
            alt="Logo Tarefas+"
            src={heroImg}
            objectFit="contain"
            priority
          />
        </div>
        <h2 className={styles.title}>
          Sistema feito oara você organizar <br /> seus estudos e tarefas
        </h2>
        <div className="d-flex-center justify-around responsive-column">
          <section className={styles.box}>
            <span>+12 posts</span>
          </section>
          <section className={styles.box}>
            <span>+90 comentarios</span>
          </section>
        </div>
      </main>
    </div>
  );
}
