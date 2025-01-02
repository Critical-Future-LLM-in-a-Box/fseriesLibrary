import React from "react";
import { createRoot } from "react-dom/client";

import { Box } from "@mui/material";
import { CssBaseline } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import { ToastContainer } from "react-toastify";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import { AuthWrapper } from "@/components/Auth";
import App from "@/App";

const theme = createTheme();
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 10 * 60 * 1000,
      refetchInterval: 10 * 60 * 1000,
    },
    mutations: {},
}});

const RootComponent = () => {
  return (
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <ToastContainer />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              position: "relative",
              overflow: "auto",
              minWidth: "350px",
              minHeight: "100vh",
              backgroundImage: "url(/fseries.png)",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat"
            }}
          >
            <AuthWrapper>
              <App />
            </AuthWrapper>
          </Box>
        </ThemeProvider>
        {/* <ReactQueryDevtools /> */}
      </QueryClientProvider>
    </React.StrictMode>
  );
};

const root = document.getElementById("root");
if (!root) throw new Error("No root element");
createRoot(root).render(<RootComponent />);
