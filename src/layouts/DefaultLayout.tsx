import { NavBar } from "../components/commons/NavBar";
import { Home } from "../components/home";
import { SobreNos } from "../components/sobreNos";

export function DefaultLayout() {
  return (
    <>
      <NavBar />
      <Home />
      <SobreNos />
    </>
  );
}
