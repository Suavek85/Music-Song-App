import React from 'react';
import Logo from '../Logo/Logo'
import RedFavoriteEmpty from '../FavoriteIcon/FavoriteIcon'
import RedFavoriteFull from '../FavoriteIconFull/FavoriteIconFull'


const Card = (props) => {

return (

    <article className=" mw5 center relative bg-white br3 pa3 pa4-ns mv5 ba b--black-10">
        { props.favClicked ? <RedFavoriteFull absolute top-10 left-10 hvr-pulse /> : <RedFavoriteEmpty absolute top-10 left-10 hvr-pulse /> }
        <div className="tc">
            <Logo />
            <h1 className="f3 mb2 pb3 dark-red">{props.track}</h1>
            <h2 className="f5 fw4 gray mt0"><span className='dark-red'>Artist:</span><br />{props.artist}</h2>
            <h2 className="f5 fw4 gray mt0"><span className='dark-red'>Album:</span><br />{props.album}</h2>
        </div>
    </article>
    );
}


export default Card;