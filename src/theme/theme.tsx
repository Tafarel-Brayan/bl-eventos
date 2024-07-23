import { PaletteMode } from "@mui/material";

export const getDesignTokens = (mode: PaletteMode) => ({
  palette: {
    mode,
    ...(mode === "light"
      ? {
          background: {
            default: "#FFF",
            paper: "#FFF",
          },
        }
      : {
          primary: {
            main: "#3f50b5",
          },
          secondary: {
            main: "#f44336",
          },
          background: {
            default: "#040b11",
            paper: "#141b22",
          },
        }),
  },
});
