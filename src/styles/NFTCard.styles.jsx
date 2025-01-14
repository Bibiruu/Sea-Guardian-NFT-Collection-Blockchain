import styled from 'styled-components';

export const NftName = styled.div`
font-size: 12px;
font-weight: bold;
display:inline;
`;

export const NftCollectiontext = styled.div`
font-size: 12px;
color: gray;
`;

export const NftPhoto = styled.div`
display: block;
width:220px;
height:200px;
background-position: center;
background-size: cover;
border-radius: 10px;
margin: auto;
border: 1px solid;
`;

export const NftCard = styled.div`
width: 220px;
height: 260px;
margin: auto;
border-radius: 10px;
padding:  10px;
cursor: pointer;
box-shadow: 8px 8px 16px #d0d0d0,
            -8px -8px 16px #ffffff;
place-items: center; // Align both horizontally and vertically
`;

export const Grid = styled.div`
display: grid;
grid-template-columns: repeat(4, 1fr); // 4 cards per row
row-gap: 50px;
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




