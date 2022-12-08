import styled from "styled-components"


const Container = styled.div`
  height:32px;  
  background-color:#f4f4f4;
  color:#bdbdbd;
  font-family: BentonSansBBVA-Medium,sans-serif;
  
  
`;
const InfoContainer = styled.div`
  display:flex;
  justify-content:flex-end;
  align-items:center;  
  padding-right:200px;
`;

const Topbarborder =styled.div`
  width:1px;
  height:20px;
  background:#bdbdbd;
  margin-left:10.5px;
  margin-right:10.5px;
`;
  
const Branch = styled.span`
  align-items:center;
  margin:5px;
  cursor:pointer;
`;
const Product = styled.span`
  margin:5px;
  cursor:pointer;
`;
const Language = styled.span`
  margin:5px;
  cursor:pointer;
`;


const Topbar = () => {
  
  return(

   <Container>
     <InfoContainer>
       <Branch>Şube ve ATM'ler </Branch>
       <Topbarborder></Topbarborder>
       <Product>Ürün ve Hizmet Ücretleri</Product>
       <Topbarborder></Topbarborder>
       <Language>EN</Language>
       
     </InfoContainer>
   </Container>    
  )
}

export default Topbar;