import React, { Component } from "react";
import CountryList from "../CountryList/CountryList";
import { countriesStatic } from "./CountriesStatic";
//import { specificCountryUrl } from "../API/API";

class Country extends Component {
  constructor() {
    super();

    this.state = {
      countries: countriesStatic
    };
  }

  render() {
    return <CountryList countries={this.state.countries} />;
  }
}

export default Country;
