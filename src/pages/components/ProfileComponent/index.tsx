import { ReceiptIcon } from "../../../components/Icons"
import style from "./style.module.css"

export default function Profile() {
    return (
        <div className={style.profileContainer}>
            <section className={style.userName}>
                <img src="./images/pessoa.jpg" alt="Foto usuário" />
                <div>
                    <p>Nome do Usuário</p>
                    <p>nome.sobrenome</p>
                </div>
            </section>
            <section className={style.bankInfo}>
                <div>
                    <p>Agência</p>
                </div>
                <div>
                    <p>Conta</p>
                </div>
                <div>
                    <p>Instituição</p>
                </div>
            </section>
            <section className={style.bankDocumentation}>
                <a href="#">
                    <ReceiptIcon />
                    <p>Extrato Banco Original</p>
                </a>
                <a href="#">
                    <ReceiptIcon />
                    <p>Histórico Original (Arquivos pdf)</p>
                </a>
                <a href="#">
                    <ReceiptIcon />
                    <p>Open Finance</p>
                </a>
                <a href="#">
                    <ReceiptIcon />
                    <p>Ajuda</p>
                </a>
                <a href="#">
                    <ReceiptIcon />
                    <p>Sair</p>
                </a>
            </section>
        </div>
    )
}