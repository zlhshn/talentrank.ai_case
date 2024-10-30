"use client";

import React from "react";
import { Box, Container } from "@mui/material";
import Questions from "@/components/Questions.jsx/Questions";

const Page = () => {
  const mockQuestions = [
    {
      question:
        "What steps do you follow in a software development process from start to finish? Which methods or tools do you prefer to enhance the efficiency of the process?",
    },
    {
      question:
        "What was the most challenging bug or technical problem you've encountered on a project? How did you address it, and what methods did you use to find a solution?",
    },
    {
      question:
        "What does maintaining high code quality and writing sustainable code mean to you? How do you evaluate and improve your own code?",
    },
    {
      question:
        "What methods do you use to keep up with the rapid changes in the software industry? Could you talk about a new technology or approach you've recently learned?",
    },
    {
      question:
        "How do you ensure effective communication when working in a software development team? What are the most important elements you pay attention to in team communication?",
    },
    {
      question:
        "How do you approach a project that needs to be delivered on time? How do you organize the steps from planning to delivery?",
    },
  ];

  
  return (
    <Container
      maxWidth="md"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        marginTop: "50px",
      }}
    >
      <Box sx={{ width: "100%", textAlign: "center", mb: 5 }}>
        <h2>add-interview.customize</h2>
        <p>add-interview.description</p>
      </Box>

      {mockQuestions.map((item, index) => (
        <Questions key={index} question={item.question} />
      ))}

      <Box 
      
        sx={{
          padding: "2px",
          minWidth: "680px",
          backgroundColor: "white",
          border: "1px solid purple",
          color: "purple",
          textAlign: "center",
          cursor: "pointer",
          margin:"20px"
        }}
      >
        +
      </Box>
    </Container>
  );
};

export default Page;
