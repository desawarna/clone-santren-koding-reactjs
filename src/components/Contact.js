import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import '../App.css';

export default class Contact extends Component {
    render() {
        return (
            <div className="contact">
                <div className="heading text-center">
                    <h3>Kontak</h3>
                </div>
                <Container>
                    <Row>
                        <Col align="center" md={{ size: 4, order: 3, offset: 4 }} >
                            <i className="fa fa-phone contact-icon"></i>
                            082225111587 <br />
                            <i className="fa fa-envelope-o contact-icon"></i>
                            santrenkoding@gmail.com <br /> <br />
                            <i className="fa fa-map-marker contact-icon"></i>
                            Titik Ruang Space,
Jl. Ngesrep Tim. III No.67, Sumurboto, Banyumanik,
Kota Semarang, Jawa Tengah 50269
                        </Col>
                    </Row>
                </Container>
                <div className="footer">
                    <Container >
                        <Row>
                            <Col align="left">
                                Copyright © Santren Koding 2018. All rights reserved.
                        </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        )
    }
}
