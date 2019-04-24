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
          track: "God's Country)",
          album: "God's Country",
          id: 1673064317,
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
          track: "God's Country)",
          album: "God's Country",
          id: 1673064317,
        }
      ],
      wrapperStyle: wrapperEs,
      nameClass: "clip-es",
      fadeTop: false,
      fadeRight: false,
      fadeLeft: true
    }
  ]