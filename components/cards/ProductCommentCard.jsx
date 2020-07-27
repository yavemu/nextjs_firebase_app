import React from 'react'
import styled from '@emotion/styled'
import formatDistanceToNow from 'date-fns/formatDistanceToNow'

const ProductCommentCard = ({comment}) => {
    
    const { name, author} = comment

    return ( 
        <li>
            <p>{name}</p>
            <p>Author: {author}</p>
        </li>
    );
}
 
export default ProductCommentCard;