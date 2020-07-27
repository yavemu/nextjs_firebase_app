import React, { useState, useEffect, useContext} from 'react';
import Layout from '../../components/layout/Layout'
import { FirebaseContext } from '../../firebase'
import { Title } from '../../components/ui/styles/Utils';
import ListProducts from '../../components/list/ListProducts';

const Products = () => {
  const [products, setProducts] = useState([])
  const { firebase } = useContext(FirebaseContext)

  const handleSnapshot = (snapshot) => {
    const products = snapshot.docs.map(doc => {
      return {
        id: doc.id,
        ...doc.data()
      }
    })

    setProducts(products);
  }

  const getProducts = () => {
    firebase.db.collection('products').orderBy('createdDate','desc').onSnapshot(handleSnapshot)
  }

  useEffect(() => {
    getProducts()
  }, [])

  return ( 
    <Layout>
      <Title>Products</Title>
      <ListProducts products={products}/>
    </Layout> 
  );
}
 
export default Products;
