import React from "react";
import { Box } from "@mui/material";

interface BackgroundProps {
  children: React.ReactNode;
}

const Background: React.FC<BackgroundProps> = ({ children }) => {
  return (
    <>
      <Box
        component="img"
        src={
          "https://critical-future-llm-in-a-box.github.io/fseriesLibrary/public/fseries.png"
        }
        alt="background"
        sx={{
          width: "100vw",
          height: "100vh",
          objectFit: "cover",
          position: "absolute"
        }}
      />
      {children}
    </>
  );
};

export default React.memo(Background);
