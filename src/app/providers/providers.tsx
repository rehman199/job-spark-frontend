"use client";

import { PropsWithChildren } from "react";
import ReduxProvider from "./redux-provider";
import { ThemeProvider, createTheme } from "@mui/material";

const theme = createTheme({
  typography: {
    fontFamily: "sans-serif",
  },
});

export default function Providers({ children }: PropsWithChildren) {
  return (
    <ThemeProvider theme={theme}>
      <ReduxProvider>{children}</ReduxProvider>
    </ThemeProvider>
  );
}
