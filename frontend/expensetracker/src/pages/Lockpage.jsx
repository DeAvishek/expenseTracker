import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Container, Row, Col } from 'react-bootstrap'; // Importing Bootstrap components
import Logo from '../components/Logo';
import { useNavigate } from 'react-router-dom';
// import Side from '../components/Side';
const LockPage = () => {
    const navigate=useNavigate()
    return (
        <div className="lock-page">
            
            <Container fluid className="vh-100 d-flex flex-column justify-content-center align-items-center text-center" style={{ background: '#f0f0f0' }}>
                <Row className="mb-4">
                 
                    <Col>
                        <h1 className="display-4 text-primary">Expense Tracker</h1>
                    </Col>
                </Row>
                <Row className="mb-4">
                    <Col>   
                        <Logo/>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <p className="lead">
                            Keep track of your expenses effortlessly. Manage your financial life with our easy-to-use app!
                        </p>
                    </Col>
                </Row>
                <Row>
                    {/* Button: Link to Signup Page */}
                    <Col>
                    
                            <Button variant="primary" size="lg" onClick={()=>navigate('/expense_tracker/signup')}>Get Started</Button>
                    
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default LockPage;
