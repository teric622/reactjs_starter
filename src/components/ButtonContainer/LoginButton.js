import React from 'react';

import {withRouter} from 'react-router-dom'

import './Buttons.css';

function LoginButton(){
const Button = withRouter(({history}) => (
    <button 
    type="button"
    onClick={() => {history.push('/sign-in')}}
    >Login</button>
));
return <Button/>
}

export default LoginButton;