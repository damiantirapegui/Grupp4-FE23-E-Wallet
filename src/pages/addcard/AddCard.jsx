import Card from "../../components/bankcard/Card";
import React, { useState } from "react";
import { ButtonAddcard } from "../../components/button/ButtonAddCard";
import { PageTitle } from "../../components/pagetitle/PageTitle";
import CardForm from "../add-card/CardForm";

export function AddCard() {
  const [cardNumber, setCardNumber] = useState("XXXX XXXX XXXX XXXX");
  const [cardholderName, setCardholderName] = useState("FIRSTNAME LASTNAMNE");
  const [validThru, setValidThru] = useState("MM/YY");
  const [vendor, setVendor] = useState("");
  const [blippTheme, setBlippTheme] = useState("");
  const [backgroundColor, setBackgroundColor] = useState("#D0D0D0");
  const [textcolor, setTextColor] = useState("#000");

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

    switch (newVendor) {
      case "1":
        setBlippTheme("blipp_dark");
        setBackgroundColor("#ffb749");
        setTextColor("#000"); // Bakgrundsfärg för Bitcoin Inc
        break;
      case "2":
        setBlippTheme("blipp_light");
        setBackgroundColor("#3a3a3a");
        setTextColor("#fff"); // Bakgrundsfärg för Ninja Bank
        break;
      case "3":
        setBlippTheme("blipp_light");
        setBackgroundColor("#7c4ede");
        setTextColor("#000"); // Bakgrundsfärg för Block Chain Inc
        break;
      case "4":
        setBlippTheme("blipp_light");
        setBackgroundColor("#db2e4d");
        setTextColor("#fff"); // Bakgrundsfärg för Evil Corp
        break;
      default:
        setBlippTheme("");
        setBackgroundColor("#fff"); // Standard bakgrundsfärg
        setTextColor("#fff");
        break;
    }
  };

  return (
    <>
      <PageTitle title={"ADD A NEW BANK CARD"} secondTitle={"NEW CARD"} />
      <Card
        cardNumber={cardNumber}
        cardholderName={cardholderName}
        validThru={validThru}
        vendor={vendor}
        blippTheme={blippTheme}
        backgroundColor={backgroundColor}
        color={textcolor}
      />
      <CardForm
        onCardNumberChange={handleCardNumberChange}
        onCardholderNameChange={handleCardholderNameChange}
        handleNameChange={handleNameChange}
        onValidThruChange={handleValidThruChange}
        onVendorChange={handleVendorChange}
      />
      <ButtonAddcard />
    </>
  );
}
