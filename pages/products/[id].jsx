import React from 'react'
import { useRouter } from 'next/router' 
import Layout from '../../components/layout/Layout'

const GetProduct = () => {
    const routerData = useRouter()
    const id = routerData.query.id

    return ( 
        <Layout>
            <h1>This is the productID: {id}</h1>
        </Layout>
     );
}
 
export default GetProduct;