import React from 'react';
import Header from './../pages/Shared/Header/Header';
import Footer from './../pages/Shared/Footer/Footer';
import { Outlet } from "react-router-dom";
import { Container,Row,Col } from "react-bootstrap";
import LeftNav from './../pages/Shared/LeftNav/LeftNav';
import RightNav from './../pages/Shared/RightNav/RightNav';



const Main = () => {
    return (
        <div className="container mx-auto">
            <Header></Header>
                <Container>
                    <Row>
                        <Col lg={3}>
                            <LeftNav></LeftNav>
                        </Col>
                        <Col lg={7}>
                            <h2>Main content coming soon.....</h2>
                        </Col>
                        <Col lg={2}>
                            <RightNav></RightNav>
                        </Col>
                    </Row>
                </Container>

            <Footer></Footer>
        </div>
    );
};

export default Main;