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

export const NFTModal = ({ nft, toggleModal }) => {
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
                            {
                                nft.attributes && nft.attributes.map((attribute, i) => (
                                    <div key={i}>
                                        <div style = {{margin:'10px 0px 5px 0px'}}>
                                            <AttributeText>{attribute.trait_type}</AttributeText>
                                            <AttributeText style={{float:"right"}}>{attribute.value}</AttributeText>

                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </ModalGrid>
                    <CloseButton onClick={toggleModal}>
                        &times;
                    </CloseButton>
                </ModalContent>
            </Modal>
        </>
    )
}
