import React from "react";
import { createRoot } from "react-dom/client";

import { CssBaseline } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import { ToastContainer } from "react-toastify";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { AuthWrapper } from "@/components/Auth";
import App from "@/App";

const theme = createTheme();
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 10 * 60 * 1000,
      refetchInterval: 10 * 60 * 1000
    },
    mutations: {}
  }
});

const RootComponent = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <ToastContainer />
        <AuthWrapper>
          <App />
        </AuthWrapper>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

createRoot(document.getElementById("root")!).render(<RootComponent />);
