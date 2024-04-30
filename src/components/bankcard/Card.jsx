import React, { useState } from "react";
import "./Card.css";

export default function Card({
  cardNumber,
  cardholderName,
  validThru,
  vendor,
}) {
  let vendorIconSrc = "";

  switch (vendor) {
    case "1":
      vendorIconSrc = "./src/assets/bitcoin.png";
      break;
    case "2":
      vendorIconSrc = "./src/assets/ninja.png";
      break;
    case "3":
      vendorIconSrc = "./src/assets/chain.png";
      break;
    case "4":
      vendorIconSrc = "./src/assets/evil.png";
      break;
    default:
      vendorIconSrc = "";
  }

  return (
    <article className="card">
      <header className="card-header">
        <div className="blipp-and-chip">
          <img
            src="./src/assets/blipp_dark.png"
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
          <img src={vendorIconSrc} className="bank-logo" alt="bank-logo" />
          {/* <img src={`/${vendor}-logo.png`} alt={`${vendor} Logo`} /> */}
        </div>
      </header>
      <section className="card-body">
        <div className="card-number">{cardNumber}</div>
        <div className="card-labels">
          <p className="card-label">Cardholder name</p>
          <p className="card-label">Valid thru</p>
        </div>
        <div className="card-content">
          <p className="card-holder">{cardholderName}</p>
          <p className="valid-thru"> {validThru} </p>
        </div>
      </section>
    </article>
  );
}
