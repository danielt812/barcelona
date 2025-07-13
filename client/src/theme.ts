// theme.ts
import { createTheme } from "@mui/material/styles";

export const getTheme = (mode: "light" | "dark") =>
  createTheme({
    palette: {
      mode,
      ...(mode === "light"
        ? {
            primary: { main: "#6200ee" },
            background: { default: "#ffffff" },
          }
        : {
            primary: { main: "#bb86fc" },
            background: { default: "#121212" },
          }),
    },
  });
