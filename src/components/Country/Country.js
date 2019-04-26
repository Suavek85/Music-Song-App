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
    fetch(specificCountryUrl("br"))
      .then(data => {
        return data.json();
      })
      .then(res => {
        this.setState(prevState => {
          const onloadCountries = prevState.countries;
          onloadCountries[0].topSongs.forEach((el, i) => {
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

    fetch(specificCountryUrl("us"))
      .then(data => {
        return data.json();
      })
      .then(res => {
        this.setState(prevState => {
          const onloadCountries = prevState.countries;
          onloadCountries[1].topSongs.forEach((el, i) => {
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

    fetch(specificCountryUrl("es"))
      .then(data => {
        return data.json();
      })
      .then(res => {
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



  

  onFavClick = event => {
    const target = event.target.dataset.id;
    console.log(target);

    const country = this.state.countries;
    let newArray = [];
    let favCountriesArr = [];

    [country[0].topSongs, country[1].topSongs, country[2].topSongs].forEach(
      el => newArray.push(...el)
    );
    console.log(newArray);

    const countryIndex = newArray.findIndex(el => el.id === parseFloat(target));

    const songItem = {
      track: newArray[countryIndex].track,
      album: newArray[countryIndex].album,
      artist: newArray[countryIndex].artist,
      id: newArray[countryIndex].id,
      favClicked: !newArray[countryIndex].favClicked,
      addedToFav: true
    };

    favCountriesArr.push(songItem);
    console.log(favCountriesArr)



    /*

    //findIndex for multiple arrays

    const countryIndex = country[0].topSongs.findIndex(
      el => el.id === parseFloat(target)
    )



    if(countryIndex >= 0) {
      console.log(countryIndex)
    }
    */

    /*
     
      const songItem = {
        track: this.state.music[songIndex].track,
        album: this.state.music[songIndex].album,
        artist: this.state.music[songIndex].artist,
        id: this.state.music[songIndex].id,
        favClicked: !this.state.music[songIndex].favClicked,
        addedToFav: true
      };

      this.setState(prevState => {
        const toUpdate = prevState.music[songIndex].favClicked;
        const newMusic = [...prevState.music];
        newMusic[songIndex].favClicked = !toUpdate;
        return {
          music: newMusic
        };
      });

      this.setState(prevState => {
        const prevFavsArray = [...prevState.favsArray];
        const alreadyFav = prevFavsArray.find(
          el => el.id === parseFloat(songItem.id)
        );

        if (songItem.favClicked && alreadyFav === undefined) {
          const newFavsArray = [...prevState.favsArray, songItem];
          return {
            favsArray: newFavsArray
          };
        }
        return null;
      });
    */
  };

  render() {
    return (
      <CountryList
        countries={this.state.countries}
        onFavClick={this.onFavClick}
      />
    );
  }
}

export default Country;
