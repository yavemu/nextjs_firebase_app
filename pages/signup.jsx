import Layout from '../components/layout/Layout'
import { Form, Field, InputSubmit } from '../components/ui/styles/Form'
import { Title } from '../components/ui/styles/Utils'

const Signup = () => {
  return ( 
    <Layout>
      <Title>Signup</Title>
      <Form>
          <Field>
              <label htmlFor='name'>Name</label>
              <input type="text" id='name' name='name' placeholder='Name'/>
          </Field>
          <Field>
              <label htmlFor='email'>Email</label>
              <input type="email" id='email' name='email' placeholder='Email'/>
          </Field>
          <Field>
              <label htmlFor='password'>Password</label>
              <input type="password" id='password' name='password' placeholder='Password'/>
          </Field>
          <InputSubmit type="submit" value='Create account'/>
      </Form>
    </Layout> 
  );
}
 
export default Signup;
