import Link from "next/link";

import styles from "./Navigation.module.css";

export default function Navigation() {
    return (
        <div className={styles.container}>
            <span>Olá, Eliza!</span>
            <nav>
                <Link href="/">Documentos</Link>
                <Link href="/">Extrato</Link>
                <Link href="/">Fatura de cartão</Link>
            </nav>
        </div>
    );
}
