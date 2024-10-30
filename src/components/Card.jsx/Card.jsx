"use client";

import React from "react";
import cardStyle from "./Card.module.scss"; // Kart bileşeninin stil modülünü içe aktarın

const Card = ({ title, description, className }) => {
  return (
    <div className={`${cardStyle.container} ${className} activeCard`}>
      <p className={cardStyle.title}>{title}</p>
      <p className={cardStyle.desc}>{description}</p>
    </div>
  );
};

export default Card;