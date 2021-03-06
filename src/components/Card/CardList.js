import React from 'react';
import CardItem from './CardItem';

const CardList = (props) => {
  if (props.cardsShow) {
    return (
      <div>
        <h1 className="f1 lh-title gray">
                Top Songs by "{props.input}"
        </h1>
        <div className="flex flex-wrap relative justify-center">
          {props.music.map(el => {
            return (
              <CardItem
                onFavClick={props.onFavClick}
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

export default CardList;
