import React, { useContext, useState } from 'react'
import { useRouter } from 'next/router'
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

const ProductDetailCard = ({id,product, setProduct}) => {
    const {product_name,business_name,image_url,url,description,votes,votingUsers, comments, createdDate, createdBy} = product
    const { firebase, userAuth } = useContext(FirebaseContext)
    const userHaveVoting = !!userAuth && votingUsers.includes(userAuth.uid) ? true : false
    const [comment, setComment] = useState('')
    
    const router = useRouter()
    
    const handleSaveNewComment = async (e) =>{
        e.preventDefault()
        if (!userAuth) {
            return router.push('/login')
        }

        const commentData = {
            comment, 
            createdDate: Date.now(),
            createdBy: {
                author: userAuth.displayName,
                authorId: userAuth.uid
            }
        }

        const newComments = [
            ...comments,
            commentData
        ]

        await firebase.db.collection('products').doc(id).update({
            comments: newComments
        })

        setProduct({
            ...product,
            comments: newComments
        })

        setComment('')


    }

    const handleVote = async () => {
        if (!userAuth) {
            return router.push('/login')
        }

        if(userHaveVoting) return;    
        
        const newTotalVotes = votes+1
        const newVotingUsers = [...votingUsers, userAuth.uid]

        await firebase.db.collection('products').doc(id).update({
            votes: newTotalVotes,
            votingUsers: newVotingUsers
        })

        setProduct({
            ...product,
            votes: newTotalVotes
        })
    }
    
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
                        {!!userAuth && !userHaveVoting &&
                            <Button 
                                widthMiddle={true}
                                onClick={handleVote}
                            > 
                                Vote 
                            </Button> 
                        }
                    </div>
                    <p>{description}</p>
                    {!!userAuth && <NewComment comment={comment} handleChange={setComment} handleSubmit={handleSaveNewComment}/> }
                    <ProductComments productAuthorId={createdBy.authorId} comments={comments}/>
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