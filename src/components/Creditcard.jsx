import styled from "styled-components";

import SearchIcon from '@mui/icons-material/Search';

const Container = styled.div`
  margin:10px 5px
  display:flex;
  flex-direction:column;
  
`;

const ImageContainer = styled.div`
display:flex;
margin:10px; 
align-items:center;
justify-content:center;
`;

const Image = styled.img` 
   display:flex;
    width:42vh;
    height:14vw;
`;

const InfoContainer = styled.div`
  display:flex;  
width:320px;
align-items:center;
justify-content:center;
flex-wrap:wrap;
background-color:#EAEAEA;
padding:10px;
margin:10px;
`;

const InfoTitle = styled.h3`
  font-size:26px;
  line-height:32px;
`;

const InfoExplain = styled.span`
  color:#666
`;

const InfoButton = styled.button`
  background-color: #02a5a5;
  color: #fff;
  text-decoration: none;   
  margin-right:10px;
  margin-bottom:7px;
  margin-top:7px;
  padding:7px;
  border-radius:2px;
  border:none
`;

const Search = styled.div`
  padding:10px 0px;
  cursor:pointer;
  align-items:center;
  justify-content:center;
`;


const SearchAnchor = styled.a`
  text-decoration:none;
  font-size:17px;
  color:#1464a5;
`;



const Creditcard = ({item}) => {
  
  return(

   <Container>
    <ImageContainer>
      <Image src={item.img} />      
    </ImageContainer>
     
    <InfoContainer>
    
      <InfoTitle>{item.title}</InfoTitle>
      <InfoExplain> {item.explain} </InfoExplain>
      <InfoButton>BAŞVUR</InfoButton>
      <Search>
        <SearchIcon />
        <SearchAnchor href="">Detaylı Bilgi</SearchAnchor>
      </Search>
    </InfoContainer> 
   </Container>    
  )
}

export default Creditcard;