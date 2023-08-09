import React from "react";
import style from "./style.module.css"
interface BtnMenuProps {
  setIsActive: React.Dispatch<React.SetStateAction<boolean>>;
  active: boolean;
}

export function BtnMenu({ setIsActive, active }: BtnMenuProps) {
  const onClick = () => {
    setIsActive(!active);
  };

  return (
    <button className={style.botao} onClick={onClick}>
      <img src="images/arrow-down-sign-to-navigate.png" alt="seta" />  
      <img src="images/user.png" alt="foto perfil" />
    </button>
  );
}
