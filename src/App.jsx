import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./components/Buttons/style.css";
import "./index.css";
import { Home } from "./pages/home/Home";
import { AddCard } from "./pages/addcard/AddCard";

function App() {
  return (
    <>
      <BrowserRouter>
        <div>hej</div>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/AddCard" element={<AddCard />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
