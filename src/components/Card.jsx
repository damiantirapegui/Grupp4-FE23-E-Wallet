import React from "react";
import Icon from "@mdi/react";
import { mdiIntegratedCircuitChip, mdiWifi, mdiCurrencyBtc } from "@mdi/js";

export default function Card() {
  return (
    <article className="card">
      <header className="card-header">
        <div className="wifi-and-chip">
          <div className="wifi" alt="wifi-icon">
            <Icon path={mdiWifi} size={1} color="#666" />
          </div>
          <div className="chip">
            <Icon
              path={mdiIntegratedCircuitChip}
              title="User Profile"
              size={1.5}
              horizontal
              vertical
              color="#ECE6DF"
            />
          </div>
        </div>
        <div className="bank-logo">
          <Icon path={mdiCurrencyBtc} size={1} />
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
