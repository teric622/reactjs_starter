import React, { Component } from "react";
import './welcome.css';
 
// button goes under
import LoginButton from '../ButtonContainer/LoginButton';
import SignupButton from '../ButtonContainer/SignupButton';

import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
class WelcomeScreen extends Component {

    render() {
        return (
            <Container>
                
                <Row><h3>React Welcome Component</h3></Row>
               <Row> <LoginButton />
               <SignupButton/></Row>
            </Container>

        );
    }
}

export default WelcomeScreen;           

