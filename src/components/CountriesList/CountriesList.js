import React from "react";
import CountryItem from "../CountryItem/CountryItem";

const CountriesList = ({ countries }) => {
  return (
    <div>
      <h1 className="f1 lh-title gray">
                Top Songs in...
        </h1>
      {countries.map(el => {
        return (
          <CountryItem
            wrapperStyle={el.wrapperStyle}
            circleStyle={el.circleStyle}
            nameClass={el.nameClass}
            key={el.id}
            name={el.name}
            topSongs={el.topSongs}
            fadeTop={el.fadeTop}
            fadeRight={el.fadeRight}
            fadeLeft={el.fadeLeft}
          />
        );
      })}
    </div>
  );
};

export default CountriesList;

