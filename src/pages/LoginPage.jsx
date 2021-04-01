import React from 'react';
import styled from 'styled-components'
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
    return ( 
    <LoginPageStyles>

    <header>
        <h1>User Login</h1>
    </header>

    <FormInput label="name on account" type="text"/>
    <FormInput label="email address" type="email"/>
    <FormInput label="password" type="password"/>
    <Button className="create-account"uiStyle="login" label="Login"></Button>
    
    </LoginPageStyles>
     );
}
 
export default LoginPage;