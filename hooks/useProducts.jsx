import React, { useState, useEffect, useContext} from 'react';
import { FirebaseContext } from '../firebase'

const useProducts = (orderByCondition) => {
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
        firebase.db.collection('products').orderBy(orderByCondition,'desc').onSnapshot(handleSnapshot)
    }

    useEffect(() => {
        getProducts()
    }, [])

    return {
      products
    };
}
 
export default useProducts;
