// function Countries() {
//   return <div></div>;
// }

// /**
//  * arrow function
//  */
// const Countries = () => {
//   return <div></div>;
// };

import React, { use } from "react";
import Country from "../Country/Country";
import "./Countries.css";

const Countries = ({ countriesPromise }) => {
  const showCountries = use(countriesPromise);
  console.log(showCountries);

  return (
    <div>
      <h1 style={{textAlign : 'center', paddingBottom: '20px'}}>Traveling {showCountries.length} Countries</h1>
      <div className="countries">
        {showCountries.map((showCountry) => (
          <Country key={showCountry.ccn3} showCountry={showCountry}></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
