import style from "./style.module.css"

export function Profile (){
    return (
        <div className={style.perfilContainer}>
            <section className={style.userName}>
                <img src="./images/pessoa.jpg" alt="" />
                <div>
                    <p>Nome do Usuário</p>
                    <p>nome.sobrenome</p>
                </div>
            </section>
            <section className={style.secaoBancaria}>
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
            <section className={style.documentacao}>
                <a href="#">
                    <img src="./images/extrato.svg" alt="extrato" />
                    <p>Extrato Banco Original</p>
                </a>
                <a href="#">
                    <img src="./images/extrato.svg"alt="historico" />
                    <p>Histórico Original (Arquivos pdf)</p>
                </a>
                <a href="#">
                    <img src="./images/extrato.svg" alt="open Finance" />
                    <p>Open Finance</p>
                </a>
                <a href="#">
                    <img src="./images/extrato.svg" alt="ajuda" />
                    <p>Ajuda</p>
                </a>
                <a href="#">
                    <img src="./images/extrato.svg" alt="sair" />
                    <p>Sair</p>
                </a>
            </section>
            
        </div>
    )
}