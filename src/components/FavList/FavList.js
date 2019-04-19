import React from 'react';
import Card from '../Card/Card';

const FavList = ({ cardsShow, music, onFavClick }) => {
  if (!cardsShow) {
    return (
      <div>
        <h1 className="f1 lh-title gray">Your Favorites</h1>
        <div className="flex flex-wrap relative justify-center">
          {music.map((el) => {
            return (
              <Card
                onFavClick={onFavClick}
                key={el.id}
                id={el.id}
                track={el.track}
                album={el.album}
                artist={el.artist}
                favClicked={el.favClicked}
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
