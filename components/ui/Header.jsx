import React from 'react';
import Link from 'next/link';
import styled from '@emotion/styled'
import { css } from '@emotion/core'

import Nav from './Nav';
import UserNav from './UserNav';
import SearchForm from './SearchForm';

const HeaderContainer = styled.div`
    max-width: 1200px;
    width: 95%;
    margin: 0 auto;
    cursor: pointer;

    @media (min-width: 768px){
        display: flex;
        justify-content: space-between;
    }
`;

const Header = () => {
    return ( 
        <header css={css`
            border-bottom: 2px solid var(--header-background-color);
            padding: 1rem 0;
        `}>
            <HeaderContainer>
                <div css={css`
                    display: flex;
                    align-items: flex-end;
                `}>
                    <Link href='/'>
                        <img src="/img/logo.png" alt="Products Logo" css={css`
                            width: 200px;
                        `} />
                    </Link>
                    <SearchForm/>
                    <Nav/>
                </div>
                <div>
                    <UserNav/>
                </div>
            </HeaderContainer>
        </header>
     );
}
 
export default Header;