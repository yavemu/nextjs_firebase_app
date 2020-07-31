import React from 'react';
import { css } from '@emotion/core'
import { Form, Field, InputSubmit } from '../../../../components/ui/styles/Form'

const NewComment = ({comment, handleChange, handleSubmit}) => {
    return ( 
        <div>
            <h2>Comments</h2>
            <Form  
                noValidate 
                onSubmit={handleSubmit}
                css={css`
                    margin-left: 0px;
                `}
            >
                <Field>
                    <input  type="text"
                            id='comment'
                            name='comment' 
                            placeholder='Add your comment'
                            value={comment}
                            onChange={(e) => handleChange(e.target.value)}
                    />
                </Field>
                <Field>
                    <InputSubmit type="submit" value='Add Comment'/>
                </Field>
            </Form>
        </div>
     );
}
 
export default NewComment;