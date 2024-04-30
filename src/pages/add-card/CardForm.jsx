import React, { useState } from "react";
import "./CardForm.css";

const CardForm = () => {
  const [formData, setFormData] = useState({
    cardNumber: "",
    cardholderName: "",
    validThru: "",
    cvv: "",
    vendor: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Formatera Valid Thru som MM/YY
    if (name === "validThru") {
      const formattedValue = value
        .replace(/\D/g, "") // Tar bort icke-numeriska tecken
        .replace(/^(\d{2})/, "$1/"); // Lägger till '/' efter de två första siffrorna

      setFormData((prevData) => ({
        ...prevData,
        [name]: value.substring(0, 5), // Begränsa till MM/YY format
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Här hanteras form submission, syns i console log
  };
  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <div className="input-container">
        <label className="form-input">
          <p className="form-heading">Card Number</p>
          <input
            type="number"
            id="cardNumber"
            name="cardNumber"
            value={formData.cardNumber}
            onChange={handleChange}
            maxLength={16}
            className="large-input"
            required
          />
        </label>
      </div>
      <div className="input-container">
        <label className="form-input">
          <p className="form-heading">Cardholder Name</p>
          <input
            type="text"
            id="cardholderName"
            name="cardholderName"
            value={formData.cardholderName}
            onChange={handleChange}
            className="large-input"
            pattern="[a-zA-Z ]+"
            required
          />
        </label>
      </div>
      <div className="small-form-container">
        <label className="form-input">
          <p className="form-heading">Valid Thru</p>
          <input
            type="text"
            id="validThru"
            name="validThru"
            value={formData.validThru}
            onChange={handleChange}
            className="small-input"
            placeholder="MM/YY"
            maxLength={5}
            required
          />
        </label>
        <label className="form-input">
          <p className="form-heading">CVV</p>
          <input
            type="text"
            id="cvv"
            name="cvv"
            value={formData.cvv}
            onChange={handleChange}
            maxLength={3}
            className="small-input"
            required
          />
        </label>
      </div>
      <div className="input-container">
        <label className="form-input">
          <p className="form-heading">VENDOR</p>
          <select
            id="vendor"
            name="vendor"
            value={formData.vendor}
            onChange={handleChange}
            className="large-input"
            required
          >
            <option value="">Select Vendor</option>
            <option value="1">Bitcoin Inc</option>
            <option value="2">Ninja Bank</option>
            <option value="3">Block Chain Inc</option>
            <option value="4">Evil Corp</option>
          </select>
        </label>
      </div>
    </form>
  );
};

export default CardForm;
