import React, { Component } from 'react';
import Header from '../components/Header/Header';
import CardList from '../components/CardList/CardList';
import Footer from '../components/Footer/Footer';
import './App.css';

class App extends Component {
  
  constructor(props) {

    super(props);
    this.onFavClick = this.onFavClick.bind(this);

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

          this.setState( {
            music: [
            { track: res.message.body.track_list[0].track.track_name, 
              album: res.message.body.track_list[0].track.album_name, 
              artist: res.message.body.track_list[0].track.artist_name,
              id: res.message.body.track_list[0].track.track_id,
              favClicked: false
            },
            { track: res.message.body.track_list[1].track.track_name, 
              album: res.message.body.track_list[1].track.album_name, 
              artist: res.message.body.track_list[1].track.artist_name,
              id: res.message.body.track_list[1].track.track_id,
              favClicked:false
            },
            { track: res.message.body.track_list[2].track.track_name, 
              album: res.message.body.track_list[2].track.album_name, 
              artist: res.message.body.track_list[2].track.artist_name,
              id: res.message.body.track_list[2].track.track_id,
              favClicked:false
            },
            ] 
          });
  
          this.setState({ cardsShow: true });

        } 
      });
    }

  onSearchChange = event => {
    this.setState({ input: event.target.value });
  };

  onFavClick = event  => {

    let target = event.target.id;
    
 
    this.setState( prevState => {
      let songIndex = prevState.music.findIndex( el => el.id === parseFloat(target));
      let toUpdate = prevState.music[songIndex].favClicked;
      let newMusic = [...prevState.music];
      newMusic[songIndex].favClicked = !toUpdate;
      return {music: newMusic};
      }
    );

      //CREATE OBJECT LITERAL AND PUSH NEW OBJECT INTO IT
      //this.state.favsArray.push({ track: track, album: album, artist:artist, id:id, favlicked:favclicked})
      //}
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

          this.setState( {
            music: [
            { track: res.message.body.track_list[0].track.track_name, 
              album: res.message.body.track_list[0].track.album_name, 
              artist: res.message.body.track_list[0].track.artist_name,
              id: res.message.body.track_list[0].track.track_id,
              favClicked: false},
            { track: res.message.body.track_list[1].track.track_name, 
              album: res.message.body.track_list[1].track.album_name, 
              artist: res.message.body.track_list[1].track.artist_name,
              id: res.message.body.track_list[1].track.track_id,
              favClicked:false
            },
            { track: res.message.body.track_list[2].track.track_name, 
              album: res.message.body.track_list[2].track.album_name, 
              artist: res.message.body.track_list[2].track.artist_name,
              id: res.message.body.track_list[2].track.track_id,
              favClicked:false
            },
            ] 
          });
          console.log(this.state.music)
  
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
