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
const axios = require('axios');

const getMetadataFromIpfs = async (tokenURI) => {
  let metadata = await axios.get(tokenURI)
  console.log("metadata", metadata)
  return metadata.data
}

const NFTCard = ({ props }) => {
  const [showModal, setshowModal] = useState(false);
  const [selectedNFT, setSelectedNFT] = useState();
  const [nfts, setNfts] = useState(data.nfts);
  console.log("checkinf nfts ", data.nfts)
  console.log(data.nfts.image)

  useEffect(() => {
    (
      async () => {
        const address = await connect();
        if (address) {
          getNfts(address);
        }
      }
    )()
  }, [])


  const getNfts = async (address) => {
    //address = metamask
    const amoyRPC = "https://polygon-amoy.g.alchemy.com/v2/UKIgR-bwQkP6fjFw5xMHhb-nCDER5BQZ"
    const ethersProvider = new ethers.JsonRpcProvider(amoyRPC)

    let abi = [
      "function symbol() public view returns (string memory)",
      "function tokenCount() public view returns(uint265)",
      "function uri(uint256 _tokenId) public return(string memory)",
      "function balanceOfBatch(address[] accounts, uint256[] ids) public view returns(uint256[])"
    ]

    let nftCollection = new ethers.Contract(
      process.env.DEPLOYMENT_ADDRESS,
      abi,
      ethersProvider
    )
    //pulling data from blockchain
    //info i card: number of nft, symbol, id, amount
    //ids = filling address 8 times nft starting form 1!
    //balanceOfBatch = how many minted originally
    let numberOfNfts = (await nftCollection.tokenCount()).toNumber()
    console.log("numberofnfts",numberOfNfts)
    let collectionSymbol = await nftCollection.symbol()
    console.log("collectionsymbol", collectionSymbol)
    let accounts = Array(numberOfNfts).fill(address)
    console.log("accounts", accounts)
    let ids = Array.from({ length: numberOfNfts }, (_, i) => i + 1)
    console.log("ids", ids)
    let copies = await nftCollection.balanceOfBatch(accounts, ids)
    console.log("copies", copies)

    //get nft ,iterte and collects data from ipfs
    //regular expression for takng out the /1.json and replacingit with blank. 
    let tempArray = []
    let baseUrl = ""

    for (let i = 1; i <= numberOfNfts; i++) {
      if (i === 1) {
        let tokenURI = await nftCollection.uri(i)
        baseUrl = tokenURI.replace(/\d+.json/, "")
        let metadata = await getMetadataFromIpfs(tokenURI)
        metadata.symbol = collectionSymbol
        //rem nfts start with 1 thats why -1 setup
        metadata.copies = copies[i - 1]
        tempArray.push(metadata)
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

  //______________________________________________________________

  //i = index of nft
  //setshowModal(!showModal) opposite of what is shows
  const toggleModal = (i) => {
    if (i >= 0) {
      setSelectedNFT(nfts[i])
    }
    setshowModal(!showModal)
  }

  //nft && nft.name = ternary check: only populate when nft loaded
  return (
    <div>
      {
        <Container>
          <Title>SeaGuardians Collection</Title>
          <Subtitle>The Sea Series</Subtitle>
          <Grid>
            {
              data.nfts.map((nft, i) => (
                <NftCard key={i} nft={nft} onClick={() => toggleModal(i)}>
                  <NftPhoto style={{ backgroundImage: `url(${nft && nft.image})` }} />
                  <div style={{ margin: 5 }}>
                    <NftCollectiontext>{nft && nft.symbol}</NftCollectiontext>
                    <NftName>{nft && nft.name}</NftName>
                    <NftName style={{ float: 'right' }}>{`x${nft && nft.copies}`}</NftName>
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


export { NFTCard, NftPhoto }