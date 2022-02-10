import styled from 'styled-components';
import twitterIcon from '../../../assets/svgs/twitter_icon.svg';
import facebookIcon from '../../../assets/svgs/facebook_icon.svg';
import instagramIcon from '../../../assets/svgs/instagram_icon.svg';
const FooterWrapper = styled.footer`
      width: 100%;
      text-align: center;
      margin-bottom: 40px;
      p {
        font-size: 1.2rem;
        font-weight: 200;
        color: white;
      }
`
const SocialMediaWrapper = styled.div`
    margin-bottom: 2.5rem;

        img {
          height: 40px;
          width: 40px;
          opacity: 0.6;
        }
  
        a{
          display:inline-block;
          margin-right: 15px;
        }
        

        a:last-child {
          margin-right: 0;
        }
`

const Footer = () => {
  return (

    <FooterWrapper>
      <SocialMediaWrapper>
        <a href="http://www.twitter.com/" target="_blank" rel="noreferrer">
          <img src={twitterIcon} alt="Twitter" />
        </a>
        <a href="http://www.facebook.com/" target="_blank" rel="noreferrer">
          <img src={facebookIcon} alt=" Facebook" />
        </a>
        <a href="http://www.instagram.com/" target="_blank" rel="noreferrer">
          <img src={instagramIcon} alt="instagram" />
        </a>
      </SocialMediaWrapper>
      <p>&copy; Motion 2018. All rights reserved.</p>
    </FooterWrapper>

  )

}

export default Footer