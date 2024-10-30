"use client";

import React from "react";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import styles from "./InterviewJobDetail.module.scss";

const InterviewJobDetails = () => {
  return (
    <div className={styles.box}>
      <div className={styles.header}>
        <h4>add-interview.jobDetails</h4>
        <ModeEditIcon style={{ color: "#808080" }} />
      </div>
      <div className={styles.line}></div>
      <div>
        <h4>add-interview.job-title</h4>
        <p>frontend developer</p>
      </div>
      <div>
        <h4>add-interview.job-description</h4>
        <p>we are looking for a skilled and motived Frontend developer with expertise in React to design, build, and maintain our web-based. platform. The İdwal candidate will have a deep understanding of modern web development</p>
      </div>
    </div>
  );
};

export default InterviewJobDetails;
