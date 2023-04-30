import React from 'react';
import { Button,ListGroup } from "react-bootstrap";
import { FaGoogle,FaGithub,FaFacebook,FaTwitter,FaInstagram } from "react-icons/fa";
import QZone from './../QZone/QZone';
import bg  from "../../../assets/bg.png";


const RightNav = () => {
    return (
        <div>
            <h4 className="pl-4">Login with</h4>
            <div className="mb-4" >
                <Button className="mb-2" variant="outline-primary"><FaGoogle/> Login with Google</Button>
                <Button variant="outline-secondary"> <FaGithub/> Login with Github</Button>
            </div>
            <div className="mb-4">
                <h5>Find Us On</h5>
                <ListGroup>
                    <ListGroup.Item><FaFacebook/> Facebook</ListGroup.Item>
                    <ListGroup.Item><FaTwitter/> Twitter</ListGroup.Item>
                    <ListGroup.Item><FaInstagram/> Instagram</ListGroup.Item>                                   
                </ListGroup>
            </div>
            <QZone></QZone>
            <div className="position-relative">
                <div>
                    <img src={bg} alt="" />
                </div>
                <div className="text-white position-absolute top-0 position-absolute top-0 start-50 mt-5">
                    <div className="mx-auto mt-5">
                        <h3 className="pr-5">Create an Amazing Newspaper</h3>
                        <p>Discover thousands of options, easy to customize layouts, one-click to import demo and much more.</p>
                        <Button className="bg-danger">Learn More</Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RightNav;