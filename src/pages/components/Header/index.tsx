import Styles from '../../../../styles/Header.module.css'

export function Header() {
    return (
        <div className={Styles.header}>
            <div>
                <img src="./images/Logo PicPay.svg" alt="" />
            </div>
            <div>
                <img src="./images/visualizar.svg" alt="" />
                <img src="./images/Dropdown Header Account.svg" alt="" />
            </div>
        </div>
    )
}