import BrazilBck from "./images/brazil.jpg";
import UsaBck from "./images/usa.jpg";
import EsBck from "./images/spain.jpg";

const wrapperBrazil = {
  width: "50vw",
  height: "350px",
  backgroundImage: `url(${BrazilBck})`,
  margin: "100px auto 50px auto"
};

const wrapperUsa = {
  width: "50vw",
  height: "350px",
  backgroundImage: `url(${UsaBck})`,
  margin: "50px auto 50px auto"
};

const wrapperEs = {
  width: "50vw",
  height: "350px",
  backgroundImage: `url(${EsBck})`,
  margin: "50px auto 80px auto"
};

const wrapperRandom = {
  width: "50vw",
  height: "400px",
  backgroundImage: `url(${EsBck})`,
  margin: "50px auto 80px auto"
};


const textBr = {
  fontSize: '60px',
  paddingTop: '30px',
  marginBottom: '40px',
  color: 'grey',
  fontFamily: "'Montserrat', sans-serif",
  fontWeight: '900',
  lineHeight: '1, 5',
  letterSpacing: '5px',
 
}

const textUsa = {
  fontSize: '60px',
  paddingTop: '30px',
  marginBottom: '40px',
  color: 'grey',
  fontFamily: "'Montserrat', sans-serif",
  fontWeight: '900',
  lineHeight: '1, 5',
  letterSpacing: '7px',
 
}

const textEs = {
  fontSize: '60px',
  paddingTop: '30px',
  marginBottom: '40px',
  color: 'grey',
  fontFamily: "'Montserrat', sans-serif",
  fontWeight: '900',
  lineHeight: '1, 5',
  letterSpacing: '5px',
 
}

const textXx = {
  backgroundColor: 'transparent',
  color: 'grey',
  border: 'none',
  width: '90%',
  textAlign: 'center',
  outline: 'none',
  fontFamily: "'Montserrat', sans-serif",
  fontWeight: '900',
  fontSize: '50px',
  paddingTop: '20px',
  
}


const numberCircle = {
  paddingTop: '5px',
  paddingBottom: '5px',
  paddingLeft: '13px',
  paddingRight: '13px',
  color: 'white',
  fontSize: '18px',
  borderRadius: '50%',
  border: '1px solid white',

}

export const countriesMain = [
  {
    name: "Brazil",
    id: 0,
    code: "BR",
    topSongs: [
      {
        artist: "Lady Gaga feat. Bradley Cooper",
        track: "Shallow",
        album: "A Star Is Born Soundtrack",
        id: 158988975,
        favClicked: false
      },
      {
        artist: "Melim",
        track: "Meu Abrigo",
        album: "Melim",
        id: 142894014,
        favClicked: false
      },
      {
        artist: "Lady Gaga",
        track: "Always Remember Us This Way",
        album: "A Star Is Born Soundtrack",
        id: 158988985,
        favClicked: false
      }
    ],
    wrapperStyle: wrapperBrazil,
    nameClass: textBr,
    circleStyle: numberCircle,
    fadeTop: false,
    fadeRight: false,
    fadeLeft: true,
    button: false
  },
  {
    name: "USA",
    id: 1,
    code: "US",
    topSongs: [
      {
        artist: "Lil Nas X feat. Billy Ray Cyrus",
        track: "Old Town Road (Remix)",
        album: "Old Town Road (Remix)",
        id: 17640248,
        favClicked: false
      },
      {
        artist: "Blake Shelton",
        track: "God's Country",
        album: "God's Country",
        id: 167306431,
        favClicked: false
      },
      {
        artist: "Florence + The Machine",
        track: "Jenny of Oldstones (Game of Thrones)",
        album: "Jenny of Oldstones (Game of Thrones)",
        id: 168716837,
        favClicked: false
      }
    ],
    wrapperStyle: wrapperUsa,
    nameClass: textUsa,
    circleStyle: numberCircle,
    fadeTop: false,
    fadeRight: true,
    fadeLeft: false,
    button: false
  },
  {
    name: "Spain",
    id: 2,
    code: "ES",
    topSongs: [
      {
        artist: "Luis Fonsi feat. Sebastian Yatra & Nicky Jam",
        track: "Date La Vuelta",
        album: "Date La Vuelta",
        id: 168814808,
        favClicked: false
      },
      {
        artist: "ROSAL feat. J Balvin & El Guincho",
        track: "Con Altura",
        album: "Con Altura",
        id: 167497251,
        favClicked: false
      },
      {
        artist: "Alejandro Sanz feat. Camila Cabello",
        track: "Mi Persona Favorita",
        album: "#ELDISCO",
        id: 167332228,
        favClicked: false
      }
    ],
    wrapperStyle: wrapperEs,
    nameClass: textEs,
    circleStyle: numberCircle,
    fadeTop: false,
    fadeRight: false,
    fadeLeft: true,
    button: false
  }
];

export const countrySelected = [
  {
    name: "",
    id: 0,
    code: "",
    topSongs: [
      {
        artist: "Artist",
        track: "Track",
        album: "Album",
        id: 0,
        favClicked: false
      },
      {
        artist: "Artist",
        track: "Track",
        album: "Album",
        id: 0,
        favClicked: false
      },
      {
        artist: "Artist",
        track: "Track",
        album: "Album",
        id: 0,
        favClicked: false
      }
    ],
    wrapperStyle: wrapperRandom,
    nameClass: textXx,
    circleStyle: numberCircle,
    fadeTop: false,
    fadeRight: true,
    fadeLeft: false,
    button: true
  }
];
