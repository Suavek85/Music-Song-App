const musicStateItem = el => {
  return {
    track: "Loading...",
    album: "Loading...",
    artist: "Loading...",
    favClicked: false,
    addedToFav: false,
    id: el
  }
}

export const musicState = [
  musicStateItem(0), musicStateItem(1), musicStateItem(2), 
];
