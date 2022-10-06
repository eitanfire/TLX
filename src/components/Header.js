import React from 'react';
import '../App.css';
import { Col, Row, Container } from 'reactstrap';
import { Link } from 'react-router-dom';
import logo from '../img/logo.png';
import TLlogo from '../img/teachLeagueLogo.png';

const Header = () => {
    return(
    <div className='App' id ='Header'>
            {/* <Link to='/'> */}
            <Container>
                <Row id='banner'>
                    <Col className="col col-md-4 float-start">
                    {/* <img id='logo' src={ logo } alt='logo' /> */}
                    <img id='teacherLeagueLogo' src={ TLlogo } alt='Teacher League logo' />
                    </Col >
                    <Col className="col col-md-4 float-start d-block">
                    </Col>
                </Row>
            </Container>
            {/* </Link> */}
    </div>
    );
}

export default Header;