import React, { Component } from "react";
import Header from "../components/Header/Header";
import FavList from "../components/FavList/FavList";
import Footer from "../components/Footer/Footer";
import Spinner from "../components/Spinner/Spinner";
import { genericUrl, specificUrl } from "../components/API/API";
import CardList from "../components/CardList/CardList";
import "./App.css";
import scrollDownSmooth from "../components/Animations/Animations";
import Country from "../components/Country/Country";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      input: "Justin Bieber",
      isLoading: true,
      cardsShow: true,
      music: [
        {
          track: "",
          album: "",
          artist: "",
          favClicked: false,
          addedToFav: false,
          id: 0
        },
        {
          track: "",
          album: "",
          artist: "",
          favClicked: false,
          addedToFav: false,
          id: 1
        },
        {
          track: "",
          album: "",
          artist: "",
          favClicked: false,
          addedToFav: false,
          id: 2
        }
      ],
      favsArray: []
    };
  }

  componentDidMount() {
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
        //if (error.status === 404) {
        //}
      });
  }

  onSearchChange = event => {
    this.setState({
      input: event.target.value
    });
  };

  onFavClick = event => {
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
    }
  };

  onButtonSubmit = () => {
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
        //if (error.status === 404) {
        //}
      });
  };

  onButtonFavs = () => {
    this.setState({
      cardsShow: false
    });
    scrollDownSmooth();
  };

  onButtonRemove = event => {
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

  render() {
    return (
      <div className="App">
        <Header
          searchChange={this.onSearchChange}
          buttonSubmit={this.onButtonSubmit}
          buttonFavs={this.onButtonFavs}
          favsCount={this.state.favsArray.length}
        />
        <Spinner loading={this.state.isLoading} />
        <CardList
          git 
          cardsShow={this.state.cardsShow}
          music={this.state.music}
          input={this.state.input}
        />
        <FavList
          onFavClick={this.onFavClick}
          onButtonRemove={this.onButtonRemove}
          cardsShow={this.state.cardsShow}
          music={this.state.favsArray}
        />
        <Country />
        <Footer />
      </div>
    );
  }
}

export default App;
