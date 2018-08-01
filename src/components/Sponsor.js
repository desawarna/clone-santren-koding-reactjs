import React, { Component } from 'react';
import { Container, Row, Col, } from 'reactstrap';
import '../App.css';

export default class Sponsor extends Component {
    render() {
        return (
            <div className="bg-sponsor">
                <Container>
                    <div className="heading text-center">
                        <h2>Sponsor & Partner</h2>
                    </div>
                    <Row>
                        <Col md={{ size: 4, order: 3, offset: 4 }}>
                            <img src="http://i67.tinypic.com/2hcn70k.jpg" alt="" />
                        </Col>
                    </Row> <br /> <br />
                    <Row>
                        <Col md="2">
                            <img height="100px" src="https://1.bp.blogspot.com/-GZjl-D1QU6k/WgpvD8krquI/AAAAAAAAE0Y/tkrHzHHdt-4BdvmofUT7vuNtjG4ANIRPQCLcBGAs/s400/Undip.png" alt="" />
                        </Col>
                        <Col md="2">
                            <img height="100px" src="http://adiwibowo.files.wordpress.com/2012/10/logo-udinus.png?resize=370%2C358" alt="" />
                        </Col>
                        <Col md="2">
                            <img height="100" src="https://upload.wikimedia.org/wikipedia/id/archive/6/6a/20150926142003%21Logo_unisbank.jpg" alt="" />
                        </Col>
                        <Col md="2">
                            <img height="100" src="http://id.indonesiayp.com/img/id/c/1445918663-86-pt-java-valley-technology.png" alt="" />
                        </Col>
                        <Col md="2">
                            <img height="100" src="https://dynamiclearningid.files.wordpress.com/2017/01/orderdilla.png?w=500" alt="" />
                        </Col>
                        <Col md="2">
                            <img height="100" src="https://www.go-mekanik.com/assets/public/src/imgs/gomekanik/logo.png" alt="" />
                        </Col>
                    </Row>  <br /> <br />
                    <Row>
                        <Col md="2">
                            <img height="100px" src="http://sdk.semarangkota.go.id/web/pemkot.png" alt="" />
                        </Col>
                        <Col md="4">
                            <img height="80px" src="http://www.sandec.org/images/sandec-logo.png" alt="" />
                        </Col>
                        <Col md="2">
                            <img height="120px" src="http://i64.tinypic.com/28v94w6.png" alt="" />
                        </Col>
                        <Col md="4">
                            <img height="50px" src="http://sdk.semarangkota.go.id/komunitas/logokomunitas/20161215114909logo-p.png" alt="" />
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}
