import React from "react";
import "./style.css";

export default function Card() {
  return (
    <div className="card-container">
      <article className="card">
        <header className="card-header">
          <div className="wifi-and-chip">
            <div className="wifi" alt="wifi-icon"></div>
            <div className="chip"></div>
          </div>
          <div className="bank-logo">
            {/* <img src={`/${vendor}-logo.png`} alt={`${vendor} Logo`} /> */}
          </div>
        </header>
        <section className="card-body">
          <div className="card-number">XXXX XXXX XXXX XXXX</div>
          <div className="card-labels">
            <p className="card-label">Cardholder name</p>
            <p className="card-label">Valid thru</p>
          </div>
          <div className="card-content">
            <p className="card-holder">Firstname Lastname</p>
            <p className="valid-thru"> MM / YY </p>
          </div>
        </section>
      </article>
    </div>
  );
}
