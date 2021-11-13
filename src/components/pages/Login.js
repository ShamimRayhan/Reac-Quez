import loginImage from '../../assets/images/login.svg'
import classes from '../../styles/Signin.module.css'
import Button from '../Button'
import Form from '../Form'
import Illustration from '../Illustration'
import TextInput from '../TextInput'

export default function Login() {
  return (
    <>
      <h1>Login to your account</h1>

      <div className='column'>
        <Illustration loginImage={loginImage} altText='login' />
        <Form className={`${classes.login}`}>
          <TextInput type='text' placeholder='Enter name' icon='person' />
          <TextInput type='password' placeholder='Enter password' icon='lock' />
          <Button>
            <span>Submit now</span>
          </Button>
          <div className='info'>
            Don't have an account? <a href='signup.html'>Signup</a> instead.
          </div>
        </Form>
      </div>
    </>
  )
}
