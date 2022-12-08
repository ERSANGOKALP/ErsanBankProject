import styled from "styled-components"
import PublicIcon from '@mui/icons-material/Public';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';


const Container = styled.div`
  display:flex;
  height:45vh;
  background: #062146;
  
`;

const LeftContainer = styled.div`
  display:flex;
  flex-direction:column;
  width:70%;
  margin-left:13vw;
`;

const Image = styled.img`
width:20%;
height:25%;
margin-top:55px;

`;

const InfoContainer = styled.div`
  margin-top:20px;
`;

const Info = styled.a`
  margin-right:10px;
  margin-top:20px;
  color: #49a5e6;
  line-height:24px;
`;

const Copyright = styled.span`
  color: #fff;
  opacity: .6;
  margin-top:40px;
`;

const RightContainer = styled.div`
  display:flex;
  flex-direction:column;
  width:30%;
`;

const SocialContainer = styled.div`
  display:flex;
  margin-top:80px;
`;

const LanguageContainer = styled.div`
  cursor:pointer;

  $:hover{
    color:white;
  }
`;

const Language = styled.span`
   color: #49a5e6;
   margin-left:10px;
`;

const Border = styled.div`
  width:2px;
  height:20px;  
  border:1px solid #49a5e6;
  margin:0px 10px;
`;


const SiteInfo = styled.span`
  display:flex;
  justify-content:flex-end;
  margin-top: 55px;
  margin-right:180px;
  color: #49a5e6;
`;

const RightContainerInfo = styled.span`
  display:flex;
  justify-content:flex-end;
  margin-top:40px;
  margin-right:180px;
  color: white;;
`;


const Footer = () => {

  return (

    <Container>
      <LeftContainer>

        <Image src="https://www.garantibbva.com.tr/content/experience-fragments/public-website/tr/site/footer/master/_jcr_content/root/footercontainer/image.coreimg.svg/1645456951270/logo-footer.svg" />
        <InfoContainer>
          <Info>Kişisel Verilerin Korunması</Info>
          <Info>Gizlilik Politikası</Info>
          <Info>Güvenlik</Info>
          <Info>Müşteri Deneyimi Destek</Info>
          <Info>İletişim</Info>
          <Info>Hakkımızda</Info>
          <Info>Sözleşmeler</Info>
        </InfoContainer>
        <Copyright>Copyright © 2022, T. Garanti Bankası A.Ş</Copyright>
      </LeftContainer>

      <RightContainer>

        <SocialContainer>
          <LanguageContainer>
            <PublicIcon style={{color:"#49a5e6"}}/>
            <Language>EN</Language>
          </LanguageContainer>
          <Border></Border>
          <FacebookIcon style={{marginRight:"10px", color:"#49a5e6"}} />
          <TwitterIcon style={{marginRight:"10px" , color:"#49a5e6"}} />
          <InstagramIcon style={{marginRight:"10px" , color:"#49a5e6"}} />
          <YouTubeIcon style={{marginRight:"10px" , color:"#49a5e6"}} />
          <LinkedInIcon style={{marginRight:"10px" , color:"#49a5e6"}} />
        </SocialContainer>
        <SiteInfo>Site Haritası</SiteInfo>
        <RightContainerInfo>Geleceğin Fırsatları Sizinle</RightContainerInfo>
      </RightContainer>
    </Container>
  )
}

export default Footer;