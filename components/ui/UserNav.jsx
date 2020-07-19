import React from 'react'
import Link from 'next/link';

const UserNav = () => {
    return ( 
        <div>
            <p>Welcome: Guest</p>
            <button type='button'>Logout</button>
            <Link href='/login'>
                <a>Login</a>
            </Link>
            <Link href='/signup'>
                <a>Signup</a>
            </Link>
        </div>
    )
    
}
 
export default UserNav;