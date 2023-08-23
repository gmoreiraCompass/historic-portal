import styles from "../../../../styles/Header.module.css";
import { PicPayIcon } from "../../../components/Icons";
import MenuProfile from "../MenuProfile"

export default function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.wrapper}>
                <PicPayIcon />
                <MenuProfile />
            </div>
        </header>
    );
}
