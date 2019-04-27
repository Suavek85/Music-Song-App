import React, { Component } from "react";
import CountriesList from "./CountriesList";
import CountryList from "./CountryList";
import countryCodeArr from "./CountryCode";
import { countriesMain, countrySelected } from "./CountriesStateStyle";
import { specificCountryUrl } from "../API/API";

class Country extends Component {
  constructor() {
    super();

    this.state = {
      countries: countriesMain,
      countryBottom: countrySelected,
      input: ""
    };
  }

  componentDidMount() {
    fetch(specificCountryUrl("br"))
      .then(data => {
        return data.json();
      })
      .then(res => {
        this.setState(prevState => {
          const newCountries = prevState.countries;
          newCountries[0].topSongs.forEach((el, i) => {
            el.track = res.message.body.track_list[i].track.track_name;
            el.album = res.message.body.track_list[i].track.album_name;
            el.artist = res.message.body.track_list[i].track.artist_name;
            el.id = res.message.body.track_list[i].track.track_id;
          });

          return {
            countries: newCountries
          };
        });
      });

    fetch(specificCountryUrl("us"))
      .then(data => {
        return data.json();
      })
      .then(res => {
        this.setState(prevState => {
          const newCountries = prevState.countries;
          newCountries[1].topSongs.forEach((el, i) => {
            el.track = res.message.body.track_list[i].track.track_name;
            el.album = res.message.body.track_list[i].track.album_name;
            el.artist = res.message.body.track_list[i].track.artist_name;
            el.id = res.message.body.track_list[i].track.track_id;
          });

          return {
            countries: newCountries
          };
        });
      });

    fetch(specificCountryUrl("es"))
      .then(data => {
        return data.json();
      })
      .then(res => {
        this.setState(prevState => {
          const newCountries = prevState.countries;
          newCountries[2].topSongs.forEach((el, i) => {
            el.track = res.message.body.track_list[i].track.track_name;
            el.album = res.message.body.track_list[i].track.album_name;
            el.artist = res.message.body.track_list[i].track.artist_name;
            el.id = res.message.body.track_list[i].track.track_id;
          });
          return {
            countries: newCountries
          };
        });
      });
  }

  onSearchChange = event => {
    this.setState({
      input: event.target.value
    });
  };

  onButtonClick = () => {
    const test = countryCodeArr.findIndex(el => {
      return el.name === this.state.input;
    });
    if (test === -1) {
      return;
    }
    const countryCode = countryCodeArr[test].code;

    fetch(specificCountryUrl(countryCode))
      .then(data => {
        return data.json();
      })
      .then(res => {
        console.log(res);
        if (res.message.body.track_list) {
          this.setState(prevState => {
            const newCountryBottom = prevState.countryBottom;
            newCountryBottom[0].topSongs.forEach((el, i) => {
              el.track = res.message.body.track_list[i].track.track_name;
              el.album = res.message.body.track_list[i].track.album_name;
              el.artist = res.message.body.track_list[i].track.artist_name;
              el.id = res.message.body.track_list[i].track.track_id;
            });
            return {
              countryBottom: newCountryBottom
            };
          });
        }
      });
  };

  render() {
    return (
      <div>
        <CountriesList countries={this.state.countries} />
        <CountryList
          buttonClick={this.onButtonClick}
          searchChange={this.onSearchChange}
          countryBottom={this.state.countryBottom}
        />
      </div>
    );
  }
}

export default Country;
