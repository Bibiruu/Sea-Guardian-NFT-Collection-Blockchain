import styled from "styled-components";

export const Grid = styled.div`
display: grid;
grid-template-columns: repeat(4, 1fr); // 4 cards per row
row-gap: 40px;
border:solid;
`;
export const Subtitle = styled.h4`
  color: gray;
  margin: 0;
  padding: 20px;
  text-align: center;
`;

export const Title = styled.h1`
  margin: 0;
  text-align: center;
`;

export const Container = styled.div`
width: 70%;
max-width: 1200px;
margin: auto; //centered setup
margin-top: 100px;
 `;
