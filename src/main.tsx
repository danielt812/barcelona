// src/main.tsx
import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ThemeProvider, CssBaseline } from "@mui/material";
import Layout from "./Layout.tsx";
import App from "./App.tsx";
import Explore from "./pages/Explore.tsx";
import Food from "./pages/Food.tsx";
import Trips from "./pages/Trips.tsx";
import { getTheme } from "./theme";

// Move theme logic inside Root so we can pass mode/setMode to Layout
export function Root() {
  const [mode, setMode] = useState<"light" | "dark">("light");
  const theme = getTheme(mode);

  // Router must be created inside so we can pass props to Layout
  const router = createBrowserRouter(
    [
      {
        path: "/",
        element: (
          <Layout
            mode={mode}
            setMode={setMode}
          />
        ),
        children: [
          { index: true, element: <App /> },
          { path: "explore", element: <Explore /> },
          { path: "food", element: <Food /> },
          { path: "trips", element: <Trips /> },
        ],
      },
    ],
    {
      basename: "/barcelona",
    }
  );

  return (
    <StrictMode>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <RouterProvider router={router} />
      </ThemeProvider>
    </StrictMode>
  );
}

createRoot(document.getElementById("root")!).render(<Root />);
