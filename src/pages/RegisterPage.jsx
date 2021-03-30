import React from 'react';
import styled from 'styled-components'
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
    return ( 
        <RegisterPageStyles>

            <header>
                <h2>Unlimited Free Trial Sign Up</h2>
                <p>No credit card required</p>
            </header>

            <FormInput label="name on account" type="text"/>
            <FormInput label="valid email address" type="email"/>
            <FormInput label="password (min 6 characters)" type="text"/>
            <Button className="create-account"uiStyle="signup" label="Create a free account"></Button>
        </RegisterPageStyles>
     );
}
 
export default RegisterPage;