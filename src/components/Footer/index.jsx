import React from 'react'
import {animateScroll as scroll} from 'react-scroll'
import {FaFacebook,FaInstagram,FaYoutube,FaTwitter,FaLinkedin} from 'react-icons/fa'
import {
    FooterContainer,
    FooterWrap,
    FooterLinksContainer,
    FooterLinksWrapper,
    FooterLinkItems,
    FooterLinkTitle,
    FooterLink,
    SocialMedia,
    SocialMediaWrap,
    SocialLogo,
    WebsiteRights,
    SocialIcions,
    SocialIconLink} from './FooterElements'
const Footer = () => {
    const toggleHome = () =>{
        scroll.scrollToTop()
      }
    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                    <FooterLinkItems>
                        <FooterLinkTitle> About us </FooterLinkTitle>
                            <FooterLink to='/signin'>How it works</FooterLink>
                            <FooterLink to='/signin'>Testimonials</FooterLink>
                            <FooterLink to='/signin'>Careers</FooterLink>
                            <FooterLink to='/signin'>Investors</FooterLink>
                            <FooterLink to='/signin'>Terms of Service</FooterLink>   
                        </FooterLinkItems>
                        <FooterLinkItems>
                        <FooterLinkTitle> Contact Us </FooterLinkTitle>
                            <FooterLink to='/signin'>Contact</FooterLink>
                            <FooterLink to='/signin'>Support</FooterLink>
                            <FooterLink to='/signin'>Destinations</FooterLink>
                            <FooterLink to='/signin'>Sponsorships</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                    <FooterLinksWrapper>
                    <FooterLinkItems>
                        <FooterLinkTitle> Videos </FooterLinkTitle>
                            <FooterLink to='/signin'>Submit Video</FooterLink>
                            <FooterLink to='/signin'>Ambassadors</FooterLink>
                            <FooterLink to='/signin'>Agency</FooterLink>
                            <FooterLink to='/signin'>Influencer</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                    <SocialMedia>
                        <SocialMediaWrap>
                        <SocialLogo to='/' onClick={toggleHome} >Logo</SocialLogo>
                        <WebsiteRights>Logo © {new Date().getFullYear()} </WebsiteRights>
                        <SocialIcions>
                            <SocialIconLink href='/' target='_blank' aria-label='Facebook'>
                                <FaFacebook/>
                                </SocialIconLink> 
                                <SocialIconLink href='/' target='_blank' aria-label='Instagram'>
                                <FaInstagram/>
                                </SocialIconLink> 
                                <SocialIconLink href='/' target='_blank' aria-label='Youtube'>
                                <FaYoutube/>
                                </SocialIconLink> 
                                <SocialIconLink href='/' target='_blank' aria-label='Twitter'>
                                <FaTwitter/>
                                </SocialIconLink> 
                                <SocialIconLink href='/' target='_blank' aria-label='Linkedin'>
                                <FaLinkedin/>
                                </SocialIconLink> 
                        </SocialIcions>
                        </SocialMediaWrap>        
                    </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer
