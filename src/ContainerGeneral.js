import styled from 'styled-components';
import ImgBg from "../src/pizza-3.jpg"

export const ContainerGeneral = styled.div`
  background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1)),
  url(${ImgBg});

  background-position: center;
  background-size: cover;
`;

// export const ItemContent = styled.div`
//   height: calc(100vh - 80px);
//   max-height: 100%;
//   padding: 0rem calc((100vw - 1300px) / 2);
// `;


