//import external modules (best practice)
import React, {useState, useEffect} from 'react';
import styled from 'styled-components'
import {Redirect} from 'react-router-dom'

import firebaseApp from './../firebase/firebaseConfig'

//then import my own modules
import FormInput from './../components/forms/FormInput'
import Button from 'components/buttons/Button'

const LoginPageStyles = styled.aside`

    max-width: 380px;
    margin: 6rem auto 0;

    header{
        text-align:center;
    }
    h1{
        font-size: 2.25rem;
        font-weight: 700;
    }
    
`

const LoginPage = (props) => {

    const[email, setEmail] = useState('test@test.com')
    const[password, setPassword] = useState('123456')
    const[isValid, setIsValid] = useState(false)

        console.log('render')


    const handleClick = (e) =>{
        // console.log(firebaseApp);
        // test our authentication with firebase..
        firebaseApp.auth().signInWithEmailAndPassword('test@test.com', '123456')
        .then(userCredential=>{
            // console.log(userCredential.user.email)
            // console.log(userCredential.user.uid)
            // console.log(userCredential.user.displayName)
            // console.log(userCredential.user.emailVerified)
            // console.log(userCredential.user.userCredential)

            setIsValid(true)
        })
        .catch(error=>{
            console.log(error.code)
            console.log(error.message)
        })
    }
    //conditional rendering
    if(setIsValid){

        return <Redirect to="/dashboard"/>

    }else{

        return ( 
            <LoginPageStyles>
                <header><h1>Login Page</h1></header>
                <FormInput label="email address" type="email" onChange={(e)=> setEmail(e.target.value.trim())}/>
                <FormInput label="password" type="text" onChange={(e)=> setPassword(e.target.value.trim())}/>
                <Button label="login" uiStyles="login" onclick={handleClick}/>
            </LoginPageStyles>
        );
    }
    
}
 
export default LoginPage;