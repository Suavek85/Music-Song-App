import {
  wrapperBrazil,
  wrapperUsa,
  wrapperEs
} from "./CountryStyles";


export const countriesStatic = [{
    name: "Brazil",
    id: 0,
    code: "BR",
    topSongs: [{
        artist: "Lady Gaga feat. Bradley Cooper",
        track: "Shallow",
        album: "A Star Is Born Soundtrack",
        id: 158988975,
        favClicked: false,
      },
      {
        artist: "Melim",
        track: "Meu Abrigo",
        album: "Melim",
        id: 142894014,
        favClicked: false,
      },
      {
        artist: "Lady Gaga",
        track: "Always Remember Us This Way",
        album: "A Star Is Born Soundtrack",
        id: 158988985,
        favClicked: false,
      }
    ],
    wrapperStyle: wrapperBrazil,
    nameClass: "clip-brazil",
    fadeTop: true,
    fadeRight: false,
    fadeLeft: false,
  },
  {
    name: "USA",
    id: 1,
    code: "US",
    topSongs: [{
        artist: "Lil Nas X feat. Billy Ray Cyrus",
        track: "Old Town Road (Remix)",
        album: "Old Town Road (Remix)",
        id: 17640248,
        favClicked: false,
      },
      {
        artist: "Blake Shelton",
        track: "God's Country",
        album: "God's Country",
        id: 167306431,
        favClicked: false,
      },
      {
        artist: "Florence + The Machine",
        track: "Jenny of Oldstones (Game of Thrones)",
        album: "Jenny of Oldstones (Game of Thrones)",
        id: 168716837,
        favClicked: false,
      }
    ],
    wrapperStyle: wrapperUsa,
    nameClass: "clip-usa",
    fadeTop: false,
    fadeRight: true,
    fadeLeft: false
  },
  {
    name: "Spain",
    id: 2,
    code: "ES",
    topSongs: [{
        artist: "Luis Fonsi feat. Sebastian Yatra & Nicky Jam",
        track: "Date La Vuelta",
        album: "Date La Vuelta",
        id: 168814808,
        favClicked: false,
      },
      {
        artist: "ROSAL feat. J Balvin & El Guincho",
        track: "Con Altura",
        album: "Con Altura",
        id: 167497251,
        favClicked: false,
      },
      {
        artist: "Alejandro Sanz feat. Camila Cabello",
        track: "Mi Persona Favorita",
        album: "#ELDISCO",
        id: 167332228,
        favClicked: false,
      }
    ],
    wrapperStyle: wrapperEs,
    nameClass: "clip-es",
    fadeTop: false,
    fadeRight: false,
    fadeLeft: true
  }
]