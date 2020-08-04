import React, { useContext } from 'react'
import Link from 'next/link';
import { css } from '@emotion/core'

import Button from './styles/Button'
import { FirebaseContext } from '../../firebase'

const urlList = [
    {
        "url": "/",
        "name": "Home",
        "requireAuth": false
    },
    {
        "url": "/products",
        "name": "Products",
        "requireAuth": true
    },
    {
        "url": "/products/new",
        "name": "New Product",
        "requireAuth": true
    },
    {
        "url": "/products/popular",
        "name": "Popular Products",
        "requireAuth": true
    }
]

const Nav = () => {
    const { userAuth } = useContext(FirebaseContext)
    return ( 
        <nav css={css`
            display: flex;
        `}>
            {urlList.map((data, index) => {
                const showMenu = !data.requireAuth ? true : !!data.requireAuth && !!userAuth ? true : false;

                if (!!showMenu) {
                    return (
                        <Link href={data.url} key={index}>
                            <Button>{data.name}</Button>
                        </Link>
                    )
                }
            })}
        </nav> 
    );
}
 
export default Nav;