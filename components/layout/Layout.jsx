import React, { Fragment } from 'react'
import Header from '../ui/Header'
import Footer from '../ui/Footer'
import { Global, css } from '@emotion/core'
import Head from 'next/head'

const Layout = ({children}) => {
    return ( 
        <Fragment>
            <Global
                styles={css`
                    :root {
                        --primary-background-color: #FFF;
                        --secondary-background-color: #6F6F6F;
                        --header-background-color: #e1e1e1;
                        --primary-bottom-color: #DA552F;
                        --secondary-bottom-color: #db143c;
                        --primary-border-color: #D1D1D1;
                        --secondary-border-color: #3D3D3D;
                        --logo-color: #f0977a;
                        --primary-font-color: #3D3D3D;
                        --secondary-font-color: #6F6F6F;
                        --error-background-color: #a52a2a;

                    }

                    html {
                        font-size: 62.5%;
                        box-sizing: border-box;
                    }

                    *, *:before, *:after {
                        box-sizing: inherit;
                    }

                    body {
                        font-size: 1.6rem;
                        line-height: 1.5;
                        background-color: var(--primary-background-color);
                        color: var(--primary-font-color);
                        font-family: 'Indie Flower', cursive;
                        font-weight: 700;
                    }

                    h1, h2, h3 {
                        margin: 0 0 2rem 0;
                        line-height: 1.5;
                    }

                    h1, h2 {
                        font-family: 'Roboto', sans-serif;
                        font-weight: 700;
                    }
                    
                    h3 {
                        font-family: 'Indie Flower', cursive;
                        font-weight: 700;
                    }

                    ul {
                        list-style: none;
                        margin: 0;
                        padding: 0;
                    }

                    a {
                        text-decoration: none;
                    }

                    button {
                        background-color: var(--primary-bottom-color);
                    }

                    a, button {
                        cursor: pointer
                    }

                    img {
                        max-width: 100%;
                    }
                `}
            />
            <Head>
                <html lang='en'/>
                <title>Project App with NextJS and Firebase</title>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css" integrity="sha512-NhSC1YmyruXifcj/KFRWoC561YpHpc5Jtzgvbuzx5VozKpWvQ+4nXhPdFgmx8xqexRcpAglTj9sIBWINXa8x5w==" crossOrigin="anonymous" />
                <link href="https://fonts.googleapis.com/css2?family=Indie+Flower&family=Roboto:ital,wght@0,700;1,400&display=swap" rel="stylesheet" />
                <link href='/css/app.css' rel='stylesheet' />
            </Head>
            <Header/>
            <main>
                {children}
            </main>
            <Footer/>
        </Fragment>
     );
}
 
export default Layout;