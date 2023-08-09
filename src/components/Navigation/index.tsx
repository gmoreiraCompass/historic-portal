import Link from "next/link";

import styles from "./Navigation.module.css";
import { DocumentIcon, InvoiceIcon, ReceiptIcon } from "../Icons";

export default function Navigation() {
    return (
        <div className={styles.container}>
            <span className={styles.person}>Olá, Eliza!</span>
            <nav className={styles.navigation}>
                <Link href="/">
                    <DocumentIcon />
                    Documentos
                </Link>
                <Link href="/">
                    <ReceiptIcon />
                    Extrato
                </Link>
                <Link href="/">
                    <InvoiceIcon />
                    Fatura de cartão
                </Link>
            </nav>
        </div>
    );
}
