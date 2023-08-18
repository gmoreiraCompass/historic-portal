import { useEffect, useRef, useState } from "react";
import style from "./style.module.css";
import { EyeOffIcon } from "../../../components/Icons";
import Profile from "../ProfileComponent/index";
import BtnMenu from "../BtnMenu";
import { users } from "../../../data";

interface UserData {
    name: string,
    email: string,
    bankBranch: string,
    accountNumber: string
}

export default function MenuProfile() {
    const dropDownRef = useRef(null);
    const [isActive, setIsActive] = useState(false);
    const [userPersonalData, setUserPersonalData] = useState<UserData>({
        name: '',
        email: '',
        bankBranch: '',
        accountNumber: ''
    });

    useEffect(() => {
        setUserPersonalData({
            name: users[0].name,
            email: users[0].email,
            bankBranch: users[0].bankBranch,
            accountNumber: users[0].accountNumber
        })
    }, [])

    return (
        <div className={style.menuContainer}>
            <div>
                <EyeOffIcon />
                <BtnMenu setIsActive={setIsActive} active={isActive} />
            </div>
            <nav
                className={isActive ? style.active : style.inactive}
                ref={dropDownRef}
            >
                <Profile
                    name={userPersonalData.name}
                    email={userPersonalData.email}
                    bankBranch={userPersonalData.bankBranch}
                    accountNumber={userPersonalData.accountNumber}
                />
            </nav>
        </div>

    )
}