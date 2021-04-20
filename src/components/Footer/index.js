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
                            <FooterLinkTitle>Website Index</FooterLinkTitle>
                            <FooterLink to="/personal-website">Home</FooterLink>
                            <FooterLink to="/personal-website/contact">Contact</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>Media banks</FooterLinkTitle>
                            <FooterLink href="https://www.pexels.com/">Pexels</FooterLink>
                            <FooterLink href="https://www.manypixels.co/gallery">Manypixels</FooterLink>
                            <FooterLink href="https://absurd.design/">Absurd Design</FooterLink>
                            <FooterLink href="https://www.drawkit.io/#browse-now-button">Drawkit</FooterLink>
                            <FooterLink href="https://iradesign.io/">IRA Design</FooterLink>
                            <FooterLink href="https://undraw.co/illustrations">Undraw</FooterLink>
                            <FooterLink href="https://icons8.com/illustrations">Ouch</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                    <FooterLinksWrapper>
                    <FooterLinkItems>
                            <FooterLinkTitle>Universities</FooterLinkTitle>
                            <FooterLink href="https://www.deusto.es/cs/Satellite/deusto/en/university-deusto?cambioidioma=si">University of Deusto</FooterLink>
                            <FooterLink href="https://www.uu.se/en/">University of Uppsala</FooterLink>
                            <FooterLink href="https://www.vu.nl/en/">VU Amsterdam</FooterLink>
                            <FooterLink href="https://www.uva.nl/en">University of Amsterdam</FooterLink>
                            <FooterLink href="https://www.unibo.it/en/homepage">University of Bologna</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>Where to find me</FooterLinkTitle>
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
