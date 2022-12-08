import styled from "styled-components";
import {creditcards} from "../creditcards";
import Creditcard from "./Creditcard";


const Container = styled.div`
  display:flex;
  justify-content:center;
`;






const Creditcards = () => {
  
  return(

   <Container>
     {creditcards.map(item =>(
     <Creditcard item={item} key={item.id} />
     ))}
   </Container>  
    
  )
}

export default Creditcards;