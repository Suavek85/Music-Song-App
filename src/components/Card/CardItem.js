import React from "react";
import Logo from "../Icons/Logo/Logo";
import RedFavoriteEmpty from "../Icons/FavoriteIcon/FavoriteIcon";
import RedFavoriteFull from "../Icons/FavoriteIconFull/FavoriteIconFull";
import GreyBin from "../Icons/BinIcon/BinIcon";

const CardItem = props => {
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

  const logoStyle = {
    height: "120px",
    width: "120px"
  }
  
  return (
    <article className=" w-25 w-40-m center relative bg-near-white br3 pa3 pa4-ns mv5 ba b--black-10">
      <div
        className="fav-wrapper grow-hov"
        style={leftStyle}
        data-id={props.id}
        onClick={props.onFavClick}
      >
        {props.favClicked ? <RedFavoriteFull /> : <RedFavoriteEmpty />}
      </div>
      <div onClick={props.removeFavs} data-id={props.id} className="fav-wrapper grow-hov" style={rightStyle}>
        {props.addedToFav ? <GreyBin /> : null }
      </div>
      <div className="tc">
        <Logo style={logoStyle}/>
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

export default CardItem;
