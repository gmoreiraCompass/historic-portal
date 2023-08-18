import { ReceiptIcon, UserIcon } from "../../../components/Icons";
import style from "./style.module.css";

interface User {
    name: string,
    email: string,
    bankBranch: string,
    accountNumber: string
}

export default function Profile({name, email, bankBranch, accountNumber}:User) {
    

    return (
        <div className={style.profileContainer}>
            <section className={style.userName}>
                <UserIcon />
                <div>
                    <p>{name}</p>
                    <p>{email}</p>
                </div>
            </section>
            <section className={style.bankInfo}>
                <div>
                    <p>Agência</p>
                    <p>{bankBranch}</p>
                </div>
                <div>
                    <p>Conta</p>
                    <p>{accountNumber}</p>
                </div>
                <div>
                    <p>Instituição</p>
                    <p>PicPay</p>
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
    );
}
