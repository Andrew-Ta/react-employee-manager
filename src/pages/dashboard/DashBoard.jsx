import React, {useContext} from 'react';
import { Redirect,Link, useRouteMatch,Switch,Route } from 'react-router-dom';
import styled from 'styled-components'

import AuthContext from './../../auth/AuthContext'
import ViewAllPanel from './panels/ViewAllPanel'
import EditPanel from './panels/EditPanel'
import DeletePanel from './panels/DeletePanel'
import AddPanel from './panels/AddPanel'
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
    a{
        text-decoration:none;
        font-size:14px;
    }
    p{
        margin-bottom:1rem;
        color:grey;
    }
`

const Panels = styled.section`
    width: calc(100% - 256px);
    height: calc(100vh - 64px);
    background-color: #f3f3f3;

    
`

const DashBoard = (props) => {
    // access the authContext
    const auth = useContext(AuthContext)
    const {path,url} = useRouteMatch()




    if(auth.isUser){
        return ( 

            <DashBoardStyles>
                <SideBar>
                    <header>
                        <h1>Firebase</h1>
                        <p>whats all the fuss about</p>
                    </header>
            
                    <ul>
                        <li><Link to={`${url}`}>View All</Link></li>
                        <li><Link to={`${url}/add`}>Add Content</Link></li>
                        <li><Link to={`${url}/edit`}>Edit Content</Link></li>
                        <li><Link to={`${url}/delete`}>Remove Content</Link></li>
                    </ul>
                </SideBar>
                <Panels>
                    <Switch>
                        <Route exact path={path}><ViewAllPanel/></Route>
                        <Route exact path={`${path}/add`}><AddPanel/></Route>
                        <Route exact path={`${path}/edit`}><EditPanel/></Route>
                        <Route exact path={`${path}/delete`}><DeletePanel/></Route>
                    </Switch>
                </Panels>
            </DashBoardStyles>

        );
    }else{
        return <Redirect to="/login"></Redirect>
    }           
}
 
export default DashBoard;


//loggout button/////////////////////////////////////////////
//firebaseApp.auth().signOut()