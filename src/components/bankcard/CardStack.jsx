import React from "react";
import Card from "./Card";
import "./CardStack.css";
import { useState } from "react";
function CardStack() {
  const [cards, setCards] = useState([
    {
      id: 1,
      cardNumber: "1234567891011123",
      cardholderName: "Rachel Richter",
      validThru: "12/24",
      ccv: "123",
      vendor: "bitcoin",
      color: "#ffb749",
    },
    {
      id: 2,
      cardNumber: "9876543210987654",
      cardholderName: "Rachel Richter",
      validThru: "11/23",
      ccv: "456",
      vendor: "ninja",
      color: "#3a3a3a",
    },
    {
      id: 3,
      cardNumber: "1234567890123456",
      cardholderName: "Rachel Richter",
      validThru: "1/23",
      ccv: "456",
      vendor: "chain",
      color: "#7c4ede",
    },
    {
      id: 4,
      cardNumber: "6666666666666666",
      cardholderName: "Rachel Richter",
      validThru: "10/24",
      ccv: "666",
      vendor: "evil",
      color: "#db2e4d",
    },
    {
      id: 5,
      cardNumber: "1122334455667788",
      cardholderName: "Rachel Richter",
      validThru: "9/25",
      ccv: "888",
      vendor: "bitcoin",
      color: "#ffb749",
    },
  ]);

  // const combinedCards =
  //   cards.length < 4
  //     ? [...defaultCards.slice(0, 4 - cards.length), ...cards]
  //     : cards;

  return (
    <>
      <Card />
      <div className="card-container">
        {cards.map((card, index) => (
          <section
            key={card.id}
            className="card-container__card"
            style={{ top: `${index * 50}px` }}
          >
            <Card
              cardNumber={card.cardNumber}
              cardholderName={card.cardholderName}
              validThru={card.validThru}
              vendor={card.vendor}
              color={card.color}
            />
          </section>
        ))}
      </div>
    </>
  );
}

export default CardStack;

