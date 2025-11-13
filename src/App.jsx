import { Suspense } from "react";
import "./App.css";
import Countries from "./components/countries/Countries";

const loadCountries = async () => {
  const response = await fetch("https://restcountries.com/v3.1/all?fields=name,capital,flags,population,region,independent,ccn3");
  return response.json();
};

function App() {

  const countriesPromise = loadCountries();
  return (
    <>
      <Suspense fallback = {<h3>Countries are loading ...</h3>}>
        <Countries countriesPromise = {countriesPromise}></Countries>
      </Suspense>
    </>
  );
}

export default App;
