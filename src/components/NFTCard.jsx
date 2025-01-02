import React from 'react';
import data from '../data/data.json';
import {
  NftName,
  NftCollectiontext,
  NftPhoto,
  NftCard
} from '../styles/NFTCard.styles';

export const NFTCard = ({ nft }) => {

  //nft && nft.name = ternary check: only populate when nft loaded
  //copies: x10
  return (
    <>
      {
        data.nfts.map((nft, i) => (
          <NftCard key={i}>
            <NftPhoto style={{ backgroundImage: `url(${nft && nft.image})` }} />
            <div style={{ margin: 5 }}>
              <NftCollectiontext>{nft && nft.symbol}</NftCollectiontext>
              <NftName>{nft && nft.name}</NftName>
              <NftName style={{ float: 'right' }}>{`x${nft && nft.copies}`}</NftName>
            </div>
          </NftCard>
        ))
      }
    </>
  )
}
