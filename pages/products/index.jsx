import React, { useEffect, useState } from 'react';
import Layout from '../../components/layout/Layout'
import { Title } from '../../components/ui/styles/Utils';
import ListProducts from '../../components/list/ListProducts';

import useProducts from '../../hooks/useProducts'

import { useRouter } from 'next/router'

const Home = () => {
  const router = useRouter()
  const { query: { q }} = router
  const { products } = useProducts('createdDate')
  const [getProducts, setGetProducts] = useState([])

  useEffect(() => {
    if (!!q && products.length) {
      const productsFiltered = products.filter(product => {
        return (
          product.product_name.toLowerCase().includes(q.toLowerCase()) ||
          product.description.toLowerCase().includes(q.toLowerCase())
        )
      })

      setGetProducts(productsFiltered)
    }else{
      setGetProducts(products)
    }
  }, [q, products])

  return ( 
    <Layout>
      <Title>Products</Title>
      <ListProducts products={getProducts}/>
    </Layout> 
  );
}
 
export default Home;
