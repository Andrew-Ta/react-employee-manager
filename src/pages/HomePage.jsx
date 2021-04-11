import React from 'react';
import styled from 'styled-components'
import {Link} from 'react-router-dom'

import Logo from 'components/icons/Logo'

const HomePageStyles = styled.header `
    text-align:center;
    margin: 6rem auto 0;

    svg{
        width: 80px;
    }
    h1{
        font-size: 2.25rem;
    }
    p{
        color:#76748a;
    }
`

const HomePage = (props) => {
    return ( 

        <HomePageStyles>
            <Logo/>
            <h1>Home Page</h1>
            <p>Focus on people and we'll focus on the paperwork</p>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/register">Register</Link></li>
        </HomePageStyles>

     );
}
 
export default HomePage;