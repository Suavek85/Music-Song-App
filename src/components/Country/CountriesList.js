import React from "react";
import CountryItem from "./CountryItem";

const CountriesList = ({ countries, onCountryFavClick }) => {
  return (
    <div>
      <h1 id='charts' className="f1 lh-title gray">
                Top Songs in...
        </h1>
      {countries.map(el => {
        return (
          <CountryItem
            wrapperStyle={el.wrapperStyle}
            circleStyle={el.circleStyle}
            textStyle={el.textStyle}
            key={el.id}
            number={el.number}
            name={el.name}
            topSongs={el.topSongs}
            fadeTop={el.fadeTop}
            fadeRight={el.fadeRight}
            fadeLeft={el.fadeLeft}
            showSongs={el.showSongs}
            onCountryFavClick={onCountryFavClick}
          />
        );
      })}
    </div>
  );
};

export default CountriesList;

