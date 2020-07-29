import React, { useContext } from 'react'
import { css } from '@emotion/core'
import styled from '@emotion/styled'
import formatDistanceToNow from 'date-fns/formatDistanceToNow'

import { FirebaseContext } from '../../firebase'
import NewComment from '../ui/forms/products/NewComment';
import ProductComments from '../list/ProductComments';
import Button from '../ui/styles/Button'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
    margin-top: 5rem;
    width: 80%;
`;

const ProductDeail = styled.div`
    @media (min-width: 768px){
        width: 100%;
        display:grid;
        grid-template-columns: 1fr 1fr;
        column-gap: 2rem;
    }
`

const ProductDetailCard = ({id,product}) => {
    const {product_name,business_name,image_url,url,description,votes, comments, createdDate, createdBy} = product
    const { userAuth } = useContext(FirebaseContext)
    
    return ( 
        <Container>
            <h1>{product_name}</h1>
            <ProductDeail>
                <div>
                    <p>Publicated at: { formatDistanceToNow( new Date(createdDate), {} )} - by {createdBy.author}</p>
                    <img src={image_url}/>
                    <div css={css`
                        display: flex;
                        flex-direction: row;
                        align-items: center;
                    `}>
                        <p>{votes} votes</p>
                        {!!userAuth && <Button widthMiddle={true}> Vote </Button> }
                    </div>
                    <p>{description}</p>
                    {!!userAuth && <NewComment comment=''/> }
                    <ProductComments comments={comments}/>
                </div>
                <aside>
                    <Button
                        target='_blank'
                        href={url}
                        displayBlock={true}
                        noMargin={true}
                    >
                        Visit website
                    </Button>
                </aside>
            </ProductDeail>
        </Container>
    );
}
 
export default ProductDetailCard;