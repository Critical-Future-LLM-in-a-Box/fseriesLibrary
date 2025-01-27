import React, { memo, useEffect, useRef, useMemo, useCallback } from "react";
import { Box, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { Item } from "@/store";
// @ts-ignore
// eslint-disable-next-line
import { initChatbot } from "https://critical-future-llm-in-a-box.github.io/llminaboxchatbots/dist/llminaboxChat.js";

interface ChatbotProps {
  onMediaRecommendationAdd: (item: Item) => Promise<void>;
  onPartsRecommendationAdd: (item: Item) => Promise<void>;
}

const Chatbot: React.FC<ChatbotProps> = ({
  onMediaRecommendationAdd,
  onPartsRecommendationAdd
}) => {
  const theme = useTheme();

  const handleResponse = useCallback(async (message: { content: string }) => {
    try {
      const response = await fetch(
        "https://llminabox.criticalfutureglobal.com/api/v1/prediction/16af3787-20f9-4555-9453-50e5110cf885",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            question: message.content
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
      const recommendations = responseObj.Recommendation;

      Object.keys(recommendations).forEach((key) => {
        if (key.toLowerCase().includes("media")) {
          const mediaRecommendations = recommendations[key];
          const mediaRecommendationsData = {
            id: Date.now(),
            title: "",
            description: "",
            url: "",
            image: ""
          };
          Object.keys(mediaRecommendations).forEach((property) => {
            if (property.toLowerCase().includes("title")) {
              mediaRecommendationsData.title = mediaRecommendations[property];
            }
            if (property.toLowerCase().includes("description")) {
              mediaRecommendationsData.description =
                mediaRecommendations[property];
            }
            if (property.toLowerCase().includes("url")) {
              mediaRecommendationsData.url = mediaRecommendations[property];
            }
          });

          console.log("mediaRecommendationsData", mediaRecommendationsData);

          onMediaRecommendationAdd(mediaRecommendationsData);
        }

        if (key.toLowerCase().includes("parts")) {
          const partsRecommendations = recommendations[key];
          const partsRecommendationsData = {
            id: Date.now(),
            title: "",
            description: "",
            url: "",
            image: ""
          };
          Object.keys(partsRecommendations).forEach((property) => {
            if (property.toLowerCase().includes("title")) {
              partsRecommendationsData.title = partsRecommendations[property];
            }
            if (property.toLowerCase().includes("description")) {
              partsRecommendationsData.description =
                partsRecommendations[property];
            }
            if (property.toLowerCase().includes("url")) {
              partsRecommendationsData.url = partsRecommendations[property];
            }
          });

          console.log("partsRecommendationsData", partsRecommendationsData);

          onPartsRecommendationAdd(partsRecommendationsData);
        }
      });
    } catch (error) {
      if (error instanceof Error) console.error("Error => ", error.message);
    }
  }, []);

  const config = useMemo(
    () => ({
      apiHost: "https://llminabox.criticalfutureglobal.com",
      chatflowId: "0f6e4479-ba3d-4a34-b0cb-be96f269a24c",
      assistant: {
        name: "Joe",
        description: "Fseries AI Assistant",
        welcomeMessage: "Hello! How can I help you?",
        voice: {
          name: "en-US-AndrewNeural",
          apiKey: "G7x9mVt2Q5bK8Jp4S1Zc",
          apiHost: "https://tts.criticalfutureglobal.com/get_tts"
        },
        avatar: {
          staticUrl:
            "https://critical-future-llm-in-a-box.github.io/llminaboxchatbots/Avatars/fs/joe.png",
          liveUrl:
            "https://critical-future-llm-in-a-box.github.io/llminaboxchatbots/Avatars/fs/joe.gif",
          videoUrl:
            "https://critical-future-llm-in-a-box.github.io/llminaboxchatbots/Avatars/fs/joe.mp4"
        }
      },
      ui: {
        sidebar: true,
        foregroundColor: "#e0e0e0",
        backgroundColor: "#1a1a1a",
        backgroundColorBody: "#545454bb"
      },
      onResponse: handleResponse
    }),
    [handleResponse]
  );

  const chatRef = useRef<HTMLDivElement>(null);
  const isLg = useMediaQuery(theme.breakpoints.up("md"));

  useEffect(() => {
    const mode = isLg ? "full" : "bubble";
    const newChatbot = initChatbot(config, chatRef.current, mode);
    return () => {
      newChatbot?.destroy();
    };
  }, [isLg, config]);

  return isLg ? (
    <Box
      ref={chatRef}
      sx={{ width: "100%", height: "100%" }}
    />
  ) : null;
};

export default memo(Chatbot);
