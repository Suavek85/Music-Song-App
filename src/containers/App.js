import React, { Component } from "react";
import Header from "../components/Header/Header";
import CardList from "../components/Card/CardList";
import FavList from "../components/Card/FavList";
import Country from "../components/Country/Country";
import Footer from "../components/Footer/Footer";
import { genericUrl, specificUrl, specificCountryUrl } from "./API";
import {
  countriesMain,
  countrySelected
} from "../components/Country/CountriesStateStyle";
import { musicState } from "../components/Card/CardState";
import countryCodeArr from "../components/Country/CountryCode";
import Spinner from "../components/Animations/Spinner/Spinner";
import scrollDownSmooth from "../components/Animations/Animations";
import "./App.css";

class App extends Component {
  state = {
    input: "Justin Bieber",
    inputCountry: "",
    isLoading: true,
    cardsShow: true,
    music: musicState,
    countries: countriesMain,
    countryBottom: countrySelected,
    favsArray: []
  };

  componentDidMount() {
    // LOAD PLACEHOLDER SONGS
    fetch(genericUrl)
      .then(data => {
        return data.json();
      })
      .then(res => {
        if (res.message.header.available !== 0) {
          this.setState({ isLoading: false });
          this.setState(prevState => {
            const onloadMusic = prevState.music;
            onloadMusic.forEach((el, i) => {
              el.track = res.message.body.track_list[i].track.track_name;
              el.album = res.message.body.track_list[i].track.album_name;
              el.artist = res.message.body.track_list[i].track.artist_name;
              el.id = res.message.body.track_list[i].track.track_id;
              el.favClicked = false;
              el.addedToFav = false;
            });
            return {
              music: onloadMusic
            };
          });
          this.setState({
            cardsShow: true
          });
        }
      })
      .catch(error => {
        console.log("Cannot load music cards");
      });

    // LOAD 3 COUNTRIES SONGS
    const urlArray = [
      specificCountryUrl("br"),
      specificCountryUrl("us"),
      specificCountryUrl("es")
    ];

    urlArray.forEach((el, i) => {
      fetch(el)
        .then(data => {
          return data.json();
        })
        .then(res => {
          this.setState(prevState => {
            const newCountries = prevState.countries;
            newCountries[i].topSongs.forEach((el, i) => {
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
    });
  }

  onSearchChange = event => {
    this.setState({
      input: event.target.value
    });
  };

  onCardFavClick = event => {
    //defining selected song
    if (this.state.cardsShow) {
      const target = event.target.dataset.id;
      const songIndex = this.state.music.findIndex(
        el => el.id === parseFloat(target)
      );
      const songItem = {
        track: this.state.music[songIndex].track,
        album: this.state.music[songIndex].album,
        artist: this.state.music[songIndex].artist,
        id: this.state.music[songIndex].id,
        favClicked: !this.state.music[songIndex].favClicked,
        addedToFav: true
      };

      //toggling fav icon - empty/full heart
      this.setState(prevState => {
        const toUpdate = prevState.music[songIndex].favClicked;
        const newMusic = [...prevState.music];
        newMusic[songIndex].favClicked = !toUpdate;
        return {
          music: newMusic
        };
      });

      //conditionally pushing defined song to Favs
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
    }
  };

  onHeaderSearch = () => {
    this.setState({ isLoading: true });

    fetch(specificUrl(this.state.input))
      .then(data => {
        return data.json();
      })
      .then(res => {
        if (res.message.header.available !== 0) {
          this.setState({
            cardsShow: true
          });
          this.setState({ isLoading: false });

          this.setState(prevState => {
            const onloadMusic = prevState.music;
            onloadMusic.forEach((el, i) => {
              el.track = res.message.body.track_list[i].track.track_name;
              el.album = res.message.body.track_list[i].track.album_name;
              el.artist = res.message.body.track_list[i].track.artist_name;
              el.id = res.message.body.track_list[i].track.track_id;
              el.favClicked = false;
            });
            return {
              music: onloadMusic
            };
          });
          scrollDownSmooth();
        }
      })
      .catch(error => {
        console.log("Cannot load music cards");
      });
  };

  onShowFavs = () => {
    if (this.state.favsArray.length === 0) {
      return;
    }
    this.setState({
      cardsShow: false
    });
    scrollDownSmooth();
  };

  onRemoveFavs = event => {
    const target = event.target.dataset.id;
    const removeIndex = this.state.favsArray.findIndex(
      el => el.id === parseFloat(target)
    );
    this.setState(prevState => {
      const prevFavsArray = [...prevState.favsArray];
      prevFavsArray.splice(removeIndex, 1);
      return {
        favsArray: prevFavsArray
      };
    });
  };

  onCountrySearchChange = event => {
    this.setState({
      inputCountry: event.target.value
    });
  };

  onCountryButtonClick = () => {
    //converting country name to country code
    const countryIndex = countryCodeArr.findIndex(el => {
      return el.name === this.state.inputCountry;
    });
    if (countryIndex === -1) {
      return;
    }
    const countryCode = countryCodeArr[countryIndex].code;

    //fetching url with country code
    fetch(specificCountryUrl(countryCode))
      .then(data => {
        return data.json();
      })
      .then(res => {
        if (res.message.body.track_list) {
          this.setState(prevState => {
            const newCountryBottom = prevState.countryBottom;
            newCountryBottom[0].showSongs = true;
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

  onCloseFavs = () => {
    this.setState({ cardsShow: true });
  };

  onCountryFavClick = event => {
    //defining selected song
    const target = event.target.dataset.id;
    const number = event.target.dataset.no;

    const country = this.state.countries;
    let newArray = [];
    const topSongsArr = [
      country[0].topSongs,
      country[1].topSongs,
      country[2].topSongs
    ];
    topSongsArr.forEach(el => newArray.push(...el));

    const countryIndex = newArray.findIndex(el => el.id === parseFloat(target));

    const songItem = {
      track: newArray[countryIndex].track,
      album: newArray[countryIndex].album,
      artist: newArray[countryIndex].artist,
      id: newArray[countryIndex].id,
      favClicked: true,
      addedToFav: true
    };

    //toggling fav icons empty/full heart
    this.setState(prevState => {
      const country = prevState.countries;
      [0, 1, 2].forEach(element => {
        country[element].topSongs.forEach(el => {
          if (
            el.id === parseFloat(target) &&
            el.number === parseFloat(number)
          ) {
            el.favClicked = !el.favClicked;
          } else {
            return;
          }
        });
      });
      return {
        countries: country
      };
    });

    //conditionally pushing defined song to Favs
    this.setState(prevState => {
      const prevFavArray = prevState.favsArray;
      const alreadyFav = prevFavArray.find(
        el => el.id === parseFloat(songItem.id)
      );
      if (alreadyFav === undefined) {
        prevFavArray.push(songItem);
        return {
          favsArray: prevFavArray
        };
      }
      return null;
    });
  };

  onSelectedCountryFavClick = event => {
    //defining selected song
    const target = event.target.dataset.id;
    const number = event.target.dataset.no;
    const country = this.state.countryBottom;
    const countryIndex = country[0].topSongs.findIndex(
      el => el.id === parseFloat(target)
    );
    const songItem = {
      track: country[0].topSongs[countryIndex].track,
      album: country[0].topSongs[countryIndex].album,
      artist: country[0].topSongs[countryIndex].artist,
      id: country[0].topSongs[countryIndex].id,
      favClicked: true,
      addedToFav: true
    };
    
    //toggling fav icons empty/full heart
    this.setState(prevState => {
      const country = prevState.countryBottom;
      country[0].topSongs.forEach(el => {
        if (el.id === parseFloat(target) && el.number === parseFloat(number)) {
          el.favClicked = !el.favClicked;
        } else {
          return;
        }
      });
      return {
        countryBottom: country
      };
    });
    //conditionally pushing defined song to Favs
    this.setState(prevState => {
      const prevFavArray = prevState.favsArray;
      const alreadyFav = prevFavArray.find(
        el => el.id === parseFloat(songItem.id)
      );
      if (alreadyFav === undefined) {
        prevFavArray.push(songItem);
        return {
          favsArray: prevFavArray
        };
      }
      return null;
    });
  };

  render() {
    return (
      <div className="App">
        <Header
          searchChange={this.onSearchChange}
          headerSearch={this.onHeaderSearch}
          showFavs={this.onShowFavs}
          countFavs={this.state.favsArray.length}
        />
        <Spinner loading={this.state.isLoading} />
        <CardList
          onFavClick={this.onCardFavClick}
          cardsShow={this.state.cardsShow}
          music={this.state.music}
          input={this.state.input}
        />
        <FavList
          onFavClick={this.onFavClick}
          closeFavs={this.onCloseFavs}
          removeFavs={this.onRemoveFavs}
          cardsShow={this.state.cardsShow}
          music={this.state.favsArray}
        />
        <Country
          countries={this.state.countries}
          buttonClick={this.onCountryButtonClick}
          searchChange={this.onCountrySearchChange}
          countryBottom={this.state.countryBottom}
          onCountryFavClick={this.onCountryFavClick}
          onSelectedCountryFavClick={this.onSelectedCountryFavClick}
        />
        <Footer />
      </div>
    );
  }
}

export default App;
