import styled from "styled-components"
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import sliderdata from "../sliderdata";
import {useState} from "react"




const Container = styled.div`
  width:100%;
  height:85vh;
  display:flex;  
  position:relative;
  margin-top:20px;
  overflow:hidden;
`;

const Arrow = styled.div`
  width:50px;
  height:50px;
  background-color: #fff7f7;
  border-radius:50%;
  display:flex;
  align-items:center;
  justify-content:center;
  position:absolute;
  top:0;
  bottom:0;
  left: ${props => props.direction === "left" && "10px"};
  right: ${props => props.direction === "right" && "10px"};
  margin:auto;
  cursor:pointer;
  opacity:0.5;  
`;

const Wrapper = styled.div`
  height:100%;
  transition: all 1.5s ease;  
  transform: translateX (${(props) => props.slideIndex * -100}vw);
`;

const Slide = styled.div`
    width:100vw;
  height:100vh;
  display:flex;
  align-items:center;  
`;

const ImgContainer = styled.div`
  height:100%;
`;

const Image = styled.img`
  height:70%; 
`;




const Slider = () => {

  const [slideIndex , setSlideIndex] = useState(0);
  const handleClick = (direction) => {
    if(direction === "left"){
        setSlideIndex( slideIndex > 0 ? slideIndex-1 : 4); 
    }else{
      setSlideIndex( slideIndex < 4 ? slideIndex+1 : 0);
    }    
  };

  return (
    <Container>
      <Arrow direction="left" onClick={()=>handleClick("left")} >
        <ArrowLeftIcon />
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
        {sliderdata.map( (item) =>(
         <Slide key={item.id}>  
        <ImgContainer>
          <Image src={item.img}  />
        </ImgContainer>
        </Slide>
        ))}    
      </Wrapper>
      <Arrow direction="right" onClick={()=>handleClick("right")} >
        <ArrowRightIcon />
      </Arrow>
    </Container>
  )
}

export default Slider;