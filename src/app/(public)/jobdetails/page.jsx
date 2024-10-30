"use client";

import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import {
  Container,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormLabel,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";


const Page = () => {
  const dispatch = useDispatch();
  const { jobData } = useSelector((state) => state.interview); 

  const [data, setData] = useState({
    jobTitle: "",
    jobDescription: "",
    interviewDuration: "",
    jobLocation: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    

    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    
  
  };

  console.log(data);



  return (
    <Container
      maxWidth="xs"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        marginTop: "50px",
        marginBottom: "180px",
      }}
    >
      <Box sx={{ width: "100%", textAlign: "center", mb: 5 }}>
        <h2>add-interview.createNewInterview</h2>
        <p>add-interview.jobDescriptionDetails</p>
      </Box>

      <form style={{ width: "100%" }}>
        <Box sx={{ width: "100%", mb: 2 }}>
          <TextField
            name="jobTitle"
            label="add-interview.jobTitle"
            value={data.jobTitle}
            onChange={handleInputChange}
            fullWidth
          />
        </Box>

        <Box sx={{ width: "100%", mb: 2 }}>
          <textarea
            name="jobDescription"
            rows={6}
            style={{ width: "100%" }}
            value={data.jobDescription}
            onChange={handleInputChange}
            placeholder="Job description"
          ></textarea>
        </Box>

        <Box sx={{ width: "100%", mb: 2 }}>
          <FormControl fullWidth>
            <InputLabel id="demo-select-small-label">
              add-interview.interviewDuration (All will generate 6 questions)
            </InputLabel>
            <Select
              name="interviewDuration"
              labelId="demo-select-small-label"
              id="demo-select-small"
              label="add-interview.interviewDuration (All will generate 6 questions)"
              value={data.interviewDuration}
              onChange={handleInputChange}
            >
              <MenuItem value={10}>10 minutes</MenuItem>
              <MenuItem value={20}>20 minutes</MenuItem>
              <MenuItem value={30}>30 minutes</MenuItem>
            </Select>
          </FormControl>
        </Box>

        <Box sx={{ width: "100%" }}>
          <FormLabel id="demo-radio-buttons-group-label">
            Job Location
          </FormLabel>
          <RadioGroup
            row
            aria-labelledby="demo-radio-buttons-group-label"
            value={data.jobLocation} 
            name="jobLocation" 
            onChange={handleInputChange}
            sx={{
              display: "flex",
              justifyContent: "space-between",
              mt: 2,
            }}
          >
            <FormControlLabel
              value="remote"
              control={<Radio />}
              label="Remote"
            />
            <FormControlLabel
              value="hybrid"
              control={<Radio />}
              label="Hybrid"
            />
            <FormControlLabel value="other" control={<Radio />} label="Other" />
          </RadioGroup>
        </Box>
      </form>
    </Container>
  );
};

export default Page;
