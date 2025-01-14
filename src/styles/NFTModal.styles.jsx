import styled from "styled-components";

export const Sectiontext = styled.h3`
margin: 5px 0 5px 0;
`;

export const Paragraph = styled.p`
margin: 0 0 15px 0;
`;

export const ModalTitle = styled.h1`
margin: auto;
`;

export const ModalGrid = styled.div`
display: inline-grid;
grid-template-columns: 1fr 1fr;
grid-gap: 40px;
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
position: relative;
width: 900px;
margin: auto;
background-color: white;
border-radius: 20px;
padding: 20px;
`;

export const CloseButton = styled.span`
position: absolute;
right: 0; //right corner 
top: 0;      
padding: 20px 25px 0 0;
font-size: 20px;
font-weight: bold;
cursor: point;
`
export const AttributeText = styled.h4`
    color:gray;
    margin:0;
    display: inline; //next to each other
`
