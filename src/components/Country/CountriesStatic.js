import { wrapperBrazil, wrapperUsa, wrapperEs } from "./CountryStyles";

export const countriesStatic = [
    {
      name: "Brazil",
      id: 0,
      code: "BR",
      topSongs: [
        {
          artist: "Lil Nas X feat. Billy Ray Cyrus",
          track: "Old Town Road (Remix)",
          album: "Old Town Road (Remix)",
          id: 167685162,
        },
        {
          artist: "Florence + The Machine",
          track: "Jenny of Oldstones (Game of Thrones)",
          album: "Jenny of Oldstones (Game of Thrones)",
          id: 168716837,
        },
        {
          artist: "Blake Shelton",
          track: "God's Country",
          album: "God's Country",
          id: 1673064317,
        }
      ],
      wrapperStyle: wrapperBrazil,
      nameClass: "clip-brazil",
      fadeTop: true,
      fadeRight: false,
      fadeLeft: false
    },
    {
      name: "USA",
      id: 1,
      code: "US",
      topSongs: [
        {
          artist: "Massive Attack",
          track: "Hymn of the Big Wheel (Nellee Hooper mix)",
          album: "Massive Attack EP",
          id: 17640248,
        },
        {
          artist: "Lil Nas X",
          track: "Old Town Road",
          album: "Old Town Road",
          id: 162470278,
        },
        {
          artist: "Lady Gaga feat. Bradley Cooper",
          track: "Shallow",
          album: "A Star Is Born Soundtrack",
          id: 158988975,
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
      topSongs: [
        {
          artist: "Twice",
          track: "FANCY",
          album: "FANCY YOU",
          id: 168721095,
        },
        {
          artist: "Don Omar feat. Farruko",
          track: "Ramayama",
          album: "Ramayama",
          id: 168484474,
        },
        {
          artist: "Tech N9ne feat. Krizz Kaliko",
          track: "Rata",
          album: "N9na",
          id: 167102026,
        }
      ],
      wrapperStyle: wrapperEs,
      nameClass: "clip-es",
      fadeTop: false,
      fadeRight: false,
      fadeLeft: true
    }
  ]