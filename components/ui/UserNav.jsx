import React, { Fragment, useContext} from 'react'
import Link from 'next/link';
import Button from './styles/Button'
import { css } from '@emotion/core'
import { FirebaseContext } from '../../firebase'

const UserNav = () => {

    const { userAuth, firebase } = useContext(FirebaseContext)

    return ( 
        <div css={css`
                display: flex;
                align-items: center;
            `
        }>
            {!!userAuth && 
                <Fragment>
                    <p>Welcome: {userAuth.displayName}</p>
                    <Button btnSecondary='true' onClick={() => firebase.logout()} >Logout</Button>
                </Fragment>
            }
            {!userAuth && 
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