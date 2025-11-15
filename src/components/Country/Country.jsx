import React, { useState } from "react";
import "./Country.css";

const Country = ({ showCountry, handleVisitedCountries }) => {
  const [visited, setVisited] = useState(false);
  // console.log(handleVisitedCountries);
  

  const visitHandler = () => {
    // if (visited === true) {
    //   setVisited(false);
    // } else {
    //   setVisited(true);
    // }

    // shortcut
    setVisited(!visited);
    handleVisitedCountries(showCountry);
  };



  return (
    <button
      className={`country ${visited && "country_visited"}`}
      onClick={visitHandler}
    >
      <div>
        <h3>Name: {showCountry.name.common}</h3>
        <img src={showCountry.flags.png} alt="" />
        <p>Official Name: {showCountry.name.official}</p>
        <p>Independent: {showCountry.independent ? "Free" : "Not Free"}</p>
        <p>Capital: {showCountry.capital}</p>
        <p>Population: {showCountry.population}</p>
        <p>Status: {visited ? "Visited" : "Not Visited"}</p>
      </div>
    </button>
  );
};

export default Country;
