import styled from "styled-components";

export const StyleItemCategory = styled.div`

h3 {
    font-size: clamp(1rem, 3vw, 2rem);
    color: #F7FF00 ;
    &:hover {        
        background: #e31837;
        transition: 0.2s ease-out;
        cursor: pointer;
      }
}

p {
margin-bottom: 1rem;
    font-size: clamp(1rem, 3vw, 2rem);
}
`;