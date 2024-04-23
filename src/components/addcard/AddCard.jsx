import { Link } from "react-router-dom";

export function AddCard() {
  return (
    <div className="button-container">
      <Link to="/">
        <button className="card__button add--card-btn">ADD CARD</button>
      </Link>
    </div>
  );
}
