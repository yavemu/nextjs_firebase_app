import React from 'react'
import { css } from '@emotion/core'

const Error404 = ({customMessage=''}) => {
    let errorMessage = 'Error 404: page no found.'
    if (!!customMessage) {
        errorMessage = customMessage
    }

    return ( 
        <div css={css`
            display: flex;
            flex-direction: row;
            justify-content: center;
        `}>
            <h1>{errorMessage}</h1>
        </div>
    );
}
 
export default Error404;