import React from "react";

interface CardSectionHeadingProps {
  title: string;
}

export const CardSectionHeading: React.FC<CardSectionHeadingProps> = ({
  title,
}) => {
  return <h2 className="">{title}</h2>;
};
