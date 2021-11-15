import React, { useState } from 'react';
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../Contexts/AuthContext";
import Button from './Button';
import Form from './Form';
import TextInput from './TextInput';



export default function LoginForm(){


    
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
   
    const [error, setError] = useState("")
    const [loading, setLoading] = useState()

    const { login } = useAuth()
    
    const history = useHistory()

    async function handleSubmit(e){
        e.preventDefault()

        try{
            console.log("hello from submit")
            setError("")
            setLoading(true)
            await login(email, password)
            history.push("/")
            
        }catch(err){
            console.log(err)
            setLoading(false)
            setError("Failed to Login")
        }
    }

    return (
        <Form style = {{height : "330px"}} onSubmit = {handleSubmit}>
          <TextInput type='text' placeholder='Enter Email' icon='alternate_email' required value = {email} onChange = {( e ) => { setEmail( e.target.value ) }}/>
          <TextInput type='password' placeholder='Enter password' icon='lock' required value = {password} onChange = {( e ) => { setPassword( e.target.value ) }}/>
          <Button disabled = {loading} type = "submit">
            <span>Submit now</span>
          </Button >

          { error && <p className = "error"> {error} </p>}

          <div className='info'>
            Don't have an account? <Link to='/signup'>Signup</Link> instead.
          </div>
        </Form>
    );
}