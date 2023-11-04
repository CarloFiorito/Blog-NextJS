/* eslint-disable @next/next/no-img-element */
import React from "react";
import styles from "./Card.module.scss";
import { ICardProps } from "./Card.model";
import Button from "../Button/Button";

const Card = ({ title, description, src, createdInfo }: ICardProps) => {
  return (
    <div className={styles.container}>
      <img src="foto1.jpg" alt="Immagine" />
      <p className={styles.container_createdInfo}>{createdInfo}</p>
      <p className={styles.container_title}>{title}</p>
      <p className={styles.container_description}>{description}</p>
      <div className={styles.container_footer}>
        <Button title="Vai all'articolo" onClick={() => console.log("click")} />
      </div>
    </div>
  );
};

export default Card;
