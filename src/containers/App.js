import React, { Component } from 'react';
import Header from '../components/Header/Header';
import CardList from '../components/CardList/CardList';
import Footer from '../components/Footer/Footer';
import './App.css';

class App extends Component {
  
  constructor(props) {

    super(props);
   
    this.state = {
  
      input: 'Justin Bieber',
      cardsShow: false,
      music: [
        { track: '', album: '', artist: '', favClicked: true, id: 0},
        { track: '', album: '', artist: '', favClicked: true, id: 1},
        { track: '', album: '', artist: '', favClicked: true, id: 2}
      ],
      favsArray: []
    } 
  } 

  componentDidMount() {

    const apiKey = '22d91306931ee5a074eb08a71662cc98';
    const url = `https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.search?q_artist=justin bieber&page_size=3&page=1&s_track_rating=desc & apikey=${apiKey}`;

    fetch(url)
      .then(data => {
  
        return data.json()
        
      })
      .then(res => {

        if (res.message.header.available !== 0) {

          this.setState( (prevState) => {
            const onloadMusic = prevState.music;
            onloadMusic.forEach( (el,i) => {
              el.track = res.message.body.track_list[i].track.track_name;
              el.album = res.message.body.track_list[i].track.album_name; 
              el.artist = res.message.body.track_list[i].track.artist_name;
              el.id = res.message.body.track_list[i].track.track_id;
              el.favClicked = false
            })
            return {music: onloadMusic}
            } 
          );

          this.setState({ cardsShow: true });

        } 
      });
    }

  onSearchChange = event => {
    this.setState({ input: event.target.value });
  };


  onFavClick = event  => {

    const target = event.target.id;
    const songIndex = this.state.music.findIndex( el => el.id === parseFloat(target));
    const songItem = {
      track: this.state.music[songIndex].track, 
      album:this.state.music[songIndex].album, 
      artist:this.state.music[songIndex].artist, 
      id:this.state.music[songIndex].id, 
      favlicked: this.state.music[songIndex].favclicked
    }
    
    this.setState( prevState => {
     
      const toUpdate = prevState.music[songIndex].favClicked;
      const newMusic = [...prevState.music];
      newMusic[songIndex].favClicked = !toUpdate;
      return { music: newMusic };
      });

    this.setState( prevState => {
      const newFavsArray = [...prevState.favsArray, songItem];
      return { favsArray: newFavsArray };
    });
   
  }

   onButtonSubmit = () => {
     
    const apiKey = '22d91306931ee5a074eb08a71662cc98';
    const url = `https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.search?q_artist=${this.state.input}&page_size=3&page=1&s_track_rating=desc & apikey=${apiKey}`;

    fetch(url)
      .then(data => {
      
        return data.json()
        
      })
      .then(res => {

        if (res.message.header.available !== 0) {

          this.setState( (prevState) => {
            const onloadMusic = prevState.music;
            onloadMusic.forEach( (el,i) => {
              el.track = res.message.body.track_list[i].track.track_name;
              el.album = res.message.body.track_list[i].track.album_name; 
              el.artist = res.message.body.track_list[i].track.artist_name;
              el.id = res.message.body.track_list[i].track.track_id;
              el.favClicked = false
            })
            return {music: onloadMusic}
            } 
          );
  
          this.setState( {
            cardsShow: true,
          });

         window.scrollTo({
            top: 700,
            left: 0,
            behavior: 'smooth'
          }
         )
      
        } 
      });
  }


  render() {

    return (
      <div className="App">
        <Header searchChange={this.onSearchChange} buttonSubmit={this.onButtonSubmit} />
        <CardList onFavClick={this.onFavClick} isMusic={this.state.cardsShow} music={this.state.music} input={this.state.input} />
        <Footer />
      </div>
    );
  }
}

export default App;
