import React from 'react';
import data from './data/data.json';
import { Grid, Subtitle, Title, Container } from './styles/App.styles';
//import { NftPhoto } from './styles/NFTCard.styles';
import { NFTCard }  from './components/NFTCard';
import { NFTModal } from './components/NFTModal';
import { useState } from 'react';


export const App = () => {

  const [showModal, setshowModal] = useState(false);
  const [selectedNFT, setselectedNFT] = useState();

  const toggleModal = (i) => {
    if (i>= 0) {
      setselectedNFT(nft[1])
    }
    setshowModal(!showModal)

  }

  return (
    <div className="App">
      <Container>
        <Title>SeaGuardians Collection</Title>
        <Subtitle>The Sea Series</Subtitle>
        <Grid>
          <NFTCard key={i} nft={nft} toggleModal={() => {toggleModal()}} />
        </Grid>
      </Container>
      <NFTModal nft={data.nfts[0]}/>
    </div>
  );
}
