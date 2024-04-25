// import { HomeButton } from "../../components/Buttons/HomeButton";

import { ButtonHome } from "../../components/button/ButtonHome";
import { PageTitle } from "../../components/pagetitle/PageTitle";

export function Home() {
  return (
    <>
      <PageTitle title={"E-WALLET"} secondTitle={"ACTIVE CARD"} />

      <ButtonHome />
    </>
  );
}
