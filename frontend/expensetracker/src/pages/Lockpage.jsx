import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Container, Row, Col } from 'react-bootstrap'; // Importing Bootstrap components
import Logo from '../components/Logo';
import Side from '../components/Side';
const LockPage = () => {
    return (
        <div className="lock-page">
            {/* Full screen container */}
            <Container fluid className="vh-100 d-flex flex-column justify-content-center align-items-center text-center" style={{ background: '#f0f0f0' }}>
                <Row className="mb-4">
                    {/* Header: App Logo or Title */}
                    <Col>
                        <h1 className="display-4 text-primary">Expense Tracker</h1>
                    </Col>
                </Row>
                <Row className="mb-4">
                    {/* Design element: Icon or image */}
                    <Col>   
                        <Logo/>
                    </Col>
                </Row>
                <Row>
                    {/* Description text */}
                    <Col>
                        <p className="lead">
                            Keep track of your expenses effortlessly. Manage your financial life with our easy-to-use app!
                        </p>
                    </Col>
                </Row>
                <Row>
                    {/* Button: Link to Signup Page */}
                    <Col>
                        <Link to="/signup">
                            <Button variant="primary" size="lg">Get Started</Button>
                        </Link>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default LockPage;
