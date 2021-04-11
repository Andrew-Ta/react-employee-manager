import React, {useState, useContext} from 'react';
import styled from 'styled-components'
import {Redirect} from 'react-router-dom'

import firebaseApp from './../firebase/firebaseConfig'
import AuthContext from './../auth/AuthContext'

import FormInput from './../components/forms/FormInput';
import Button from './../components/buttons/Button'

const RegisterPageStyles = styled.aside`
    width: 480px;
    margin: 6rem auto 0;
    header{
        text-align:center;
    }
    h2{
        font-size: 2.5rem;
        font-weight: 700;
    }

    .create-account{
        margin-top:2.5rem;
    }

`

const RegisterPage = (props) => {

    const auth = useContext(AuthContext)
    const [username, setUsername] = useState('')
    const[email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isValid, setIsValid] = useState(false)

    const handleClick = (e) =>{
        firebaseApp.auth().createUserWithEmailAndPassword(email,password)

        .then(userCredential => {
            var user = firebaseApp.auth().user;
            
            auth.isUser = true
            setIsValid(true)
        })
        .catch(error => {
            var errorCode = error.code;
            var errorMessage = error.message;

            console.log(errorCode, errorMessage);
        })
    }

    if(isValid){
        var validUser = firebaseApp.auth().currentUser;
        validUser.updateProfile({
            displayName: username
            }).then(function() {
                console.log(username)
                console.log("successful registration.")

            }).catch(function(error) {
                var errorCode = error.code;
                var errorMessage = error.message;

                console.log(errorCode, errorMessage);
            });

        return <Redirect to="/login"/>
    } else {
        return ( 
            <RegisterPageStyles>
    
                <header>
                    <h2>Unlimited Free Trial Sign Up</h2>
                    <p>No credit card required</p>
                </header>
    
                <FormInput label="username" type="text" onChange={(e) => setUsername(e.target.value.trim())}/>
                <FormInput type="text" label="valid email address"  onChange={(e)=> setEmail(e.target.value.trim())}/>
                <FormInput type="text" label="password (min 6 characters)ord" onChange={(e)=> setPassword(e.target.value.trim())}/>
                <Button className="create-account" uiStyles="login" label="Create a free account" onClick={handleClick}></Button>
            </RegisterPageStyles>
         );
    }
}
 
export default RegisterPage;