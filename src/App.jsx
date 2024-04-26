import Card from "./components/Card";
import { AddCard } from "./pages/addcard/AddCard";
import { Home } from "./pages/home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import CardStack from "./components/CardStack";
function App() {
  return (
    <>
      {/* <Home /> */}
      <BrowserRouter>
        <Routes>
          <Route path="AddCard" element={<AddCard />}></Route>
          <Route path="/" element={<Home />}></Route>
        </Routes>
      </BrowserRouter>
      <CardStack />
    </>
  );
}

export default App;
