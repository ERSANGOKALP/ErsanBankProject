import styled from "styled-components"
import SearchIcon from '@mui/icons-material/Search';

const Container = styled.div`
  height:147px;
  background-color:#fff;
  padding-top:10px;
  
`;

const TopContainer = styled.div`
  margin-left:200px;
  display:flex;
  align-items:center;
`;

const LeftSide = styled.div`
  display:flex;
  align-items:center;
  
`;

const Image = styled.img`
  max-width:210px;
  min-width:210px;
`;

const TopInfoContainer = styled.div`
  display:flex;
  margin:20px;
  font-size:20px;
  font-family: BentonSansBBVA-Medium,sans-serif;
  color: #225a8f
`;

const KendimIcın = styled.span`
  padding:10px;
  cursor:pointer;
`;

const IsımIcın = styled.span`
  padding:10px;
   cursor:pointer;
`;

const RightSide = styled.div`
  display:flex;
  align-items:center;
  justify-content:center;
  margin-left:270px;
`;

const Search = styled.div`
  display:flex;
  align-items:center;
  justify-content:center;
  cursor:pointer;
  line-height: 24px;
`;

const Button = styled.button`
  border:none;
  background-color:#fff;
  color: #004481;
  font-size:15px;
  cursor:pointer;
`;

const NavbarBorder =styled.div`
  width:1px;
  height:30px;
  background:#bdbdbd;
  margin-left:25px;
  margin-right:1px;
`;
const ButtonContainer = styled.div`
  display:flex;
  padding:15px;
`;

const RightSideButton =styled.button`
  margin:15px;
  border:none;
  color: ${ (props) => props.type === "filled" ? "#ffffff" : "#004481"};
  font-size:15px;
  cursor:pointer;
  background-color:${(props) => props.type === "filled" ? "#1464a5":"transparent" };
  padding:10px;
`;


const BottomContainer = styled.div`
   margin-left:200px;
   display:flex;
   align-items:center;
`;

const BottomInfoContainer = styled.div`
  
`;

const BottomInfo = styled.a`
   color: #225a8f;
   margin-right:20px;
   line-height: 24px;
   font-size:18px;
   font-family: BentonSansBBVA-Medium,sans-serif;
   cursor:pointer;
   text-decoration: none;
`;


const Navbar = () => {
  
  return(

   <Container>
     <TopContainer>

       <LeftSide>
         <Image src="https://www.garantibbva.com.tr/content/experience-fragments/public-website/tr/site/header/master/_jcr_content/root/header/headerdesktop/image.coreimg.svg/1664356028506/logo.svg"/>
         <TopInfoContainer>
           <KendimIcın>KENDİM İÇİN</KendimIcın>
           <IsımIcın>İŞİM İÇİN</IsımIcın>
         </TopInfoContainer>
       </LeftSide>
       <RightSide>
          <Search>
            <SearchIcon/>
            <Button>ARAMA YAP</Button>
          </Search>
         <NavbarBorder></NavbarBorder>
         <ButtonContainer>
          <RightSideButton>MÜŞTERİ OL</RightSideButton>
         <RightSideButton type="filled">GİRİŞ YAP</RightSideButton>
         </ButtonContainer>         
       </RightSide>
     </TopContainer>
     
     <BottomContainer>

       <BottomInfoContainer>
          <BottomInfo href="/Mevduat">Mevduat</BottomInfo>
          <BottomInfo href="/Yatırım">Yatırım</BottomInfo>
          <BottomInfo href="/Krediler">Krediler</BottomInfo>
          <BottomInfo href="/Kartlar">Kartlar</BottomInfo>
          <BottomInfo href="DigitalBankacılık">Digital Bankacılık</BottomInfo>
          <BottomInfo href="/SigortaVeEmeklilik">Sigorta ve Emeklilik</BottomInfo>
          <BottomInfo href="/ÖdemelerVeHizmetler">Ödemeler ve Hizmetler</BottomInfo>
          <BottomInfo href="/ÖzelBankacılık">Özel Bankacılık</BottomInfo>
       </BottomInfoContainer>
     </BottomContainer>
   </Container>  
  )
}

export default Navbar;