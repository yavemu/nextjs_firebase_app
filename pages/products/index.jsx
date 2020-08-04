import React from 'react';
import Layout from '../../components/layout/Layout'
import { Title } from '../../components/ui/styles/Utils';
import ListProducts from '../../components/list/ListProducts';

import useProducts from '../../hooks/useProducts'

const Home = () => {
  const { products } = useProducts('createdDate')
  return ( 
    <Layout>
      <Title>Products</Title>
      <ListProducts products={products}/>
    </Layout> 
  );
}
 
export default Home;
