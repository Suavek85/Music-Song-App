import React from "react";
import CountryItem from "./CountryItem";

const CountryList= ({ countryBottom, searchChange, buttonClick }) => {
  return (
    <div>
        {countryBottom.map(el => {
        return (
          <CountryItem
            wrapperStyle={el.wrapperStyle}
            textStyle={el.textStyle}
            circleStyle={el.circleStyle}
            key={el.id}
            name={el.name}
            topSongs={el.topSongs}
            fadeTop={el.fadeTop}
            fadeRight={el.fadeRight}
            fadeLeft={el.fadeLeft}
            button={el.button}
            searchChange={searchChange}
            buttonClick={buttonClick}
          />
        );
    })}
    </div>
  );
};

export default CountryList;
