import { Home } from "./components/home/Home";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { AddCard } from "./components/addcard/AddCard";
import "./components/style.css";
import "./index.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/AddCard" element={<AddCard />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
