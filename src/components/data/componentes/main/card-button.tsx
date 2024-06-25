import React, { FC } from "react";

interface AutoCardsButtonProps {
  buttonText: string;
  buttonTo: string;
  className: string;
  dataName: string
}

export const AutoCardsButton: FC<AutoCardsButtonProps> = ({ buttonText, buttonTo, className, dataName }) => (
  <div className={className}>
    <a href={buttonTo} data-name={dataName}>
      <button>{buttonText}</button>
    </a>
  </div>

);

