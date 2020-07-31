import React from 'react'
import styled from '@emotion/styled'
import formatDistanceToNow from 'date-fns/formatDistanceToNow'

const CommentLi = styled.li`
    display: flex;
    flex-direction: column;

    p {
        margin-bottom: 0px;
    }

    small{
        padding-left: 4rem;
    }
`

const ProductCommentCard = ({commentData}) => {
    
    const { comment, createdBy, createdDate} = commentData

    return ( 
        <CommentLi>
            <p>{comment}</p>
            <small>Publicated at: { formatDistanceToNow( new Date(createdDate), {} )} - by {createdBy.author}</small>
        </CommentLi>
    );
}
 
export default ProductCommentCard;