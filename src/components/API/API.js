export const apiKey = "22d91306931ee5a074eb08a71662cc98";
export const genericUrl = `https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.search?q_artist=justin bieber&page_size=3&page=1&s_track_rating=desc & apikey=${apiKey}`;
export const specificUrl = input => {
  return `https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.search?q_artist=${input}&page_size=3&page=1&s_track_rating=desc & apikey=${apiKey}`;
};
