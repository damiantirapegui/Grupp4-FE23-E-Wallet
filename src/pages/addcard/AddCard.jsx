import Card from "../../components/bankcard/Card";
import { ButtonAddcard } from "../../components/button/ButtonAddCard";
import { PageTitle } from "../../components/pagetitle/PageTitle";
import CardForm from "../add-card/CardForm";

export function AddCard() {
  return (
    <>
      <PageTitle title={"ADD A NEW BANK CARD"} secondTitle={"NEW CARD"} />
      <Card />
      <CardForm />
      <ButtonAddcard />
    </>
  );
}
