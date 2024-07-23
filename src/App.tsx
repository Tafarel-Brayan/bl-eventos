import { CssBaseline, ThemeProvider } from "@mui/material";
import { useContext } from "react";
import { BrowserRouter } from "react-router-dom";
import {
  ColorThemeContext,
  ColorThemeProvider,
} from "./context/ColorThemeContext";
import { Router } from "./Router";

function App() {
  return (
    <ColorThemeProvider>
      <AppContent />
    </ColorThemeProvider>
  );
}

function AppContent() {
  const { theme } = useContext(ColorThemeContext);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
