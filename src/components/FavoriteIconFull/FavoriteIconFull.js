import styled from 'styled-components'
import {Favorite} from 'styled-icons/material/Favorite'

const RedFavoriteFull = styled(Favorite)`
  color: rgba(0,0,0,.3);
  width: 32px;
  height: 32px;
  color: red; 
  cursor: pointer;
  transitionDuration: 0.3s;
  transitionProperty: transform;
  &:hover { 
    color: red; 
  };
`
export default RedFavoriteFull;