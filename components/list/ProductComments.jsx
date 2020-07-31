import React from 'react'
import ProductCommentCard from '../cards/ProductCommentCard';

const ProductComments = ({comments={}}) => {
    
    if (!comments.length) {
        return <div className="comment-list-container">No comments</div>
    }
    
    return ( 
        <div className="comment-list-container">
            <ul className="comments-container">
                {comments.map((comment, index) => (
                    <ProductCommentCard key={index} commentData={comment}/>
                ))}
            </ul>
        </div>
    );
}
 
export default ProductComments;