import { Link } from "react-router-dom";

export function Home() {
  return (
    <div className="button-container">
      <Link to="/AddCard">
        <button className="card__button add--new-card-btn">
          ADD A NEW CARD
        </button>
      </Link>
    </div>
  );
}
