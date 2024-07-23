import { Box, Container, Stack } from "@mui/material";
import capelo from "./../../assets/capelo.png";
import formandos from "./../../assets/formandos.jpg";
import { CapeloImg1, GoldText, HomeSection, ImgComponent } from "./style";

export const Home = () => {
  return (
    <HomeSection>
      <Container>
        <CapeloImg1
          src={capelo}
          top="550px"
          left="100px"
          transform="rotate(-18deg)"
        />
        <CapeloImg1
          width="250px"
          src={capelo}
          top="150px"
          right="150px"
          transform="rotate(18deg)"
        />
        <Stack direction="column" alignItems="center" spacing={4}>
          <Box
            display="flex"
            justifyContent="center"
            sx={{
              paddingTop: "3rem",
            }}
          >
            <ImgComponent src={formandos} alt="formandos" />
          </Box>
          <Box>
            <GoldText>
              {"Realize seu sonho da formatura!".toUpperCase()}
            </GoldText>
          </Box>
        </Stack>
      </Container>
    </HomeSection>
  );
};
