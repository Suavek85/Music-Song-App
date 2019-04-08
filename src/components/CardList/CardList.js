import React from 'react';
import Card from '../Card/Card';


const CardList = ( { isMusic, music }) => {

   if(isMusic === false) {

    return (<p>Search now</p>)


   } else {

    return (<div className="flex flex-wrap relative justify-center">{

        music.map((el, i) => {
    
            return <Card key={i} track={el.track} album={el.album} artist={el.artist} / >  })
          
    }</div>);

   }
    

} 

export default CardList;