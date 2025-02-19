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
background-image: url(${(props => props.image) || "https://placehold.co/200"});
display: block;
//isModal is true and in ModalCard
width: ${(props) => (props.isModal ? "400px" : "230px")}; // 400px for modal, 230px otherwise
height: ${(props) => (props.isModal ? "400px" : "220px")}; // 400px for modal, 220px otherwise
background-position: center;
background-size: cover;
border-radius: 10px;
margin: auto;
border: 1px solid;

${(props) => props.isModal && `
  @media (max-width: 480px) {
  background-size: cover;
      background-position: center;
      width: 330px;
      height: 330px;
    }

  @media (max-width: 425px) {
      background-size: cover;
      background-position: center;
      width: 320px;
      height: 350px;
    }

   @media (max-width: 375px) {
      background-size: cover;
      background-position: center;
      width: 300px;
      height: 300px;
      }

  @media (max-width: 320px) {
      background-size: cover;
      background-position: center;
      width: 260px;
      height: 260px;
      }
`}
`;

export const NftCard = styled.div`
width: 250px;
height: 280px;
margin: auto;
border-radius: 10px;
padding:  10px;
cursor: pointer;
box-shadow: 8px 8px 16px #d0d0d0,
            -8px -8px 16px #ffffff;
place-items: center; // Align both horizontally and vertically
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


export const Grid = styled.div`
display: grid;
grid-template-columns: repeat(4, 1fr); // 4 cards per row
gap: 15px;
row-gap: 50px;

@media (max-width: 1200px) {
  grid-template-columns: 1fr 1fr 1fr;
}

@media(max-width: 900px) {
  grid-template-columns: 1fr 1fr;
}

@media(max-width: 600px) {
  grid-template-columns: 1fr;
}
`;




