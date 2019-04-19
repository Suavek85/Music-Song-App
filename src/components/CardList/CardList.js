import React from 'react';
import Card from '../Card/Card';

const CardList = ({ cardsShow, music, onFavClick, input }) => {
  if (cardsShow) {
    return (
            <div>
                <h1 className="f1 lh-title gray">
                Top Songs by "{input}"
                </h1>
                <div className="flex flex-wrap relative justify-center">
                    {music.map((el, i) => {
                      return (
                            <Card
                              onFavClick={onFavClick}
                              key={i}
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
  } else {
    return null;
  }
};

export default CardList;
