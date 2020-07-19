import React, { Fragment } from 'react'

const Layout = ({children}) => {
    return ( 
        <Fragment>
            <h1>Header</h1>
            <main>
                {children}
            </main>
            <footer>
                Footer
            </footer>
        </Fragment>
     );
}
 
export default Layout;