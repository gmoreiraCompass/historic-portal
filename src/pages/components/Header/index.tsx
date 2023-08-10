import styles from '../../../../styles/Header.module.css'
import {PicPayIcon} from '../../../components/Icons'
import MenuProfile from '../MenuProfile/Index'

export default function Header() {
    return (
        <div className={styles.header}>
            <div>
                <PicPayIcon/>
            </div>
            <div>
                <MenuProfile/>
            </div>
        </div>
    )
}