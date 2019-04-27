import React from "react";
import Fade from "react-reveal/Fade";

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
          <div style={props.textStyle}>

            {props.button ? (
              <div>
                <div><input style={props.textStyle} onChange={props.searchChange} placeholder='Try your country...' required /></div>
                <p onClick={props.buttonClick} className="f6 link dim ba bw1 ph4 pv2 mb2 dib hot-pink pointer tracked ttc " >Go!</p>
              </div>
            ) : (
              props.name
            )}

          </div>

          <p className="mb4 ml5 tl">
            <span style={props.circleStyle}>1</span>
            <span className="white pl3 pr1 washed-red">
              {props.topSongs[0].track}
            </span>
            <span className="white pr1"> by </span>
            <span className="white lightest-blue pr2">
              {props.topSongs[0].artist}
            </span>
          </p>
          <p className="mb4 mt1 ml5 tl">
            <span style={props.circleStyle}>2</span>
            <span className="white pl3 pr1 washed-red">
              {props.topSongs[1].track}
            </span>
            <span className="white pr1"> by </span>
            <span className="white lightest-blue pr2">
              {props.topSongs[1].artist}
            </span>
          </p>
          <p className="mb4 mt1  ml5 tl">
            <span style={props.circleStyle}>3</span>
            <span className="white pl3 pr1 washed-red">
              {props.topSongs[2].track}
            </span>
            <span className="white pr1"> by </span>
            <span className="white lightest-blue pr2">
              {props.topSongs[2].artist}
            </span>
          </p>
        </div>
      </div>
    </Fade>
  );
};

export default CountryItem;
