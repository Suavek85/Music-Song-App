import React from "react";
import CountriesList from "./CountriesList";
import CountryList from "./CountryList";

const Country = ({ countries, buttonClick, searchChange, countryBottom, onCountryFavClick, onSelectedCountryFavClick }) => {
  return (
    <div>
      <CountriesList countries={countries} onCountryFavClick={onCountryFavClick} />
      <CountryList
        buttonClick={buttonClick}
        searchChange={searchChange}
        countryBottom={countryBottom}
        onCountryFavClick={onSelectedCountryFavClick}
      />
    </div>
  );
};

export default Country;
