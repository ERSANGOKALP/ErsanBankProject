import styled from "styled-components"
import NextPlanRoundedIcon from '@mui/icons-material/NextPlanRounded';
import ShutterSpeedRoundedIcon from '@mui/icons-material/ShutterSpeedRounded';


const Container = styled.div`
    display:flex;
    flex-direction:column;
    width:100vw;
    height:90vh;
    background: #f4f4f4;
    margin-top:0px;;
    margin-bottom:30px;
`;

const TopContainer = styled.div`
margin-top:50px;
display:flex;
align-items:center;
justify-content:center;

`;

const Title = styled.h2`
  color: #121212;
  font-weight:500;
  opacity:0.8;
  letter-spacing:1px;
  font-size:40px;
`;

const BottomContainer = styled.div`
  display:flex;
  margin-top:30px;
  margin-left:20vw
`;

const LeftSide = styled.div`
  margin-right:20px;
`;

const Image = styled.img`
  width:30vw;
  height:66vh;
 
`;

const RightSide = styled.div``;

const TopCon = styled.div`
display:flex;
background-color:white;
align-items:center;
justify-content:center;
width:35vw;
height:33vh;
`;

const TopConImage = styled.div`
  margin:10px;
`;

const TopConContainer = styled.div`
  display:flex;
  flex-direction:column;
  margin:10px;  
`;

const TopConContainerTitle = styled.h6`
  
`;

const TopConContainerInfo = styled.span``;

const TopConContainerDetail = styled.a`
  text-decoration:none;
  color: #1464a5;
  background-color:transparent;
  cursor:pointer;
  width:100px;
  font-family:sans-serif;
`;

const BottomCon = styled.div`
display:flex;
background-color:white;
align-items:center;
justify-content:center;
width:35vw;
height:33vh;
`;

const BottomConImage = styled.div`
  margin:10px;
`;

const BottomConContainer = styled.div`
  display:flex;
  flex-direction:column;
  margin:10px;  
`;

const BottomConContainerTitle = styled.h6``;

const BottomConContainerInfo = styled.span``;

const BottomConContainerDetail = styled.a`
   text-decoration:none;
   color: #1464a5;
  background-color:transparent;
  cursor:pointer;
  width:100px;
  font-family:sans-serif;
`;




const Center = () => {
  
  return(

   <Container>     
      <TopContainer>
        <Title>Finansal Sağlık</Title>
     </TopContainer>
     <BottomContainer>       
       <LeftSide>
       
         <Image src="https://images.pexels.com/photos/163192/iphone-laptop-macbook-pen-163192.jpeg?auto=compress&cs=tinysrgb&w=600"/>
       </LeftSide>       
       <RightSide>
         <TopCon>
           <TopConImage>
            <NextPlanRoundedIcon style={{color:"#6495ED",fontSize:"70px"}}/> 
           </TopConImage>
           <TopConContainer>
            <TopConContainerTitle>Durumum Alanı</TopConContainerTitle>
             <TopConContainerInfo>Garanti BBVA Mobil'de yer alan Durumum alanında, müşterilerimizin finansallarının farkında olup, bütçelerini daha kolay yönetebilecekleri özellikler yer almaktadır.</TopConContainerInfo>
             <TopConContainerDetail>Detaylı Bilgi</TopConContainerDetail>
           </TopConContainer>
         </TopCon>
         <BottomCon>
            <BottomConImage>
              <ShutterSpeedRoundedIcon style={{color:"#6495ED",fontSize:"70px"}} />
            </BottomConImage>
            <BottomConContainer>
              <BottomConContainerTitle>Akıllı İşlemler</BottomConContainerTitle>
              <BottomConContainerInfo>Garanti BBVA Mobil Uygulaması’nda finansal işlemlerinizi en hızlı ve kolay şekilde gerçekleştirmek için Akıllı İşlemler’i şimdi keşfedin!</BottomConContainerInfo>
              <BottomConContainerDetail>Detaylı Bilgi</BottomConContainerDetail>
            </BottomConContainer>           
            
         </BottomCon>
       </RightSide>
     </BottomContainer>    
   </Container>    
  )
}

export default Center;