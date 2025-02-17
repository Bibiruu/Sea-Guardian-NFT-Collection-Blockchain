import React from 'react';
import data from '../data/data.json';
import { useState, useEffect } from 'react';
import { NFTModal } from './NFTModal';
import {
  NftName,
  NftCollectiontext,
  NftPhoto,
  NftCard,
  Grid,
  Subtitle,
  Title,
  Container,
} from '../styles/NFTCard.styles';
import { connect } from "../helpers";
import { ethers } from "ethers";
import axios from 'axios';


const getMetadataFromIpfs = async (tokenURI) => {
  try {
    let metadata = await axios.get(tokenURI);
    if (metadata.data && metadata.data.image) {
      console.log("Metadata fetched:", metadata.data);
      return metadata.data;
    } else {
      console.error("No image found in metadata:", metadata.data);
      return { image: "https://placehold.co/200" }; // Fallback image
    }
  } catch (error) {
    console.error("Error fetching metadata:", error);
    return { image: "https://placehold.co/200" }; // Fallback image
  }
};

export const NFTCard = (props) => {
  const [showModal, setshowModal] = useState(false);
  const [selectedNFT, setSelectedNFT] = useState();
  const [nfts, setNfts] = useState(data.nfts);
  console.log("checking nfts ", data.nfts)


  useEffect(() => {
    (async () => {
      const address = await connect()
      if (address) {
        getNfts(address)
      }
    })()
  }, [])


  //i = index of nft
  //setshowModal(!showModal) opposite of what is shows
  const toggleModal = (i) => {
    if (i >= 0) {
      setSelectedNFT(nfts[i])
    }
    setshowModal(!showModal)
  }


  const getNfts = async (address) => {
    //address = metamask
    const AMOY_RPC_URL = "https://polygon-amoy.g.alchemy.com/v2/UKIgR-bwQkP6fjFw5xMHhb-nCDER5BQZ"
    const ethersProvider = new ethers.JsonRpcProvider(AMOY_RPC_URL)

    let abi = [
      "function symbol() public view returns (string memory)",
      "function tokenCount() public view returns(uint256)",
      "function uri(uint256 _tokenId) public view returns (string memory)",
      "function balanceOfBatch(address[] accounts, uint256[] ids) public view returns(uint256[])"
    ]

    let nftCollection = new ethers.Contract(
      "0x02dfbe332ad4913d3635869CA2c118C7571De0e0",
      abi,
      ethersProvider
    )
    //pulling data from blockchain
    //info i card: number of nft, symbol, id, amount
    //ids = filling address 8 times nft starting form 1!
    //balanceOfBatch = how many minted originally
    //accounts getting the amount of nft then fill address 8x too
    //(_, i) => i + 1) iterate
    let numberOfNfts = Number(await nftCollection.tokenCount());
    console.log("numberofnfts", numberOfNfts);
    let collectionSymbol = await nftCollection.symbol();
    console.log("collectionsymbol", collectionSymbol)
    let accounts = Array(numberOfNfts).fill(address)
    console.log("accounts", accounts)
    let ids = Array.from({ length: numberOfNfts }, (_, i) => i + 1);
    console.log("ids", ids)
    let copies = await nftCollection.balanceOfBatch(accounts, ids);
    console.log("copies", copies)

    //get nft ,iterte and collects data from ipfs
    let tempArray = []
    let baseUrl = ""

    for (let i = 1; i <= numberOfNfts; i++) {
      if (i === 1) {
        let tokenURI = await nftCollection.uri(i)
        baseUrl = tokenURI.replace(/\d+.json/, "") //reg expr. taking out the /1.json and replacin git with blank.
        let metadata = await getMetadataFromIpfs(tokenURI)
        //this coming form blockchain
        metadata.symbol = collectionSymbol
        //rem nfts start with 1 thats why -1 setup
        metadata.copies = copies[i - 1]
        tempArray.push(metadata)
        console.log(`Token URI for token ${i}: ${tokenURI}`);
        console.log(`Base URL constructed: ${baseUrl}`);
      } else {
        let metadata = await getMetadataFromIpfs(baseUrl + `${i}.json`)
        metadata.symbol = collectionSymbol
        //rem nfts start with 1 thats why -1 setup
        metadata.copies = copies[i - 1]
        tempArray.push(metadata)
      }
    }
    setNfts(tempArray)
  }

  return (
    <div>
      {
        <Container>
          <Title>SeaGuardians Collection</Title>
          <Subtitle>The Sea Series</Subtitle>
          <Grid>
            {
              nfts.map((nft, i) => (
                <NftCard key={i} $nft={nft} onClick={() => toggleModal(i)}>
                  <NftPhoto key={i} image={nft && nft?.image}
                   />
                  <div style={{ margin: 2, padding: 3 }}>
                    <NftCollectiontext>{nft && nft.symbol}</NftCollectiontext>
                    <NftName>{nft && nft.name}</NftName>
                    <NftName style={{ float: 'right', paddingLeft: 10 }}>{`x${nft && nft.copies}`}</NftName>
                  </div>
                </NftCard>
              ))
            }
          </Grid>
        </Container>
      }
      {
        showModal && <NFTModal nft={selectedNFT} toggleModal={toggleModal} />
      }
    </div>
  )
}


export { NftPhoto };