import React from "react";
import Card from "./Card";
import "./CardStack.css";
import { useState } from "react";


export default function CardStack({ cards, setCards, activeCard, setActiveCard }) {
  const handleClick = (card) => {
    console.log("Kortet klickat", card);
    setActiveCard(card);
    moveActiveCardToTop();
  };


  const moveActiveCardToTop = () => {
    if (activeCard) {
      const updatedCards = [...cards];
      const activeCardIndex = updatedCards.findIndex(
        (c) => c.id === activeCard.id
      );
      console.log("Active card index", activeCardIndex);
      const tempCard = { ...updatedCards[activeCardIndex] };
      updatedCards[activeCardIndex] = updatedCards[0];
      updatedCards[0] = tempCard;
      console.log("Updated cards", updatedCards);
      setCards(updatedCards);
    }
  };


  const renderActiveCard = () => {
    if (activeCard) {
      return (
        <div className="active-card-container">
          <Card cardDetails={activeCard} />
        </div>
      );
    }
    return null;
  };


  return (
    <main>
      {renderActiveCard()}
      <section className="card-container">
        {cards.map((card, index) => (
          <article
            key={card.id}
            className="card-container__card"
            style={{ top: `${index * 50}px` }}
            onClick={() => handleClick(card)}
          >
            <Card cardDetails={card} />
          </article>
        ))}
      </section>
    </main>
  );
}


