import React from "react";
import Logo from "../Logo/Logo";
import RedFavoriteEmpty from "../FavoriteIcon/FavoriteIcon";
import RedFavoriteFull from "../FavoriteIconFull/FavoriteIconFull";
import GreyBin from "../BinIcon/BinIcon";

const Card = props => {
  const leftStyle = {
    height: "32px",
    width: "32px",
    position: "absolute",
    top: "10px",
    left: "10px"
  };

  const rightStyle = {
    height: "26px",
    width: "26px",
    position: "absolute",
    top: "10px",
    right: "10px"
  };
  

  return (
    <article className=" mw5 center relative bg-white br3 pa3 pa4-ns mv5 ba b--black-10">
      <div
        className="fav-wrapper grow-hov"
        style={leftStyle}
        id={props.id}
        onClick={props.onFavClick}
      >
        {props.favClicked ? <RedFavoriteFull /> : <RedFavoriteEmpty />}
      </div>
      <div onClick={props.onButtonRemove} data-id={props.id} className="fav-wrapper grow-hov" style={rightStyle}>
        {props.addedToFav ? <GreyBin /> : null }
      </div>
      <div className="tc">
        <Logo />
        <h1 className="f3 mb2 pb3 dark-red">{props.track}</h1>
        <h2 className="f5 fw4 gray mt0">
          <span className="dark-red">Artist:</span>
          <br />
          {props.artist}
        </h2>
        <h2 className="f5 fw4 gray mt0">
          <span className="dark-red">Album:</span>
          <br />
          {props.album}
        </h2>
      </div>
    </article>
  );
};

export default Card;
