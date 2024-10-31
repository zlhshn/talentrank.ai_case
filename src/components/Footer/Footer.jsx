"use client";

import React from "react";
import footerstyle from "./Footer.module.scss";
import { Box } from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import CustomButton from "../Button/CustomButton";
import { useDispatch, useSelector } from "react-redux";
import { usePathname, useRouter } from "next/navigation";
import { setInterviewData } from "../../redux/features/interviewSlice";

const Footer = () => {
  const router = useRouter();
  const currentPath = usePathname();
  const dispatch = useDispatch();

  const jobData = useSelector((state) => state.interview.jobData);
  const { jobTitle, jobDescription, interviewDuration, jobLocation } = jobData;

  const handleProceed = () => {
    console.log("Proceed button clicked");
    console.log({ jobTitle, jobDescription, interviewDuration, jobLocation });

    if (currentPath === "/jobdetails") {
      if (jobTitle && jobDescription && interviewDuration && jobLocation) {
        router.push("/configureskillset");
      } else {
        alert("Lütfen tüm alanları doldurun!");
      }
    }
  };
console.log(jobData);
  return (
    <Box className={footerstyle.footer}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <ChevronLeftIcon fontSize="small" /> ADD-INTERVIEW.PREVIOUS
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "10px",
        }}
      >
        <CustomButton
          gradient={false}
          onClick={() => console.log("Draft button clicked!")}
        >
          ADD-INTERVIEW.DRAFT
        </CustomButton>

        <CustomButton
          color="#ffffff"
          gradient={true}
          onClick={handleProceed}
        >
          ADD-INTERVIEW.PROCEED
        </CustomButton>
      </Box>
    </Box>
  );
};

export default Footer;
