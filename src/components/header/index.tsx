import Link from "next/link";
import styles from "./styles.module.css";

export function Header() {
  return (
    <header className={`${styles.header} d-flex-center`}>
      <section className={`${styles.content} d-flex-center jutify-between`}>
        <nav className={`${styles.nav} d-flex-center`}>
          <Link href="/">
            <h1 className={styles.logo}>
              Tarefas<span id="plus">+</span>
            </h1>
          </Link>
          <Link href="/dashboard" className={styles.link}>
            Meu Painel
          </Link>
        </nav>
        <button className={styles.loginButton}>Acessar</button>
      </section>
    </header>
  );
}
