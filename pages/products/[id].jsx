import React, { useState, useEffect, useContext  } from 'react'
import { useRouter } from 'next/router' 

import Layout from '../../components/layout/Layout'
import { FirebaseContext } from '../../firebase'
import Error404 from '../../components/errors/404'
import Spinner from '../../components/loading/Spinner'
import ProductDetailCard from '../../components/cards/ProductDeailCard'
 
const GetProduct = () => {
    const [product, setProduct] = useState({})
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(true)

    const routerData = useRouter()
    const {firebase} = useContext(FirebaseContext)
    const id = routerData.query.id

    const getProduct = async () =>{
        if (!!id) {
            const getProductQuery = await firebase.db.collection('products').doc(id).get()
            const productData = await getProductQuery.data();

            if (!!productData) {
                setProduct(productData)
            }else{
                setError(true)
            }

            setLoading(false)
        }
    }

    useEffect(() => {
        getProduct()
    }, [id, product])

    if (!!loading) {
        return <Spinner/>
    }

    return ( 
        <Layout>
            {!!error && <Error404 customMessage='Product does not exist' />}
            {!error && <ProductDetailCard id={id} product={product} setProduct={setProduct}/>}
        </Layout>
     );
}
 
export default GetProduct;