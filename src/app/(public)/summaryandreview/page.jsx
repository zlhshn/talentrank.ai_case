
import InterviewJobDetails from "@/components/InterviewJobDetails/InterviewJobDetails";
import Questions from "@/components/Questions.jsx/Questions";
import { colors, Container, Typography } from "@mui/material";
import React from "react";

const SummaryAndReview = () => {
  return (
    <Container
      maxWidth="md"
      sx={{
        backgroundColor: "#ffffff",
        marginTop: "30px",
        marginBottom:"30px",
        padding:"20px",
      }}
    >
      <Typography>add-interview.title</Typography>
      <InterviewJobDetails />
      <Questions/>
    </Container>
  );
};

export default SummaryAndReview;
