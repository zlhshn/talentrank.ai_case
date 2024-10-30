import { useState } from "react";
import { LinearProgress, Box, Typography, Slider } from "@mui/material";

function ScoreProgress() {
  const [score, setScore] = useState(1); // Başlangıç puanı

  // Slider ile puanı güncelleme fonksiyonu
  const handleScoreChange = (event, newValue) => {
    setScore(newValue);
  };

  return (
    <Box sx={{ width: "80px" }} display={"flex"} alignContent={"center"}>
      <Slider
        value={score}
        onChange={handleScoreChange}
        aria-labelledby="score-slider"
        valueLabelDisplay="auto"
        min={0}
        max={3}
        step={1}
        marks={[{ value: 0 }, { value: 1 }, { value: 2 }, { value: 3 }]}
      
      />
    </Box>
  );
}

export default ScoreProgress;
