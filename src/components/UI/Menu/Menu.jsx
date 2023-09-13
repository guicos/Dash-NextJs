import Link from 'next/link';
import { Montserrat } from 'next/font/google';
import styles from './Menu.module.css';

const montserrat = Montserrat({ subsets: ['latin'], variable: '--font-montserrat' })

export default function Menu(){
    return(
            <header className={styles.header}>
                <aside className={styles.aside}>
                    <img src="./logo.svg" alt="bruta" className={styles.logo}/>
                    <nav className={styles.nav}>
                        <ul className={styles.ul}>
                            <li className={styles.li}>
                                <Link href="/" className={styles.link}>Inicio</Link>
                                <img src="./icons/home.svg" alt="Inicio" className={styles.icon}/>
                            </li>
                            <li className={styles.li}>
                                <Link href="/dados" className={styles.link}>Dados</Link>
                                <img src="/icons/data.svg" alt="dados" className={styles.icon}/>
                            </li>
                            <li className={styles.li}>
                                <Link href="/cadastro" className={styles.link}>Adicionar</Link>
                                <img src="/icons/upload.svg" alt="cadastrar"className={styles.icon} />
                            </li>
                            <li className={styles.li}>
                                <Link href="/" className={styles.link}>Sair</Link>
                                <img src="/icons/exit.svg" alt="sair"className={styles.icon} />
                            </li>
                        </ul>
                    </nav>
                </aside>
            </header>
    )
}