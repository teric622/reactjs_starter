import React from 'react';

import {withRouter} from 'react-router-dom'

import './Buttons.css';

function SignupButton(){
const Button = withRouter(({history}) => (
    <button 
    type="button"
    onClick={() => {history.push('/sign-up')}}
    >Signup</button>
));
return <Button/>
}

export default SignupButton;