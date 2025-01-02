import React, { useEffect, useState } from "react";
import { Box, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { Item, useStore } from "@/store";

interface ChatbotMethods {
  initChatbot: (config: { [key: string]: any }) => void;
  destroyChatbot: () => void;
}

const Chatbot: React.FC = () => {
  const store = useStore();

  const [chatbotMethods, setChatbotMethods] = useState<ChatbotMethods | null>(
    null
  );

  const theme = useTheme();
  const isLgUp = useMediaQuery(theme.breakpoints.up("xl"));
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
        liveUrl: "",
        videoUrl: ""
      }
    },
    ui: {
      foregroundColor: "#e0e0e0",
      backgroundColor: "#181818",
      backgroundColorBody: "#545454"
    },
    onResponse: (request: { content: string }) => {
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
        const recommendations = responseObj.Recommendation;
        Object.keys(recommendations).forEach((key) => {
          if (key.toLocaleLowerCase().includes("media")) {
            const mediaRecommendations = recommendations[key];
            const mediaRecommendationsData: Item = {
              title: "",
              description: "",
              url: ""
            };
            Object.keys(mediaRecommendations).forEach((property) => {
              if (property.toLocaleLowerCase().includes("title")) {
                mediaRecommendationsData.title = mediaRecommendations[property];
              }
              if (property.toLocaleLowerCase().includes("description")) {
                mediaRecommendationsData.description =
                  mediaRecommendations[property];
              }
              if (property.toLocaleLowerCase().includes("url")) {
                mediaRecommendationsData.url = mediaRecommendations[property];
              }
            });
            console.log(mediaRecommendationsData);

            store.setMediaRecommendations([mediaRecommendationsData]);
          }
          if (key.toLocaleLowerCase().includes("parts")) {
            const partsRecommendations = recommendations[key];
            const partsRecommendationsData: Item = {
              title: "",
              description: "",
              url: ""
            };
            Object.keys(partsRecommendations).forEach((property) => {
              if (property.toLocaleLowerCase().includes("title")) {
                partsRecommendationsData.title = partsRecommendations[property];
              }
              if (property.toLocaleLowerCase().includes("description")) {
                partsRecommendationsData.description =
                  partsRecommendations[property];
              }
              if (property.toLocaleLowerCase().includes("url")) {
                partsRecommendationsData.url = partsRecommendations[property];
              }
            });
            console.log(partsRecommendationsData);

            store.setPartsRecommendations([partsRecommendationsData]);
          }
        });
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
