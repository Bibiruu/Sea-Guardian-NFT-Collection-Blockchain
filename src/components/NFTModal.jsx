import React from 'react'
import {
    Modal,
    Sectiontext,
    Paragraph,
    ModalTitle,
    ModalGrid,
    ModalContent
} from '../styles/NFTModal.styles';
import { NftPhoto } from '../styles/NFTCard.styles';

export const NFTModal = ({ nft, nfts }) => {
    //nftcard.col 1 ,  div col2
    return (
        <>
            <Modal>
                <ModalContent>
                    <ModalGrid>
                        <NftPhoto style={{ backgroundImage: `url(${nft & nft.image})`, height: 400, width: 400 }} />
                        <div>
                            <ModalTitle>{nft.name}</ModalTitle>
                            <Paragraph>{`You own ${nft.copies} copies`}</Paragraph>
                            <Sectiontext> Description </Sectiontext>
                            <Paragraph style={{ width: 400 }}>{nft.description}</Paragraph>
                            <Sectiontext> Attributes </Sectiontext>
                        </div>
                    </ModalGrid>
                </ModalContent>
            </Modal>
        </>
    )
}
