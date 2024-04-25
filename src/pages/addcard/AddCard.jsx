import Card from "../../components/bankcard/Card";
import { ButtonAddcard } from "../../components/button/ButtonAddCard";
import { PageTitle } from "../../components/pagetitle/PageTitle";

export function AddCard() {
  return (
    <>
      <PageTitle title={"ADD A NEW BANK CARD"} secondTitle={"NEW CARD"} />
      <Card />
      <ButtonAddcard />
    </>
  );
}
