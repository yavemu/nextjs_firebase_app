import React from 'react'
import Link from 'next/link';

const urlList = [
    {
        "url": "/",
        "name": "Home"
    },
    {
        "url": "/about",
        "name": "About"
    }
]

const Nav = () => {
    return ( 
    <nav>
        {urlList.map((data) => (
            <Link href={data.url}>
                <a>{data.name}</a>
            </Link>
        ))}
    </nav> );
}
 
export default Nav;