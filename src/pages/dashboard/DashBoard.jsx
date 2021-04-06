import React from 'react';
import styled from 'styled-components'

const DashBoardStyles = styled.section`
    display:flex;
`

const SideBar = styled.section`
    width:256px;
    box-shadow: 0 0 5px 1px grey inset;
    height: calc(100vh - 64px);
    position: relative;
    z-index:1;
    padding:2rem;

    header{
    margin-bottom:1rem;
    font-size: 13px;
    }
    h1{
        font-size: 1.25rem;
        font-weight:bold;

    }
    li{
        opacity:0.7;
        font-size: 12px;
        margin-bottom: 0.35rem;
    }
`

const Panels = styled.section`
    width: calc(100% - 256px);
    height: calc(100vh - 64px);
    background-color: #f3f3f3;

    
`

const DashBoard = (props) => {
    return ( 
        
        <DashBoardStyles>
            <SideBar>
                <header>
                    <h1>Firebase</h1>
                    <p>whats all the fuss about</p>
                </header>
           
                <ul>
                <li>view all</li>
                <li>add new employee</li>
                <li>edit an employee</li>
                <li>delete an employee</li>
                </ul>
            </SideBar>

            <Panels></Panels>
        </DashBoardStyles>

     );
}
 
export default DashBoard;