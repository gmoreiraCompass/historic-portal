import { useRef, useState } from "react";
import { BtnMenu } from "../BtnMenu/Index";
import { Profile } from "../ProfileComponent";
import style from "./style.module.css";

export function MenuProfile() {
    const dropDownRef = useRef(null);
    const [isActive, setIsActive] = useState(false);
    console.log(isActive);

    return (
        <div className={style.menuContainer}>
            <div>
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