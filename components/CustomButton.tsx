"use client";

import Image from "next/image";

import { CustomButtonProps } from "@types";

const Button = ({ isDisabled, btnType, containerStyles, textStyles, title, icon, handleClick }: CustomButtonProps) => (
  <button
    disabled={isDisabled}
    type={btnType || "button"}
    className={`custom-btn ${containerStyles}`}
    onClick={handleClick}
    
  >
    <span className={`flex-1 ${textStyles}`}>{title}</span>
    {icon && (
      <div className="relative w-6 h-6">
        <Image
          src={icon}
          alt="arrow_left"
          fill
          className="object-contain"
        />
      </div>
    )}
  </button>
);

export default Button;
