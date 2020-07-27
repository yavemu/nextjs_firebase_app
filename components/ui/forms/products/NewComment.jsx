import React from 'react';
import { css } from '@emotion/core'
import { Form, Field, InputSubmit } from '../../../../components/ui/styles/Form'

const NewComment = ({comment}) => {
    return ( 
        <div>
            <h2>Comments</h2>
            <Form  noValidate css={css`
                margin-left: 0px;
            `}>
                <Field>
                    <input  type="text"
                            id='comment'
                            name='comment' 
                            placeholder='Add your comment'
                            value={comment}
                    />
                </Field>
                <Field>
                    <InputSubmit type="submit" value='Login'/>
                </Field>
            </Form>
        </div>
     );
}
 
export default NewComment;