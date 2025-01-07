import React, { useEffect, useMemo, useRef } from "react";
import { createRoot } from "react-dom/client";

import { CssBaseline } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";

import { ToastContainer } from "react-toastify";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import App from "@/App";
import { AuthWrapper } from "@/components/Auth";

const RootComponent = () => {
  const theme = useMemo(() => createTheme(), []);

  const queryClient = useMemo(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 10 * 60 * 1000,
            refetchInterval: 10 * 60 * 1000
          },
          mutations: {}
        }
      }),
    []
  );

  const shadowHost = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (shadowHost.current && !shadowHost.current.shadowRoot) {
      const shadowRoot = shadowHost.current.attachShadow({ mode: "open" });

      const shadowCache = createCache({
        key: "mui",
        container: shadowRoot
      });

      const root = createRoot(shadowRoot);

      root.render(
        <CacheProvider value={shadowCache}>
          <QueryClientProvider client={queryClient}>
            <ThemeProvider theme={theme}>
              <CssBaseline />
              <ToastContainer />
              <AuthWrapper>
                <App />
              </AuthWrapper>
            </ThemeProvider>
          </QueryClientProvider>
        </CacheProvider>
      );
    }
  }, [theme, queryClient]);

  return (
    <div
      style={{ overflow: "clip" }}
      ref={shadowHost}
    ></div>
  );
};

createRoot(document.getElementById("root")!).render(<RootComponent />);
