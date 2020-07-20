import React, { useState } from 'react';
import Router from 'next/router'

import { Title } from '../components/ui/styles/Utils'
import { Form, Field, InputSubmit, FieldError } from '../components/ui/styles/Form'
import Layout from '../components/layout/Layout'
import useValidation from '../hooks/useValidation'
import loginValidations from '../validationRules/loginValidations'
import firebase from '../firebase'

const INITIAL_STATE = {
  email: '',
  password: '',
}

const Login = () => {
  const [loginError, setLoginError] = useState()
    
    const handleLogin =  async () => {
        try {
            setLoginError('')
            await firebase.login(email, password)
            Router.push('/')
        } catch (error) {
            setLoginError(error.message)
        }
    }
    
    const {valuesSaved,errorsValidation,handleSubmit,handleChange, handleValidate} = useValidation(INITIAL_STATE,loginValidations, handleLogin)
    const { email, password } = valuesSaved

    return ( 
        <Layout>
        <Title>Login</Title>
        <Form onSubmit={handleSubmit} noValidate>
            <Field>
                <label htmlFor='email'>Email</label>
                <input  type="email"
                        id='email'
                        name='email' placeholder='Email'
                        value={email}
                        onChange={handleChange}
                        onBlur={handleValidate}
                        onKeyUp={handleValidate}
                />
            </Field>
            {!!errorsValidation.email && <FieldError>{errorsValidation.email}</FieldError> }
            <Field>
                <label htmlFor='password'>Password</label>
                <input  type="password" 
                        id='password' 
                        name='password'
                        placeholder='Password'
                        value={password}
                        onChange={handleChange}
                        onBlur={handleValidate}
                        onKeyUp={handleValidate}
                />
            </Field>
            {!!errorsValidation.password && <FieldError>{errorsValidation.password}</FieldError> }
            <Field>
                <InputSubmit type="submit" value='Login'/>
            </Field>
            <Field>
                {!!loginError && <FieldError>{loginError}</FieldError> }
            </Field>
        </Form>
        </Layout> 
    );
}
 
export default Login;
