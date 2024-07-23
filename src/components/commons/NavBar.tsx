import {
  AppBar,
  Button,
  Container,
  IconButton,
  Stack,
  Toolbar,
  useTheme,
} from "@mui/material";
import {
  FacebookLogo,
  InstagramLogo,
  MoonStars,
  SunDim,
  WhatsappLogo,
} from "@phosphor-icons/react";
import { useContext } from "react";
import logo from "../../assets/logo.png";
import { ColorThemeContext } from "../../context/ColorThemeContext";

const pages = ["INÍCIO", "SOBRE NÓS", "EVENTOS", "CONTATOS"];

export const NavBar = () => {
  const { mode, toggleColorMode } = useContext(ColorThemeContext);
  const theme = useTheme();

  return (
    <AppBar
      style={{ background: theme.palette.background.default }}
      position="sticky"
      variant="elevation"
    >
      <Toolbar disableGutters style={{ height: "80px" }}>
        <Container maxWidth="xl">
          <Stack direction="row" alignItems="center">
            <div style={{ flexGrow: 1 }}>
              <img alt="logo" src={logo} />
            </div>
            <Stack direction="row" spacing={2}>
              {pages.map((page) => (
                <Button variant="text" key={page} style={{ color: "#FFF" }}>
                  {page}
                </Button>
              ))}
            </Stack>
            <Stack direction="row">
              <IconButton aria-label="Instagram Logo">
                <InstagramLogo />
              </IconButton>
              <IconButton>
                <FacebookLogo />
              </IconButton>
              <IconButton>
                <WhatsappLogo />
              </IconButton>

              <IconButton onClick={toggleColorMode}>
                {mode === "light" ? <MoonStars /> : <SunDim />}
              </IconButton>
            </Stack>
          </Stack>
        </Container>
      </Toolbar>
    </AppBar>
  );
};
