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
                            <FooterExternalLink href="https://www.pexels.com">Pexels</FooterExternalLink>
                            <FooterExternalLink href="https://www.manypixels.co/gallery">Manypixels</FooterExternalLink>
                            <FooterExternalLink href="https://absurd.design/">Absurd Design</FooterExternalLink>
                            <FooterExternalLink href="https://www.drawkit.io/#browse-now-button">Drawkit</FooterExternalLink>
                            <FooterExternalLink href="https://iradesign.io/">IRA Design</FooterExternalLink>
                            <FooterExternalLink href="https://undraw.co/illustrations">Undraw</FooterExternalLink>
                            <FooterExternalLink href="https://icons8.com/illustrations">Ouch</FooterExternalLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                    <FooterLinksWrapper>
                    <FooterLinkItems>
                            <FooterLinkTitle>Universities</FooterLinkTitle>
                            <FooterExternalLink href="https://www.deusto.es/cs/Satellite/deusto/en/university-deusto?cambioidioma=si">University of Deusto</FooterExternalLink>
                            <FooterExternalLink href="https://www.uu.se/en/">University of Uppsala</FooterExternalLink>
                            <FooterExternalLink href="https://www.vu.nl/en/">VU Amsterdam</FooterExternalLink>
                            <FooterExternalLink href="https://www.uva.nl/en">University of Amsterdam</FooterExternalLink>
                            <FooterExternalLink href="https://www.unibo.it/en/homepage">University of Bologna</FooterExternalLink>
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
