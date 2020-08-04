import React from 'react'
import ProductCommentCard from '../cards/ProductCommentCard';

const ProductComments = ({comments={}, productAuthorId}) => {
    
    if (!comments.length) {
        return <div className="comment-list-container">No comments</div>
    }
    
    return ( 
        <div className="comment-list-container">
            <ul className="comments-container">
                {comments.map((comment, index) => (
                    <ProductCommentCard productAuthorId={productAuthorId} key={index} commentData={comment}/>
                ))}
            </ul>
        </div>
    );
}
 
export default ProductComments;