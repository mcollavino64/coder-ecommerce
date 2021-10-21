import styled from 'styled-components';
import ImgBg from "../img/pizza-3.jpg"

export const itemContainer = styled.div`
  background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1)),
  url(${ImgBg});
  height: 100vh;
  background-position: center;
  background-size: cover;
`;

export const itemContent = styled.div`
  height: calc(100vh - 80px);
  max-height: 100%;
  padding: 0rem calc((100vw - 1300px) / 2);
`;
