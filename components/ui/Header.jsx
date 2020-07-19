import React from 'react';
import Nav from './Nav';
import UserNav from './UserNav';
import SearchForm from './SearchForm';

const Header = () => {
    return ( 
        <header>
            <h1>Header!</h1>
            <SearchForm/>
            <Nav/>
            <UserNav/>
        </header>
     );
}
 
export default Header;