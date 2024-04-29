import React, { useState } from "react";
import "./Card.css";
export default function Card() {
  return (
    <article className={cardClassName}>
      <header className="card-header">
        <div className="blipp-and-chip">
          <img
            src={`./src/assets/${getBlippTheme()}.png`}
            className="blipp"
            alt="blipp-icon"
          />
          <img
            src="./src/assets/chip-dark.png"
            className="chip"
            alt="chip-icon"
          />
        </div>
        <div className="bank-logo-container">
          <img
            src="./src/assets/bitcoin.png"
            className="bank-logo"
            alt="bank-logo"
          />
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
  );
}
