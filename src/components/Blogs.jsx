import styled from "styled-components"
import blogs from "../blogs"
import Blog from "./Blog"

const Container = styled.div`  
  background: #f4f4f4;
  display:flex;
  flex-direction:column;
   justify-content:center;
  align-items:center;
  margin:10px 290px;
`;

const Title = styled.h2`
  justify-content:center;
  align-items:center;
  margin-top:20px;
`;

const BlogItems = styled.div`
  display:flex;
`;



const Blogs = () => {

  return (
    
    <Container>
      <Title>Garanti BBVA Blog</Title>
      <BlogItems>
      {blogs.map( item => (
      <Blog item={item} key={item.id} />
      ))}
      </BlogItems>
    </Container>
    
  )
}  


export default Blogs;