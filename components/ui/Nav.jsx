import React from 'react'
import Link from 'next/link';
import { css } from '@emotion/core'

import Button from './styles/Button'

const urlList = [
    {
        "url": "/",
        "name": "Home"
    },
    {
        "url": "/products",
        "name": "Products"
    },
    {
        "url": "/products/new",
        "name": "New Product"
    },
    {
        "url": "/products/popular",
        "name": "Popular Products"
    }
]

const Nav = () => {
    return ( 
    <nav css={css`
        display: flex;
    `}>
        {urlList.map((data) => (
            <Link href={data.url}>
                <Button>{data.name}</Button>
            </Link>
        ))}
    </nav> );
}
 
export default Nav;