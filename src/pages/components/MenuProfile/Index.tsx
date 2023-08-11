import { useRef, useState } from "react";
import style from "./style.module.css";
import { EyeOffIcon } from "../../../components/Icons";
import Profile from "../ProfileComponent/index";
import BtnMenu from "../BtnMenu";

export default function MenuProfile() {
    const dropDownRef = useRef(null);
    const [isActive, setIsActive] = useState(false);

    return (
        <div className={style.menuContainer}>
            <div>
                <EyeOffIcon/>
                <BtnMenu setIsActive={setIsActive} active={isActive} />
            </div>
            <nav
                className={isActive ? style.active : style.inactive}
                ref={dropDownRef}
            >
                <Profile />
            </nav>
        </div>

    )
}