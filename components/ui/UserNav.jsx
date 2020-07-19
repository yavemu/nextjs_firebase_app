import React, { Fragment } from 'react'
import Link from 'next/link';
import Button from './styles/Button'
import { css } from '@emotion/core'

const UserNav = () => {

    const userLogin = true;

    return ( 
        <div css={css`
                display: flex;
                align-items: center;
            `
        }>
            {!!userLogin && 
                <Fragment>
                    <p>Welcome: Guest</p>
                    <Button btnSecondary='true'>Logout</Button>
                </Fragment>
            }
            {!userLogin && 
                <Fragment>
                    <Link href='/login'>
                        <Button btnSecondary='true'>Login</Button>
                    </Link>
                    <Link href='/signup'>
                        <Button>Signup</Button>
                    </Link>
                </Fragment>
            }
        </div>
    )
    
}
 
export default UserNav;