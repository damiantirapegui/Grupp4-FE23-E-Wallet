import Card from "../../components/bankcard/Card";
import React, { useState } from "react";
import { ButtonAddcard } from "../../components/button/ButtonAddCard";
import { PageTitle } from "../../components/pagetitle/PageTitle";
import CardForm from "../add-card/CardForm";


export function AddCard({ cards, setCards, setActiveCard }) {
  const [cardNumber, setCardNumber] = useState("XXXX XXXX XXXX XXXX");
  const [cardholderName, setCardholderName] = useState("FIRSTNAME LASTNAMNE");
  const [validThru, setValidThru] = useState("MM/YY");
  const [vendor, setVendor] = useState("");


  const handleCardNumberChange = (newCardNumber) => {
    setCardNumber(newCardNumber);
  };


  const handleCardholderNameChange = (newCardholderName) => {
    setCardholderName(newCardholderName);
  };


  const handleNameChange = (newName) => {
    setCardholderName(newName);
  };


  const handleValidThruChange = (newValidThru) => {
    setValidThru(newValidThru);
  };


  const handleVendorChange = (newVendor) => {
    setVendor(newVendor);
  };


  const handleSaveInformation = () => {
    const newId = cards[cards.length - 1].id + 1
    const newData = {
      id: newId,
      cardNumber,
      cardholderName,
      validThru,
      ccv: "",
      vendor
    }


    setCards(cards => cards.concat(newData))
    setActiveCard(newData)
  }


  return (
    <>
      <PageTitle title={"ADD A NEW BANK CARD"} secondTitle={"NEW CARD"} />
      <Card
        cardNumber={cardNumber}
        cardholderName={cardholderName}
        validThru={validThru}
        vendor={vendor}
      />
      <CardForm
        onCardNumberChange={handleCardNumberChange}
        onCardholderNameChange={handleCardholderNameChange}
        handleNameChange={handleNameChange}
        onValidThruChange={handleValidThruChange}
        onVendorChange={handleVendorChange}
      />
      <ButtonAddcard
        onClick={() => handleSaveInformation()}
      />
    </>
  );
}
