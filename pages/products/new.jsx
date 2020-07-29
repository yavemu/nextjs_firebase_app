import React, { useState, useContext } from 'react';
import { useRouter } from 'next/router'
import FileUploader from 'react-firebase-file-uploader'

import { Title } from '../../components/ui/styles/Utils'
import { Form, Field, InputSubmit, FieldError } from '../../components/ui/styles/Form'
import Layout from '../../components/layout/Layout'
import useValidation from '../../hooks/useValidation'
import productValidations from '../../validationRules/productValidations'
import { FirebaseContext } from '../../firebase'
import Error404 from '../../components/errors/404';

const INITIAL_STATE = {
  product_name: '',
  business_name: '',
  url: '',
  description: '',
}

const NewProduct = () => {
    const [errors, setErrors] = useState()
    const [imageName, setImageName] = useState()
    const [imageUrl, setImageUrl] = useState('')
    const [uploadingImage, setUploadingImage] = useState(false)
    const [progressImage, setProgressImage] = useState(0)
    const router = useRouter()   
    const { userAuth, firebase } = useContext(FirebaseContext)

    const handleUploadStart = () => {
        setProgressImage(0)
        setUploadingImage(true)
    }

    const handleProgress = (progress) => {
        setProgressImage({progress})
    }

    const handleUploadError = (error) => {
        setUploadingImage(error)
    }

    const handleUploadSuccess = (name) => {
        setProgressImage(100)
        setUploadingImage(false)
        setImageName(name)

        firebase
            .storage
            .ref('products')
            .child(name)
            .getDownloadURL()
            .then(url => setImageUrl(url))
    }

    const handleNewProduct =  async () => {
        if (!userAuth) {
            return router.push('/login')
        }

        const productData = {
            product_name,
            business_name,
            image_url: imageUrl,
            url,
            description,
            votes: 0, 
            votingUsers: [],
            comments: [],
            createdDate: Date.now(),
            createdBy: {
                author: userAuth.displayName,
                authorId: userAuth.uid
            }
        }

        firebase.db.collection('products').add(productData)
        return router.push('/');
    }

    const { valuesSaved,errorsValidation,handleSubmit,handleChange, handleValidate} = useValidation(INITIAL_STATE,productValidations, handleNewProduct)
    const { product_name, business_name, url, description } = valuesSaved

    if (!userAuth) {
        return <Layout>
            <Error404/>
        </Layout>
    }
    
    return ( 
        <Layout>
        <Title>New Product</Title>
        <Form onSubmit={handleSubmit} noValidate>
          <fieldset>
            <legend>General Information</legend>
            <Field>
                <label htmlFor='product_name'>Product Name</label>
                <input  type="text" 
                        id='product_name' 
                        name='product_name'
                        placeholder='Product name'
                        value={product_name}
                        onChange={handleChange}
                        onBlur={handleValidate}
                        onKeyUp={handleValidate}
                />
            </Field>
            {!!errorsValidation.product_name && <FieldError>{errorsValidation.product_name}</FieldError> }
            <Field>
                <label htmlFor='business_name'>Business name</label>
                <input  type="text" 
                        id='business_name' 
                        name='business_name'
                        placeholder='Business name'
                        value={business_name}
                        onChange={handleChange}
                        onBlur={handleValidate}
                        onKeyUp={handleValidate}
                />
            </Field>
            {!!errorsValidation.business_name && <FieldError>{errorsValidation.business_name}</FieldError> }
            <Field>
                <label htmlFor='image'>Image</label>
                <FileUploader
                        accept='image/*'
                        id='image' 
                        name='image'
                        randomizeFilename
                        storageRef={firebase.storage.ref("products")}
                        onUploadStart={handleUploadStart}
                        onUploadError={handleUploadError}
                        onUploadSuccess={handleUploadSuccess}
                        onProgress={handleProgress}
                />
            </Field>
            <Field>
                <label htmlFor='url'>Url</label>
                <input  type="url" 
                        id='url' 
                        name='url'
                        placeholder='Product url'
                        value={url}
                        onChange={handleChange}
                        onBlur={handleValidate}
                        onKeyUp={handleValidate}
                />
            </Field>
            {!!errorsValidation.url && <FieldError>{errorsValidation.url}</FieldError> }
          </fieldset>
          <fieldset>
            <legend>About your product</legend>
            <Field>
                <label htmlFor='description'>Description</label>
                <textarea  
                        id='description' 
                        name='description'
                        placeholder='description'
                        value={description}
                        onChange={handleChange}
                        onBlur={handleValidate}
                        onKeyUp={handleValidate}>

                </textarea>
            </Field>
            {!!errorsValidation.description && <FieldError>{errorsValidation.description}</FieldError> }
          </fieldset>
            <Field>
                <InputSubmit type="submit" value='Create new product'/>
            </Field>
            <Field>
                {!!errors && <FieldError>{errors}</FieldError> }
            </Field>
        </Form>
        </Layout> 
    );
}
 
export default NewProduct;
