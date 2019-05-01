import React from "react";
import Fade from "react-reveal/Fade";
import RedFavoriteFull from "../Icons/FavoriteIconFull/FavoriteIconFull";
import RedFavoriteEmpty from "../Icons/FavoriteIcon/FavoriteIcon";
import { YoutubeIconWhite } from "../Icons/Youtube/Youtube";

const CountryItem = props => {
  const youTubeUrl = (song, artist) => {
    return `https://www.youtube.com/results?search_query=${song}+${artist}`;
  };
  return (
    <Fade
      duration={2000}
      left={props.fadeLeft}
      top={props.fadeTop}
      right={props.fadeRight}
    >
      <div
        className="cover w-60 w-90-m bg-left bg-center-l"
        style={props.wrapperStyle}
      >
        <div className="bg-black-80 pb5 pb6-m pb7-l h-inherit">
          <div style={props.textStyle}>
            {props.button ? (
              <div>
                <div>
                  <input
                    style={props.textStyle}
                    onChange={props.searchChange}
                    placeholder="Try your country..."
                    required
                  />
                </div>
                <p
                  onClick={props.buttonClick}
                  className="f6 link dim ba bw1 ph4 pv2 mb2 dib hot-pink pointer tracked ttc "
                >
                  Go!
                </p>
              </div>
            ) : (
              props.name
            )}
          </div>
          {props.showSongs ? (
            <div>
              <div className="mb4 ml5 tl flex items-center ">
                <span style={props.circleStyle}>1</span>
                <span className="white pl3 pr1 washed-red">
                  {props.topSongs[0].track}
                </span>
                <span className="white pr1"> by </span>
                <span className="white lightest-blue pr2">
                  {props.topSongs[0].artist}
                </span>
                <span
                  className="fav-wrapper grow-hov dib"
                  onClick={props.onCountryFavClick}
                  data-no={props.topSongs[0].number}
                  data-id={props.topSongs[0].id}
                >
                  {props.topSongs[0].favClicked ? (
                    <RedFavoriteFull />
                  ) : (
                    <RedFavoriteEmpty />
                  )}
                </span>
                <a
                  href={youTubeUrl(
                    props.topSongs[0].track,
                    props.topSongs[0].artist
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ marginLeft: "5px" }}
                  className="fav-wrapper grow-hov"
                >
                  <YoutubeIconWhite />
                </a>
              </div>
              <div className="mb4 ml5 tl flex items-center ">
                <span style={props.circleStyle}>1</span>
                <span className="white pl3 pr1 washed-red">
                  {props.topSongs[1].track}
                </span>
                <span className="white pr1"> by </span>
                <span className="white lightest-blue pr2">
                  {props.topSongs[1].artist}
                </span>
                <span
                  className="fav-wrapper grow-hov dib"
                  onClick={props.onCountryFavClick}
                  data-no={props.topSongs[1].number}
                  data-id={props.topSongs[1].id}
                >
                  {props.topSongs[1].favClicked ? (
                    <RedFavoriteFull />
                  ) : (
                    <RedFavoriteEmpty />
                  )}
                </span>
                <a
                  href={youTubeUrl(
                    props.topSongs[1].track,
                    props.topSongs[1].artist
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ marginLeft: "5px" }}
                  className="fav-wrapper grow-hov"
                >
                  <YoutubeIconWhite />
                </a>
              </div>
              <div className="mb4 ml5 tl flex items-center ">
                <span style={props.circleStyle}>1</span>
                <span className="white pl3 pr1 washed-red">
                  {props.topSongs[2].track}
                </span>
                <span className="white pr1"> by </span>
                <span className="white lightest-blue pr2">
                  {props.topSongs[2].artist}
                </span>
                <span
                  className="fav-wrapper grow-hov dib"
                  onClick={props.onCountryFavClick}
                  data-no={props.topSongs[2].number}
                  data-id={props.topSongs[2].id}
                >
                  {props.topSongs[2].favClicked ? (
                    <RedFavoriteFull />
                  ) : (
                    <RedFavoriteEmpty />
                  )}
                </span>
                <a
                  href={youTubeUrl(
                    props.topSongs[2].track,
                    props.topSongs[2].artist
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ marginLeft: "5px" }}
                  className="fav-wrapper grow-hov"
                >
                  <YoutubeIconWhite />
                </a>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </Fade>
  );
};

export default CountryItem;
