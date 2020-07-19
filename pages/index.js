import styled from '@emotion/styled'
import Layout from '../components/layout/Layout'

const Title = styled.h1`
  color: orange
`

const Paragraph = styled.p`
  color: orangered
`

const Home = () => {
  return ( 
    <Layout>
      <Title>Welcome!!</Title>
      <Paragraph>This is my default page and it has its own styles</Paragraph>
    </Layout> 
  );
}
 
export default Home;
