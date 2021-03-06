import React from 'react';
import styled, {css} from 'styled-components';


const ButtonStyles = styled.button`
  width: 100%;
  border: inherit;
  background-color: inherit;
  font-size: 1rem;
  color: #8e979c;
  border-radius: 4px;
  box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.2);
  padding: 0.65rem 1rem;
  margin-bottom: 0.5rem;
  ${(props) =>
    props.uiStyles === "login" &&
    css`
      background: #f15b29;
      color: white;
    `}
  
`;

const Button = (props) => {

    return ( 
        <ButtonStyles {...props}>
            {props.label || "button"}
            {props.children}
        </ButtonStyles>

        //to use this component.. in the pages   xxxxxxx.jsx page: <Button label="submit, sign in.. or w.e"/>
        //children means: <button>    children here (could put an icon for ex.)   <button/>
     );
}
 
export default Button;