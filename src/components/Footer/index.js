import React from 'react'
import {
    FooterContainer,
    FooterLinksWrapper,
    FooterLink,
    FooterLinkItems,
    FooterWrapper,
    FooterLinkTitle,
    FooterLinksContainer,
    FooterExternalLink
} from './FooterElements'



const Footer = () => {


    return (
        <FooterContainer>
            <FooterWrapper>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>Link Section 1</FooterLinkTitle>
                            <FooterLink to="/personal-website/contact">Link1</FooterLink>
                            <FooterLink to="/personal-website/contact">LInk2</FooterLink>
                            <FooterLink to="/personal-website/contact">LInk3</FooterLink>
                            <FooterLink to="/personal-website/contact">Link4</FooterLink>
                            <FooterLink to="/personal-website/contact">Link5</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>Link Section 2</FooterLinkTitle>
                            <FooterLink to="/personal-website/contact">Link1</FooterLink>
                            <FooterLink to="/personal-website/contact">LInk2</FooterLink>
                            <FooterLink to="/personal-website/contact">LInk3</FooterLink>
                            <FooterLink to="/personal-website/contact">Link4</FooterLink>
                            <FooterLink to="/personal-website/contact">Link5</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>Link Section 3</FooterLinkTitle>
                            <FooterLink to="/personal-website/contact">Link1</FooterLink>
                            <FooterLink to="/personal-website/contact">LInk2</FooterLink>
                            <FooterLink to="/personal-website/contact">LInk3</FooterLink>
                            <FooterLink to="/personal-website/contact">Link4</FooterLink>
                            <FooterLink to="/personal-website/contact">Link5</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>Link Section 4</FooterLinkTitle>
                            <FooterExternalLink href="https://github.com/carlosperales95">Ghub</FooterExternalLink>
                            <FooterExternalLink href="https://www.mixcloud.com/perlballota/">Mixcloud</FooterExternalLink>
                            <FooterExternalLink href="https://www.instagram.com/cp.raw/">Insta</FooterExternalLink>
                            <FooterExternalLink href=" https://www.eyeem.com/u/cpraw">Photos on sale</FooterExternalLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
            </FooterWrapper>   
        </FooterContainer>
    )
}

export default Footer
