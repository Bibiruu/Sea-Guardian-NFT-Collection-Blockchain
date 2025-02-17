import styled from "styled-components";

export const Sectiontext = styled.h3`
margin: 5px 0 5px 0;
`;

export const Paragraph = styled.p`
margin: 0 0 15px 0;
width: ${(props) => (props.isModal ? "400" : "200")};
`;

export const ModalTitle = styled.h1`
margin: auto;
`;

export const ModalGrid = styled.div`
display: inline-grid;
grid-template-columns: 1fr 1fr;
grid-gap: 40px;
padding: 10px;

//responsive design
@media(max-width: 900px) {
    grid-template-columns: 1fr;
}

@media(max-width: 480px) {
    grid-template-columns: 1fr;
}

@media (max-width: 375px) and (max-height: 730px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 85%; 
}
//white modal card
@media (max-width: 374px) and (min-width: 320px) {
    width: 90%;
  }
`;

export const Modal = styled.div`
position: fixed;
display: flex;
align-items: center;
z-index: 100px; //stays on top of everything else
left: 0;
top: 0;
width: 100%;
height: 100%;
overflow: auto; //enable scroll if needed
background-color: rgba(0,0,0, 0.5);
`;

export const ModalContent = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
position: relative;
width: 900px;
margin: auto;
background-color: white;
border-radius: 20px;
padding: 10px;

//responsive design
@media(max-width: 900px) {
    width: 400px;
    }

@media (max-width: 375px) and (max-height: 730px) {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    width: 89%;
}
`;

export const CloseButton = styled.span`
position: absolute;
right: 0; //right corner 
top: 0;      
padding: 20px 25px 0 0;
font-size: 20px;
font-weight: bold;
cursor: point;
`;

export const AttributeText = styled.h4`
    color:gray;
    margin:0;
    display: inline; //next to each other
`;


