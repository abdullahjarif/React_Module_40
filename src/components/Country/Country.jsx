import React, { useState } from "react";
import "./Country.css";

const Country = ({
  showCountry,
  handleVisitedCountries,
  handleVisitedFlag,
}) => {
  const [visited, setVisited] = useState(false);

  const visitHandler = () => {
    setVisited(!visited);
    handleVisitedCountries(showCountry);
  };

  return (
    <div className={`country_card ${visited ? "visited_card" : ""}`}>
      <div className="country_header">
        <h3>{showCountry.name.common}</h3>
        <span
          className={`status_badge ${
            visited ? "badge_visited" : "badge_not_visited"
          }`}
        >
          {visited ? "Visited ✅" : "Not Visited ⌛"}
        </span>
      </div>

      <div className="country_body">
        <div className="country_flag">
          <img src={showCountry.flags.png} alt="Flag" />
        </div>

        <div className="country_info">
          <p>
            <strong>Official:</strong> {showCountry.name.official}
          </p>
          <p>
            <strong>Capital:</strong> {showCountry.capital}
          </p>
          <p>
            <strong>Population:</strong>{" "}
            {showCountry.population.toLocaleString()}
          </p>
          <p>
            <strong>Status:</strong>{" "}
            {showCountry.independent ? "Free" : "Not Free"}
          </p>
        </div>
      </div>

      <div className="country_actions">
        <button
          className={`visit_btn ${visited ? "visited_btn" : ""}`}
          onClick={visitHandler}
        >
          {visited ? "Visited ✓" : "Mark as Visited"}
        </button>

        <button
          className="flag_preview_btn"
          onClick={() => handleVisitedFlag(showCountry.flags.png)}
        >
          Show Flag
        </button>
      </div>
    </div>
  );
};

export default Country;
