import { styled } from "@mui/material";
import bgFadeCenter from "./../../assets/bg-center-fade-section1.png";
import bgGlitter from "./../../assets/bg-glitter-section1.png";
import bgTapesBalloons from "./../../assets/bg-tapes-balloons.png";

type CapeloImgProps = {
  src: string;
  top?: string,
  left?: string,
  right?: string,
  width?: string,
  transform?: string
}

export const HomeSection = styled("section")({
  padding: "1rem 0",
  background: `url(${bgGlitter}), url(${bgFadeCenter}), url(${bgTapesBalloons})`,
  backgroundRepeat: "no-repeat, no-repeat",
  backgroundPosition: "center, center, center",
  backgroundSize: "cover, cover, 100%",
  backgroundBlendMode: 'color-dodge',
  height: "100vh",
  overflow: "hidden",
});

export const CapeloImg1 = styled('img')<CapeloImgProps>(({ top, left, right, transform, width }) => ({
  position: 'absolute',
  top: top,
  left: left,
  right: right,
  width: width,
  transform: transform
}))


export const ImgComponent = styled('img')({
  width: '75%',
  border: '16px solid #FFF',
  transform: 'rotate(-1deg)'
})


/**Gold Text */
export const GoldText = styled('h2')({
  background: "radial-gradient(ellipse farthest-corner at right bottom, #FEDB37 0%, #FDB931 80%, #9f7928 100%, #8A6E2F 25%, transparent 60%), radial-gradient(ellipse farthest-corner at left top, #FFFFFF 0%, #FFFFAC 8%, #D1B464 25%, #5d4a1f 42.5%, #5d4a1f 100%)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: 'transparent',
  color: '#fff',
  textTransform: 'uppercase',
  fontSize: 'calc(2vw + .5rem)',
  margin: '0',
  fontWeight: '500',
  zIndex: 999
})


