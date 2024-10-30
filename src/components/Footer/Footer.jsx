"use client";

import React from "react";
import footerstyle from "./Footer.module.scss";
import { Box } from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import CustomButton from "../Button/CustomButton";
import { useDispatch, useSelector } from "react-redux";
import { usePathname, useRouter } from "next/navigation";
import { setInterviewData } from "../../redux/features/interviewSlice"; // Gerekirse bu importu ekleyin

const Footer = () => {
  const router = useRouter();
  const currentPath = usePathname(); 
  const dispatch = useDispatch();
  
 
 
  
  // const handleProceed = () => {
  //   console.log("Proceed button clicked"); // Debugging
  //   console.log({ jobTitle, jobDescription, interviewDuration, jobLocation });

  //   if (currentPath === "/jobdetails") {
  //     if (jobTitle && jobDescription && interviewDuration && jobLocation) {
 
  //       router.push("/configureskillset"); 
  //     } else {
  //       alert("Lütfen tüm alanları doldurun!"); // Hata mesajı
  //     }
  //   }
  // };

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
          ADD-INTERVIEW.DRAFTD
        </CustomButton>

        <CustomButton
          color="#ffffff"
          gradient={true}
          // Proceed butonuna tıklayınca yönlendirme işlemi
        >
          ADD-INTERVIEW.PROCEED
        </CustomButton>
      </Box>
    </Box>
  );
};

export default Footer;