import React, { Component } from 'react';
import {
    Container,
    Row,
    Col,
    Card,
    CardImg,
    CardText,
    CardBody,
    CardTitle,
    CardSubtitle,
    Button
} from 'reactstrap';

export default class Content extends Component {
    state = {

        card: [
            {
                gambar: 'https://lh3.googleusercontent.com/XLlyoc7OLR2dgFdnhKk-83-6_kxoTXu-6RyPcUiFc_UiSwZmuIvibNfS307Crb3IcFSbPjq1EdHNIknl-_4N5QAVpBFAZmGeC3d6ZMLwng5eAhnKBnoD1V-pcItiFukHZIq0UgA62NvO_Yg',
                title: 'Kajian Koding #3',
                subtitle: 'ReactJS dan Firebase Auth/Hosting'
            },
            {
                gambar: 'https://lh5.googleusercontent.com/-JajpG87BjXAxqMCAu7bs_Bb-c84GUdFtG9w0mNB_dQ1oaOnT3aRYYllYr9tHnB-rLJ8ZxpOHA=w2381',
                title: 'Kajian Koding #2',
                subtitle: 'html, css, boostrap dasar'
            },
            {
                gambar: 'https://lh5.googleusercontent.com/Nw8x_CE9s4N8WGggkhxit5nHdo8j03kr0daRbRTRhduOtJzwmaw3h-iR0T4iBiXrEyQqN-q_VA=w3572',
                title: 'Kajian Koding #1',
                subtitle: 'Belajar Laravel Dasar'
            },
            {
                gambar: 'https://lh5.googleusercontent.com/e6ixy5iFrGuPwlZFn0oU0vPgqMT9zPKdmswiBbZJEVpSbH6L2gVlcKAKFAoz7n31T45ZsSx8tQ=w1191',
                title: 'Santren Kilat #1 (Coming Soon)',
                subtitle: '4 Hari Intensif Laravel'
            }
        ]
    };

    render() {
        return (
            <div>
                <div className="head">
                    <Container >
                        <div className="heading text-center">
                            <h2>Daftar Kajian Koding Rutin</h2>
                        </div>
                        <Row>
                            <Col xs="6" sm="4">
                                <Profil
                                    gambar={this.state.card[0].gambar}
                                    title={this.state.card[0].title}
                                    subtitle={this.state.card[0].subtitle}
                                />
                            </Col>
                            <Col xs="6" sm="4">
                                <Profil
                                    gambar={this.state.card[1].gambar}
                                    title={this.state.card[1].title}
                                    subtitle={this.state.card[1].subtitle}
                                />
                            </Col>
                            <Col sm="4">
                                <Profil
                                    gambar={this.state.card[2].gambar}
                                    title={this.state.card[2].title}
                                    subtitle={this.state.card[2].subtitle}
                                />
                            </Col>
                        </Row>
                        <p className="lead text-center" style={{ paddingTop: 30 }}>
                            <Button outline color="success">Lihat Seluruh Kajian Koding</Button>
                        </p>
                    </Container>
                </div>
                <div className="head1">
                    <Container style={{ padding: 20, borderWidth: 1, borderTopColor: 'grey' }}>
                        <div className="heading text-center">
                            <h2>Daftar Santren Kilat Koding</h2>
                        </div>
                        <Row>
                            <Col xs="6" sm="4">
                                <Profil
                                    gambar={this.state.card[3].gambar}
                                    title={this.state.card[3].title}
                                    subtitle={this.state.card[3].subtitle}
                                />
                            </Col>
                        </Row>
                        <p className="lead text-center" style={{ paddingTop: 30 }}>
                            <Button outline color="success">Lihat Seluruh Santren Kilat</Button>
                        </p>
                    </Container>
                </div>
            </div>
        );
    }
}

class Profil extends Component {
    render() {
        return (
            <div>
                <Card>
                    <CardImg
                        top
                        width="100%"
                        src={this.props.gambar}
                        alt="Card image cap"
                    />
                    <CardBody>
                        <CardTitle>{this.props.title}</CardTitle>
                        <CardSubtitle>{this.props.subtitle}</CardSubtitle>
                        <ul style={{ display: 'flex', listStyle: 'none', padding: 0 }}>
                            <li style={{ paddingRight: 62 }}>
                                <a href="http://">by Santren Koding</a>
                            </li>
                            <li>
                                <a href="http://" className="list-card">
                                    Kouta Terbatas
                </a>
                            </li>
                        </ul>
                    </CardBody>
                </Card>

            </div>
        );
    }
}