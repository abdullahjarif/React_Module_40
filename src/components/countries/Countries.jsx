import React, { use, useState } from "react";
import Country from "../Country/Country";
import "./Countries.css";

const Countries = ({ countriesPromise }) => {
  // use state for showing visited country using empty array
  const [visitedCountries, setVisitedCountries] = useState([]);

  const [visitFlags, setVisitedFlags] = useState([]);

  // "use" for show countries from API with using promises, fallback and
  const showCountries = use(countriesPromise);

  const handleVisitedFlag = (flags) => {
    console.log("flag is visited", flags);
  };

  // use handler for button handle
  const handleVisitedCountries = (country) => {
    const isVisited = visitedCountries.some(
      (countryItem) => countryItem.ccn3 === country.ccn3
    );

    if (isVisited) {
      // remove
      setVisitedCountries((prevCountryItem) =>
        prevCountryItem.filter(
          (countryItem) => countryItem.ccn3 !== country.ccn3
        )
      );
    } else {
      // add
      setVisitedCountries((prev) => [...prev, country]);
    }
  };

  const isVisited = (ccn3) =>
    visitedCountries.some((countryItem) => countryItem.ccn3 === ccn3);

  return (
    <div style={{ padding: "20px" }}>
      {/* use for h1 heading */}
      <h1 style={{ textAlign: "center", marginBottom: "40px" }}>
        🌍 Traveling {showCountries.length} Countries
      </h1>

      {/* use for h2 heading */}
      <div
        style={{
          background: "#f1f1f1",
          color: "black",
          padding: "10px 20px",
          borderRadius: "10px",
          marginBottom: "20px",
          textAlign: "center",
        }}
      >
        <h2 style={{ marginBottom: "10px" }}>
          ✈️ Traveled So Far: {visitedCountries.length}
        </h2>

        <ol>
          {visitedCountries.map((country) => (
            <p key={country.ccn3}>{country.name.common}</p>
          ))}
        </ol>
      </div>

      {/* "use" hook state used for API */}
      <div className="countries">
        {showCountries.map((showCountry) => (
          <Country
            key={showCountry.ccn3}
            showCountry={showCountry}
            handleVisitedCountries={handleVisitedCountries}
            handleVisitedFlag={handleVisitedFlag}
            isVisited={isVisited(showCountry.ccn3)}
          ></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
