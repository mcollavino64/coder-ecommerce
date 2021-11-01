import styled from "styled-components";

export const StyledDetailContainer = styled.div`

h1,h4 {
    font-size: clamp(1rem, 3vw, 2rem);
    color: #F7FF00 ;
}
p {
margin-bottom: 1rem;
    font-size: clamp(1rem, 3vw, 2rem);
}

img{
    background:transparent;
}
`;

export const ProductButtonDetail = styled.button`
  font-size: 1rem;
  padding: 1rem 4rem;
  border: none;
  background: #e31837;
  color: #fff;
  transition: 0.2 ease-out;
  &:hover {
    background: #ffc500;
    transition: 0.2s ease-out;
    cursor: pointer;
    color: #000;
  }
`;