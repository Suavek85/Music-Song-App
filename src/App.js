import React, { Component } from 'react';
import Header from './components/Header/Header';
import CardList from './components/CardList/CardList';
import Footer from './components/Footer/Footer';
import './App.css';

class App extends Component {
  
  constructor() {

    super();
  
    this.state = {
  
      input: '',
      cardsShow: false,
      music: [
        { track: '', album: '', artist: '', favClicked: ''},
        { track: '', album: '', artist: '', favClicked: ''},
        { track: '', album: '', artist: '', favClicked: ''}
      ] 
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

          this.setState( {
            music: [
            { track: res.message.body.track_list[0].track.track_name, 
              album: res.message.body.track_list[0].track.album_name, 
              artist: res.message.body.track_list[0].track.artist_name,
              favClicked: false},
            { track: res.message.body.track_list[1].track.track_name, 
              album: res.message.body.track_list[1].track.album_name, 
              artist: res.message.body.track_list[1].track.artist_name,
              favClicked:false
            },
            { track: res.message.body.track_list[2].track.track_name, 
              album: res.message.body.track_list[2].track.album_name, 
              artist: res.message.body.track_list[2].track.artist_name,
              favClicked:false
            },
            ] 
          });
  
          this.setState( {
            cardsShow: true,
          });

      
      
        } 
      });
    }



  onSearchChange = event => {
    this.setState({ input: event.target.value });
    console.log(event.target.value);
  };


   onButtonSubmit = () => {
     
    const apiKey = '22d91306931ee5a074eb08a71662cc98';
    const url = `https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.search?q_artist=${this.state.input}&page_size=3&page=1&s_track_rating=desc & apikey=${apiKey}`;

    fetch(url)
      .then(data => {
      
        return data.json()
        
      })
      .then(res => {

        if (res.message.header.available !== 0) {

          this.setState( {
            music: [
            { track: res.message.body.track_list[0].track.track_name, 
              album: res.message.body.track_list[0].track.album_name, 
              artist: res.message.body.track_list[0].track.artist_name,
              favClicked: true},
            { track: res.message.body.track_list[1].track.track_name, 
              album: res.message.body.track_list[1].track.album_name, 
              artist: res.message.body.track_list[1].track.artist_name,
              favClicked:true
            },
            { track: res.message.body.track_list[2].track.track_name, 
              album: res.message.body.track_list[2].track.album_name, 
              artist: res.message.body.track_list[2].track.artist_name,
              favClicked:true
            },
            ] 
          });
  
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
        <CardList isMusic={this.state.cardsShow} music={this.state.music} />
        <Footer />
      </div>
    );
  }
}

export default App;
