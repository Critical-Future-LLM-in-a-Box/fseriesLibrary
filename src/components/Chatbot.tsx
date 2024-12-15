import React, { useEffect, useState } from "react";
import { Box, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";

interface ChatbotMethods {
  initChatbot: (config: { [key: string]: any }) => void;
  destroyChatbot: () => void;
}

const Chatbot: React.FC = () => {
  const [chatbotMethods, setChatbotMethods] = useState<ChatbotMethods | null>(
    null
  );

  const theme = useTheme();
  const isLgUp = useMediaQuery(theme.breakpoints.up("lg"));
  const [isLg, setIsLg] = useState(true);

  useEffect(() => {
    setIsLg(isLgUp);
  }, [isLgUp]);

  useEffect(() => {
    (async () => {
      const scriptUrl =
        "https://critical-future-llm-in-a-box.github.io/llminaboxchatbots/dist/llminaboxChat.js";

      const module = await import(/* @vite-ignore */ scriptUrl);

      if (module?.initChatbot && module?.destroyChatbot) {
        setChatbotMethods({
          initChatbot: module.initChatbot,
          destroyChatbot: module.destroyChatbot
        });
      }
    })().catch(console.error);
  }, []);

  const chatbotConfig = {
    apiHost: "https://llminabox.criticalfutureglobal.com",
    chatflowId: "e89d6572-be23-4709-a1f5-ab2aaada13cd",
    ui: {
      foregroundColor: "#e0e0e0",
      backgroundColor: "#181818",
      backgroundColorBody: "#545454"
    },
    onRequest: (request: { content: string }) => {
      (async () => {
        const response = await fetch(
          "https://llminabox.criticalfutureglobal.com/api/v1/prediction/16af3787-20f9-4555-9453-50e5110cf885",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
              question: request.content
            })
          }
        );
        const responseJson = await response.json();
        const responseText = responseJson.text;
        const regex = /\[|\]/g;
        const validJsonString = responseText.replace(regex, (match: string) =>
          match === "\\\\" || match === "\\[\\]"
            ? match
            : match === "["
              ? "{"
              : "}"
        );
        const responseObj = JSON.parse(validJsonString);
        console.log(responseObj.Recommendation);
      })().catch(console.error);
    }
  };

  useEffect(() => {
    (async () => {
      if (isLg) {
        const floatingChatbot =
          document.body.querySelector("#llminabox-bubble");
        if (floatingChatbot) {
          floatingChatbot.remove();
        }
        chatbotMethods?.destroyChatbot();
        chatbotMethods?.initChatbot(chatbotConfig);
      }

      if (!isLg) {
        chatbotMethods?.destroyChatbot();
        chatbotMethods?.initChatbot(chatbotConfig);
      }
    })().catch(console.error);
  }, [chatbotMethods, isLg]);

  return isLg ? (
    <Box
      id="llminabox-full"
      sx={{ width: "100%", height: "100%" }}
    />
  ) : null;
};

export default Chatbot;
