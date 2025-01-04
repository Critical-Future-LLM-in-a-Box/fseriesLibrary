import React from "react";
import { Box } from "@mui/material";
import backgroundImage from "../../public/fseries.png";
import overlayImage from "../../public/fseries.gif";

interface BackgroundProps {
  children: React.ReactNode;
}

const Background: React.FC<BackgroundProps> = ({ children }) => {
  const [showOverlay, setShowOverlay] = React.useState(true);

  React.useEffect(() => {
    const timer = setTimeout(() => setShowOverlay(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        minHeight: "100vh",
        overflowY: "auto"
      }}
    >
      <Box
        sx={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100vh",
          zIndex: 0
        }}
      >
        <Box
          component="img"
          src={backgroundImage}
          alt="background"
          sx={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            position: "absolute",
            top: 0,
            left: 0
          }}
        />
        {showOverlay && (
          <Box
            component="img"
            src={overlayImage}
            alt="overlay"
            sx={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              position: "absolute",
              top: 0,
              left: 0
            }}
          />
        )}
      </Box>
      <Box sx={{ position: "relative" }}>{children}</Box>
    </Box>
  );
};

export default React.memo(Background);
