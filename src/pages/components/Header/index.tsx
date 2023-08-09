import Styles from '../../../../styles/Header.module.css'
import { MenuProfile } from '../MenuProfile/Index'

export function Header() {
    return (
        <div className={Styles.header}>
            <div>
                <img src="./images/Logo PicPay.svg" alt="" />
            </div>
            <div>
                <MenuProfile/>
            </div>
        </div>
    )
}