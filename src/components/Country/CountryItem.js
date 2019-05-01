import React from "react";
import Fade from "react-reveal/Fade";
import RedFavoriteFull from "../Icons/FavoriteIconFull/FavoriteIconFull";
import RedFavoriteEmpty from "../Icons/FavoriteIcon/FavoriteIcon";
import { YoutubeIconWhite } from "../Icons/Youtube/Youtube";
import { youTubeUrl } from "../../containers/API";

const CountryItem = props => {
  
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
              {[0, 1, 2].map(el => {
                return (
                  <div className="mb4 ml5 tl flex items-center ">
                    <span style={props.circleStyle}>{el + 1}</span>
                    <span className="white pl3 pr1 washed-red">
                      {props.topSongs[el].track}
                    </span>
                    <span className="white pr1"> by </span>
                    <span className="white lightest-blue pr2">
                      {props.topSongs[el].artist}
                    </span>
                    <span
                      className="fav-wrapper grow-hov dib"
                      onClick={props.onCountryFavClick}
                      data-no={props.topSongs[el].number}
                      data-id={props.topSongs[el].id}
                    >
                      {props.topSongs[el].favClicked ? (
                        <RedFavoriteFull />
                      ) : (
                        <RedFavoriteEmpty />
                      )}
                    </span>
                    <a
                      href={youTubeUrl(
                        props.topSongs[el].track,
                        props.topSongs[el].artist
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ marginLeft: "5px" }}
                      className="fav-wrapper grow-hov"
                    >
                      <YoutubeIconWhite />
                    </a>
                  </div>
                );
              })}
            </div>
          ) : null}
        </div>
      </div>
    </Fade>
  );
};

export default CountryItem;
