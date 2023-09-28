import Link from "next/link";
import { Montserrat } from "next/font/google";
import styles from "./Menu.module.css";
import React from "react";
import AuthContext from "../Contexts/MyContext";
import Modal from "../Modal/Modal";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export default function Menu() {
  const [mounted, setMounted] = React.useState(false);
  return (
    <AuthContext.Provider
      value={{
        mounted,
        setMounted,
      }}
    >
      <header className={styles.header}>
        <aside className={styles.aside}>
          <img src="/logo.svg" alt="bruta" className={styles.logo} />
          <nav className={styles.nav}>
            <ul className={styles.ul}>
              <li className={styles.li}>
                <Link href="/" className={styles.link}>
                  Inicio
                </Link>
                <img
                  src="/icons/home.svg"
                  alt="Inicio"
                  className={styles.icon}
                />
              </li>
              <li className={styles.li}>
                <Link href="/dados" className={styles.link}>
                  Dados
                </Link>
                <img
                  src="/icons/data.svg"
                  alt="dados"
                  className={styles.icon}
                />
              </li>
              <li className={styles.li}>
                <Link href="" className={styles.link} onClick={() => setMounted(true)}>
                  Adicionar
                </Link>
                <img
                  src="/icons/upload.svg"
                  alt="cadastrar"
                  className={styles.icon}
                />
              </li>
              <li className={styles.li}>
                <Link href="/" className={styles.link}>
                  Sair
                </Link>
                <img src="/icons/exit.svg" alt="sair" className={styles.icon} />
              </li>
            </ul>
          </nav>
        </aside>
      </header>
      <Modal children={
        <div className={styles.div}>
          <label>Procurar Arquivo</label>
          <input type="file" name="file" id="file" />
        </div>
      } />
    </AuthContext.Provider>
  );
}
