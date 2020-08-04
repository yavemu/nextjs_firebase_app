import React from 'react';
import Layout from '../../components/layout/Layout'
import { Title } from '../../components/ui/styles/Utils';
import ListProducts from '../../components/list/ListProducts';

import useProducts from '../../hooks/useProducts'

const PopularProducts = () => {
  const { products } = useProducts('votes')
  return ( 
    <Layout>
      <Title>Popular Products</Title>
      <ListProducts products={products}/>
    </Layout> 
  );
}
 
export default PopularProducts;
