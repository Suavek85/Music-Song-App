import React from "react";
import Fade from "react-reveal/Fade";
import "./CountryItem.css";
import RedFavoriteEmpty from "../FavoriteIcon/FavoriteIcon";
import RedFavoriteFull from "../FavoriteIconFull/FavoriteIconFull";

const CountryItem = props => {
  return (
    <Fade
      duration={2000}
      left={props.fadeLeft}
      top={props.fadeTop}
      right={props.fadeRight}
    >
      <div className="cover bg-left bg-center-l" style={props.wrapperStyle}>
        <div className="bg-black-80 pb5 pb6-m pb7-l h-inherit">
          <p className={props.nameClass}> {props.name}</p>
          <p className="mb4 ml5 tl">
            <span className="num-in-circle">1</span>
            <span className="white pl3 pr1 washed-red">
              {props.topSongs[0].track}
            </span>
            <span className="white pr1"> by </span>
            <span className="white lightest-blue pr2">
              {props.topSongs[0].artist}
            </span>
            <span className="fav-wrapper grow-hov" onClick={props.onFavClick} data-id={props.topSongs[0].id}>
              {props.topSongs[0].favClicked ? (
                <RedFavoriteFull />
              ) : (
                <RedFavoriteEmpty />
              )}
            </span>
          </p>
          <p className="mb4 mt1 ml5 tl">
            <span className="num-in-circle">2</span>
            <span className="white pl3 pr1 washed-red">
              {props.topSongs[1].track}
            </span>
            <span className="white pr1"> by </span>
            <span className="white lightest-blue pr2">
              {props.topSongs[1].artist}
            </span>
            <span className="fav-wrapper grow-hov" onClick={props.onFavClick} data-id={props.topSongs[1].id}>
              {props.topSongs[1].favClicked ? (
                <RedFavoriteFull />
              ) : (
                <RedFavoriteEmpty />
              )}
            </span>
          </p>
          <p className="mb4 mt1  ml5 tl">
            <span className="num-in-circle">3</span>
            <span className="white pl3 pr1 washed-red">
              {props.topSongs[2].track}
            </span>
            <span className="white pr1"> by </span>
            <span className="white lightest-blue pr2">
              {props.topSongs[2].artist}
            </span>
            <span className="fav-wrapper grow-hov" onClick={props.onFavClick} data-id={props.topSongs[2].id}>
              {props.topSongs[2].favClicked ? (
                <RedFavoriteFull />
              ) : (
                <RedFavoriteEmpty />
              )}
            </span>
          </p>
        </div>
      </div>
    </Fade>
  );
};

export default CountryItem;
