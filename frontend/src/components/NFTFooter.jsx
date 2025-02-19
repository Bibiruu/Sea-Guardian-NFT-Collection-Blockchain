import React from 'react'
import {
    FooterGrid,
    FooterSection,
    SocialIcons,
    SocialLinks,
    Paragraph
} from "../styles/NFTFooter.styles"
import { FaGithub, FaLinkedin } from "react-icons/fa6";

export const NFTFooter = () => {
    return (
        <FooterGrid>
            <FooterSection>
                <SocialIcons>
                    <SocialLinks href="https://www.linkedin.com/in/maria-so-bbb471215/" target='blank' rel="noopener noreferrer">
                        <FaLinkedin size={25}></FaLinkedin>
                        LinkedIn
                    </SocialLinks>
                    <SocialLinks href="https://github.com/Bibiruu/Sea-Guardian-NFT-Collection-Blockchain" target='blank' rel="noopener noreferrer">
                        <FaGithub size={25}></FaGithub>
                        Github
                    </SocialLinks>
                </SocialIcons>
                <Paragraph>
                    <p>Created by Maria So</p>
                    <p>🚀 Lets find out how I can collaborate with you! 🚀</p>
                </Paragraph>
            </FooterSection>
        </FooterGrid>
    )
}
