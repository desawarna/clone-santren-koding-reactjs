import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import '../App.css'

export default class Visi extends Component {
    render() {
        return (
            <div className="head">
                <Container style={{ padding: 20, textAlign: 'center' }}>
                    <Row>
                        <Col md="6" className="left-visi">
                            <h4>Kegiatan</h4>
                            <ul>
                                <li><p>Koding</p></li>
                                <li><p>Belajar Agama dan Al Quran</p></li>
                                <li><p>Pendidikan Karakter</p></li>
                            </ul>
                        </Col>
                        <Col md="6" right-visi>
                            <img src="http://i63.tinypic.com/oid9xu.png" alt="" />
                            <h4>"Memberi Manfaat Untuk Ummat"</h4>
                            <p>-Santren Koding-</p>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}
