import { Link } from "react-router-dom";


export function ButtonAddcard({ onClick }) {
  return (
    <div className="button-container">
      <Link to="/" onClick={onClick}>
        <button className="button button--add-card">ADD CARD</button>
      </Link>
    </div>
  );
}
