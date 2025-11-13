import React from "react";
import "./Country.css";

const Country = ({ showCountry }) => {
  const visitHandler = () => {};

  return (
    <button className="country" onClick={visitHandler}>
      <div>
        <h3>Name: {showCountry.name.common}</h3>
        <img src={showCountry.flags.png} alt="" />
        <p>Independent: {showCountry.independent ? "Free" : "Not Free"}</p>
        <p>Capital: {showCountry.capital}</p>
        <p>Population: {showCountry.population}</p>
      </div>
    </button>
  );
};

export default Country;
