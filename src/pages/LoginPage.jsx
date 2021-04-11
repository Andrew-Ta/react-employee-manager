//import external modules (best practice)
import React, {useState, useContext} from 'react';
import styled from 'styled-components'
import {Redirect} from 'react-router-dom'

import firebaseApp from './../firebase/firebaseConfig'
import AuthContext from './../auth/AuthContext'
//then import my own modules
import FormInput from './../components/forms/FormInput'
import Button from './../components/buttons/Button'


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
    const auth = useContext(AuthContext)
    const[email, setEmail] = useState('test@test.com')
    const[password, setPassword] = useState('123456')
    const[isValid, setIsValid] = useState(false)

        console.log('render')
        console.log(auth)

    const handleClick = (e) =>{
        // console.log(firebaseApp);
        // test our authentication with firebase..
        firebaseApp.auth().signInWithEmailAndPassword(email, password)
        .then(userCredential=>{
            //email pass input
            auth.isUser = true
            setIsValid(true)
        })
        .catch(error=>{
            console.log(error.code)
            console.log(error.message)
        })
    }
    //conditional rendering
    if(isValid){
        return <Redirect to="/dashboard"/>
    }else{
        return ( 
            <LoginPageStyles>
                <header><h1>Login Page</h1></header>
                <FormInput type="text" label="email"  onChange={(e)=> setEmail(e.target.value.trim())}/>
                <FormInput type="text" label="password" onChange={(e)=> setPassword(e.target.value.trim())}/>
                <Button label="login" uiStyles="login" onClick={handleClick}/>
            </LoginPageStyles>
        );
    } 
}
 
export default LoginPage;