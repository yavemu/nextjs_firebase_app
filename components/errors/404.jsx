import React from 'react'

const Error404 = ({customMessage=''}) => {
    let errorMessage = 'Error 404: page no found.'
    if (!!customMessage) {
        errorMessage = customMessage
    }

    return ( 
    <h1>{errorMessage}</h1>
    );
}
 
export default Error404;