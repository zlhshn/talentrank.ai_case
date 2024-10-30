"use client";

import {
  Box,
  Button,
  Container,
  Stack,
  Typography,
  LinearProgress,
} from "@mui/material";
import React from "react";
import questionStyle from "./Questions.module.scss";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import DragIndicatorIcon from "@mui/icons-material/DragIndicator";
import ScoreProgress from "../ScoreProgress/ScoreProgress";

const Questions = ({question}) => {


  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      gap={"20px"}
      padding={"20px"}
      margin={"20px"}
      sx={{
        backgroundColor: "#ffffff",
      }}
    >
      <Stack
        display={"flex"}
        flexDirection={"row"}
        justifyContent={"space-between"}
      >
        <Typography fontWeight={"600"}>question-number</Typography>
        <ModeEditIcon style={{ color: "#808080" }} />
      </Stack>
      <Stack display={"flex"} flexDirection={"row"} gap={"5px"}>
        <DragIndicatorIcon />
        <textarea
          name=""
          id=""
          cols="80"
          rows="10"
          placeholder={question}
          disabled
        ></textarea>
      </Stack>
      <Stack
        display={"flex"}
        flexDirection={"row"}
        justifyContent={"space-between"}
      >
        <Box
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}
          gap={"20px"}
        >
          <Typography fontSize={"12px"} width={"50px"}>
            Weightage Score:
          </Typography>
          <ScoreProgress />
        </Box>
        <Box>
          <Button variant="outlined" color="error" size="small">
            Remove
          </Button>
        </Box>
      </Stack>
    </Box>
  );
};

export default Questions;
