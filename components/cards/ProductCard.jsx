import React from 'react'
import styled from '@emotion/styled'
import formatDistanceToNow from 'date-fns/formatDistanceToNow'
import Link from 'next/link'

const Product = styled.li`
    padding: 4rem;
    display: flex;
    justify-content:  space-between;
    align-items: center;
    border-bottom: 1px solid #e1e1e1;
    background-color: #ffffff;
`;
const Description = styled.div`
    flex: 0 1 600px;
    display: flex;
    flex-direction: column;
`;

const Title = styled.a`
    font-size: 2rem;
    font-weight: bold;
    margin: 0;
    :hover {
        cursor: pointer;
    }
`;

const DescriptionText = styled.p`
    font-size: 1.6rem;
    margin: 0;
    color: #888;
`

const Comments = styled.div`
    margin-top: 2rem;
    display: flex;
    align-items: center;
    div {
        display: flex;
        align-items: center;
        border: 1px solid #e1e1e1;
        padding: .3rem 1rem;
        margin-right: 2rem;
    }
    img {
        width: 2rem;
        margin-right: 2rem;
    }
    p {
        font-size: 1.6rem;
        margin-right: 1rem;
        font-weight: 700;
        white-space: nowrap;
        &:last-of-type {
            margin: 0;
        }
    }
`;

const Image = styled.img`
    width: 200px;
`;

const Votes = styled.div`
    flex: 0 0 auto;
    text-align: center; 
    border: 1px solid #e1e1e1;
    padding: 1rem 3rem;
    div {
        font-size: 2rem;
    }
    p {
        margin: 0;
        font-size: 2rem;
        font-weight: 700;
    }
`;


const ProductCard = ({product}) => {

const {id,product_name,business_name,image_url,url,description,votes, comments, createdDate, createdBy} = product
    return ( 
        <Product>
            <Image src={image_url}/>
            <Description>
                <Link href='/products/[id]' as={`/products/${id}`}>
                    <Title>{product_name}</Title>
                </Link>
                <DescriptionText>{description}</DescriptionText>

                <Comments>
                    <div>
                        <img src='/img/comment.png' width='20px'/>
                        <p>{`${comments.length} Comments`}</p>
                    </div>
                </Comments>
                <p>Publicated at: { formatDistanceToNow( new Date(createdDate), {} )} - by {createdBy.author}</p>
            </Description>
            <Votes>
                <div> &#9650; </div>
                <p>{votes}</p>
            </Votes>
        </Product> 
    );
}
 
export default ProductCard;