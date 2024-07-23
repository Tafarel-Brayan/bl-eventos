import { createTheme, PaletteMode, Theme } from "@mui/material";
import {
  createContext,
  ReactNode,
  useCallback,
  useMemo,
  useState,
} from "react";
import { getDesignTokens } from "../theme/theme";

type ColorThemeContextType = {
  mode: PaletteMode;
  theme: Theme;
  toggleColorMode: () => void;
};

type ColorThemeProviderProps = {
  children: ReactNode;
};

export const ColorThemeContext = createContext({} as ColorThemeContextType);

export function ColorThemeProvider({ children }: ColorThemeProviderProps) {
  const [mode, setMode] = useState<PaletteMode>(
    localStorage.colorMode || "dark"
  );

  const toggleColorMode = useCallback(() => {
    setMode((prevMode) => {
      const newMode = prevMode === "light" ? "dark" : "light";
      localStorage.setItem("colorMode", newMode);
      return newMode;
    });
  }, []);

  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  return (
    <ColorThemeContext.Provider value={{ mode, toggleColorMode, theme }}>
      {children}
    </ColorThemeContext.Provider>
  );
}
