import React, { FC } from "react";
import { AutoCardsButton } from "./card-button";

interface AutoCardsContentProps {
  id: number;
  name: string;
  image: string;
  linkTo: string;
  buttonText: string;
  buttonTo: string;
  description: string;
  brand: string;
  capacity: string;
  cocina: string;
  wc: string;
  autonomía: string;
}

export const AutoCardsContent: FC<AutoCardsContentProps> = ({
  id,
  name,
  image,
  linkTo,
  buttonText,
  buttonTo,
  description,
  brand,
  capacity,
  cocina,
  wc,
  autonomía,
}) => (
  <div className="card" key={id}>
    <a href={linkTo}>
      <div className="imageCard-container">
        <img className="card-image" src={image} alt={name} />
      </div>

      <div className="card-content">
        <div className="card-text">
          <span>{brand}</span>
          <h3>{name}</h3>
          <p>{description}</p>
        </div>
        <div className="card-details">
          <ul>
            <li>
              <span>{capacity}</span>
            </li>
            <li>
              <span>{cocina}</span>
            </li>
            <li>
              <span>{wc}</span>
            </li>
            <li>
              <span>{autonomía}</span>
            </li>
          </ul>
        </div>
        <AutoCardsButton
          className="card-button"
          dataName={name}
          buttonText={buttonText}
          buttonTo={buttonTo}
        />
      </div>
    </a>
  </div>
);


