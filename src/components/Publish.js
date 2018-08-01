import React, { Component } from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import '../App.css';

export default class Publish extends Component {
    render() {
        return (
            <div className="head">
                <Container>
                    <div className="heading text-center">
                        <h2>Mondok by Santren Koding</h2>
                        <p>Sebuah Kegiatan Belajar Intensif Programming & Al Qur'an Selama 3 Tahun hingga jaminan kerja</p>
                    </div>
                    <Row>
                        <Col md={{ size: 4, order: 3, offset: 4 }}>
                            <img className="img-pub" src="http://i67.tinypic.com/2m2gkyp.png" alt="" />
                        </Col>
                    </Row>
                    <p className="lead text-center" style={{ paddingTop: 30 }}>
                        <Button outline color="success">Lihat Selengkapnya</Button>
                    </p>
                </Container>
            </div>
        )
    }
}
