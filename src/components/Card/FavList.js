import React from "react";
import CardItem from "./CardItem";
import GreyWindowClose from "../Icons/Close/Close";

const FavList = ({ cardsShow, music, onFavClick, removeFavs, closeFavs }) => {
  if (!cardsShow) {
    return (
      <div>
        <h1 className="f1 lh-title gray">
          Your Favorites
          <GreyWindowClose onClick={closeFavs}/>
        </h1>
        <div className="flex flex-wrap relative justify-center">
          {music.map(el => {
            return (
              <CardItem
                onFavClick={onFavClick}
                removeFavs={removeFavs}
                key={el.id}
                id={el.id}
                track={el.track}
                album={el.album}
                artist={el.artist}
                favClicked={el.favClicked}
                addedToFav={el.addedToFav}
              />
            );
          })}
        </div>
      </div>
    );
  }
  return null;
};

export default FavList;
