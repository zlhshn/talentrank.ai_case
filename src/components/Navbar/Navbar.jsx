"use client";

import React from "react";
import { usePathname, useRouter } from "next/navigation";
import styles from "./Navbar.module.scss";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import Card from "../Card.jsx/Card"; 


const Navbar = () => {
  const currentPath = usePathname(); 
  // console.log(currentPath);

  return (
    <div className={styles["grid-cont"]}>
      <p className={styles.back}>
        <ChevronLeftIcon fontSize="small" /> ADD-INTERVIEW.BACK
      </p>
      <Card
        title={"add-interview.jobDetails"}
        description={"add-interview.jobDetailsDesc"}
        className={currentPath === "/jobdetails" ? styles.activeCard : ""}
      />
      <div className={styles.line}></div>
      <Card
        title={"add-interview.configuraSkillset"}
        description={"add-interview.configuraSkillsetDesc"}
        className={currentPath === "/configureskillset" ? styles.activeCard : ""}
      />
      <div className={styles.line}></div>
      <Card
        title={"add-interview.summaryAndReview"}
        description={"add-interview.summaryAndReviewDesc"}
        className={currentPath === "/summaryandreview" ? styles.activeCard : ""}
      />
    </div>
  );
};

export default Navbar;