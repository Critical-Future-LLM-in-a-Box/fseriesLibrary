import React, { memo, useEffect, useRef, useState } from "react";
import { Box, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useStore } from "@/store";
import { chatbotConfig } from "@/config";
import { initChatbot } from "@/llminaboxChat";

const Chatbot: React.FC = () => {
  const store = useStore();
  const theme = useTheme();
  const config = chatbotConfig(store);
  const chatRef = useRef<HTMLDivElement>(null);
  const isLg = useMediaQuery(theme.breakpoints.up("xl"));

  const [chatbot, setChatbot] = useState<{
    config: {};
    container: any;
    destroy: () => void;
  } | null>(null);

  useEffect(() => {
    const mode = isLg ? "full" : "bubble";

    const newChatbot = initChatbot(config, chatRef.current, mode);
    setChatbot(newChatbot);

    return () => {
      newChatbot?.destroy();
    };
  }, [isLg]);

  return isLg ? (
    <Box
      ref={chatRef}
      sx={{ width: "100%", height: "100%" }}
    />
  ) : null;
};

export default memo(Chatbot);
