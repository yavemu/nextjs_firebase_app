import React, { useState } from 'react';
import styled from '@emotion/styled'
import { css } from '@emotion/core'
import Router from 'next/router'

const InputText = styled.input`
    border: 1px solid var(--secondary-background-color);
    padding: 1rem;
    min-width: 300px;
`;

const SearchButton = styled.button`
    height: 4rem;
    width: 4rem;
    display: block;
    background-size: 3.5rem;
    background-image: url('/img/search.png');
    background-repeat: no-repeat;
    position: absolute;
    right: 0rem;
    top: 0px;
    border: 1px solid;
    text-indent: -999999px;
`;

const SearchForm = () => {

    const [searchValue, setSearchValue] = useState('')

    const handleSearchProducts = e => {
        e.preventDefault()

        if (!!searchValue.trim()) {
            Router.push({
                pathname: '/products',
                query: {'q': searchValue.toLowerCase()}
            })
        }
    }

    return ( 
        <form
            onSubmit={handleSearchProducts}
        >
            <div css={css`
                position: relative;
                margin-left: .5rem;
                margin-right: .5rem;
            `}>
                <InputText 
                    type="text" 
                    onChange={e => setSearchValue(e.target.value)} 
                    placeholder='Search products'
                />
                <SearchButton type="submit">Search</SearchButton>
                
            </div>
        </form>
     );
}
 
export default SearchForm;