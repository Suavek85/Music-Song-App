
import styled from 'styled-components'
import {FavoriteBorder} from 'styled-icons/material/FavoriteBorder'

const RedFavoriteEmpty = styled(FavoriteBorder)`
  color: rgba(0,0,0,.3);
  width: 32px;
  height: 32px;
  position: absolute;
  top: 10px;
  left: 10px;
  cursor: pointer;
  transitionDuration: 0.3s;
  transitionProperty: transform;
  &:hover { 
    color: red; 
    transform: scale(1.1);
  };
`
export default RedFavoriteEmpty;