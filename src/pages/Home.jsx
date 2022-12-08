import Topbar from "../components/Topbar"
import Navbar from "../components/Navbar"
import Slider from "../components/Slider"
import Productslider from "../components/Productslider"
import Center from "../components/Center"
import Creditcards from "../components/Creditcards"  
import Blogs from "../components/Blogs"
import Footer from "../components/Footer"

import styled from "styled-components"

const Container = styled.div`
    padding-top:0px;
    margin-top:0px;
`;


const Home = () => {
  
  return(
      <Container>
        <Topbar />
        <Navbar />
        <Slider />        
        <Center />
        <Creditcards />
        <Blogs />
        <Footer />
      </Container>
     
  )
}

export default Home;