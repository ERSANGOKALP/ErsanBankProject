import styled from "styled-components"
import VisibilityIcon from '@mui/icons-material/Visibility';
import FastForwardIcon from '@mui/icons-material/FastForward';



const Container = styled.div`
  background: #f4f4f4;
  padding:70px 0;
  display:flex;
  margin:0;
  flex-wrap:wrap;
  position:relative;
`;


const BlogContainer = styled.div`
display:flex;
flex-direction:column;
width:40%;

`;

const Image = styled.img`
  width:42vh;
  height:20vw;
`;

const BlogContainerContent = styled.span`
  display:flex;
  width:20vw;
  padding:0px 20px;
  
`;

const BlogContainerTitle = styled.h3`
  width:20vw;
  margin-top:10px;
  padding:0px 0px 10px 10px;
`;

const BlogContainerExplain = styled.span`
  width:20vw;
  padding:0px 0px 10px 10px;
`;

const ContentAnchorContainer = styled.div`
display: flex;
cursor: pointer;
position:absolute;
align-items:center;
justify-content:center;
margin-top:530px;
margin-left:10px;

`;


const ContentAnchor = styled.a`
text-decoration:none;
color:#004481;
margin-left:5px;
`;


const Blog = ({ item }) => {

  return (


    <Container>



      <BlogContainer>
        
        <Image src={item.img} />       
        <BlogContainerContent> <FastForwardIcon /> {item.content}</BlogContainerContent>
        <BlogContainerTitle>{item.title}</BlogContainerTitle>
        <BlogContainerExplain>{item.explain}</BlogContainerExplain>
        <ContentAnchorContainer>
          <VisibilityIcon />
          <ContentAnchor>İçeriğin Tamamı</ContentAnchor>
        </ContentAnchorContainer>
      </BlogContainer>

    </Container>

  )
}

export default Blog;


