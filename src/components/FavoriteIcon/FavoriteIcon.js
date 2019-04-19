import styled from 'styled-components';
import { FavoriteBorder } from 'styled-icons/material/FavoriteBorder';

const RedFavoriteEmpty = styled(FavoriteBorder)`
  color: rgba(0, 0, 0, 0.3);
  width: 32px;
  height: 32px;
  color: red;
  cursor: pointer;
`;
export default RedFavoriteEmpty;
