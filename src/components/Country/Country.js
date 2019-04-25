import React, { Component } from "react";
import CountryList from "../CountryList/CountryList";
import { countriesStatic } from "./CountriesStatic";
import { specificCountryUrl } from "../API/API";

class Country extends Component {
  constructor() {
    super();

    this.state = {
      countries: countriesStatic
    };
  }

  componentDidMount() {
    fetch(specificCountryUrl)
      .then(data => {
        return data.json();
      })
      .then(res => {
        console.log(res);

        this.setState(prevState => {
          const onloadCountries = prevState.countries;
          onloadCountries[2].topSongs.forEach((el, i) => {
            el.track = res.message.body.track_list[i].track.track_name;
            el.album = res.message.body.track_list[i].track.album_name;
            el.artist = res.message.body.track_list[i].track.artist_name;
            el.id = res.message.body.track_list[i].track.track_id;
          });

          return {
            countries: onloadCountries
          };
        });
      });
  }

  render() {
    return <CountryList countries={this.state.countries} />;
  }
}

export default Country;
