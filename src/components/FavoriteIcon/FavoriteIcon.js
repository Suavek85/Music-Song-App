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
`
export default RedFavoriteEmpty;