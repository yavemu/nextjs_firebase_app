import styled from '@emotion/styled'

const Title = styled.h1`
  color: orange
`

const Paragraph = styled.p`
  color: orangered
`

const Home = () => {
  return ( 
    <div>
      <Title>Welcome!!</Title>
      <Paragraph>This is my default page and it has its own styles</Paragraph>
    </div> 
  );
}
 
export default Home;
