import Layout from '../components/layout/Layout'
import { Form, Field, InputSubmit, FieldError } from '../components/ui/styles/Form'
import { Title } from '../components/ui/styles/Utils'


import useValidation from '../hooks/useValidation'
import signupValidations from '../validationRules/signupValidations'

const INITIAL_STATE = {
    name: '',
    email: '',
    password: '',
}

const Signup = () => {

    
    const handleCreateAccount = () => {
        console.log('Create Account Successfully');
    }
    
    const {valuesSaved,errorsValidation,handleSubmit,handleChange, handleValidate} = useValidation(INITIAL_STATE,signupValidations, handleCreateAccount)
    const { name, email, password } = valuesSaved

    return ( 
        <Layout>
        <Title>Signup</Title>
        <Form onSubmit={handleSubmit} noValidate>
            <Field>
                <label htmlFor='name'>Name</label>
                <input  type="text" 
                        id='name'
                        name='name'
                        placeholder='Name'
                        value={name}
                        onChange={handleChange}
                        onKeyUp={handleValidate}
                />
            </Field>
            {!!errorsValidation.name && <FieldError>{errorsValidation.name}</FieldError> }
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
            <InputSubmit type="submit" value='Create account'/>
        </Form>
        </Layout> 
    );
}
 
export default Signup;
