import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AddCard } from "./pages/addcard/AddCard";
import { Home } from "./pages/home/Home";
import { useState } from "react";


import "./App.css";


function App() {
  const [cards, setCards] = useState([
    {
      id: 1,
      cardNumber: "1234567891011123",
      cardholderName: "Rachel Richter",
      validThru: "12/24",
      ccv: "123",
      vendor: "bitcoin",
    },
    {
      id: 2,
      cardNumber: "9876543210987654",
      cardholderName: "Rachel Richter",
      validThru: "11/23",
      ccv: "456",
      vendor: "ninja",
    },
    {
      id: 3,
      cardNumber: "1234567890123456",
      cardholderName: "Rachel Richter",
      validThru: "1/23",
      ccv: "456",
      vendor: "chain",
    },
    {
      id: 4,
      cardNumber: "6666666666666666",
      cardholderName: "Rachel Richter",
      validThru: "10/24",
      ccv: "666",
      vendor: "evil",
    },
    {
      id: 5,
      cardNumber: "1122334455667788",
      cardholderName: "Rachel Richter",
      validThru: "9/25",
      ccv: "888",
      vendor: "bitcoin",
    },
  ]);


  const [activeCard, setActiveCard] = useState(cards[0]);


  return (
    <>
      {/* <CardForm /> */}
      <BrowserRouter>
        <Routes>
          <Route
            path="AddCard"
            element={
              <AddCard
                cards={cards}
                setCards={setCards}
                setActiveCard={setActiveCard}
              />
            }
          />
          <Route
            path="/"
            element={
              <Home
                cards={cards}
                setCards={setCards}
                activeCard={activeCard}
                setActiveCard={setActiveCard}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}


export default App;
