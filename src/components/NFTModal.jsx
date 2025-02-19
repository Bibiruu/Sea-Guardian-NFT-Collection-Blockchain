import React from 'react'
import {
    Modal,
    Sectiontext,
    Paragraph,
    ModalTitle,
    ModalGrid,
    ModalContent,
    CloseButton,
    AttributeText
} from '../styles/NFTModal.styles';
import { NftPhoto } from '../styles/NFTCard.styles';
import { NFTProgressBar } from './NFTProgressBar';


export const NFTModal = (props, i) => {
    const nft = props.nft;
    //nftcard.col 1 ,  div col2
    //nft?.image = error handling option returning undefined

    return (
        <>
            <Modal>
                <ModalContent>
                    <ModalGrid>
                        <NftPhoto key={i} image={nft.image} isModal={true}/>
                        <div>
                            <ModalTitle>{nft.name}</ModalTitle>
                            <Paragraph>{`You own ${nft.copies} copies`}</Paragraph>
                            <Sectiontext> Description </Sectiontext>
                            <Paragraph>{nft.description}</Paragraph>
                            <Sectiontext> Attributes </Sectiontext>
                            {
                                nft.attributes && nft.attributes.map((attribute, i) => (
                                    <div key={i}>
                                        <div style={{ margin: '10px 0px 5px 0px' }}>
                                            <AttributeText>{attribute.trait_type}</AttributeText>
                                            <AttributeText style={{ float: "right" }}>{attribute.value}</AttributeText>
                                        </div>
                                        <NFTProgressBar percent={attribute.value * 3} />
                                    </div>
                                ))
                            }
                        </div>
                    </ModalGrid>
                    <CloseButton onClick={props.toggleModal}>
                        &times;
                    </CloseButton>
                </ModalContent>
            </Modal>
        </>
    )
}
