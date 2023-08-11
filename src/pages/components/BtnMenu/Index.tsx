import React from "react";
import style from "./style.module.css"
import { ArrowDownIcon, UserIcon } from "../../../components/Icons";
import { FunctionComponent } from "react";

interface BtnMenuProps {
  setIsActive: (active: boolean) => void;
  active: boolean;
}

export default function BtnMenu({ setIsActive, active }: BtnMenuProps) {

  const onClick = () => {
    setIsActive(!active);
  };

  return (
    <button className={style.menuButton} onClick={onClick}>
      <ArrowDownIcon className={active ? style.downArrow : style.upArrow} />
      <div className={style.userIcon}>
        <UserIcon />
      </div>
    </button>
  );
}
