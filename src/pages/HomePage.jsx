import React from 'react';
import styled from 'styled-components'

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
            <header>
                <h1>Home Page</h1>
                <p>Focus on people and we'll focus on the paperwork</p>
            </header>
        </HomePageStyles>

     );
}
 
export default HomePage;