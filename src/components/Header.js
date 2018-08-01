import React, { Component } from 'react';
import '../App.css';
import {
    Button,
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    Jumbotron
} from 'reactstrap';

export default class Header extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render() {
        return (
            <div>
                <Navbar color="light" light expand="md">
                    <NavbarBrand href="/"><img style={{ width: 50, paddingRight: 10 }} src="http://i63.tinypic.com/oid9xu.png" alt="" /> SantrenKoding</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink href="/components/">Home</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/components/">Kajian Koding</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/components/">Santren Kilat</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/components/">Mondok</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/components/">Tentang Kami</NavLink>
                            </NavItem>
                            <Button outline color="primary">Login/Signup</Button>
                        </Nav>
                    </Collapse>
                </Navbar>
                <Jumbotron className="jumbo text-center">
                    <h1 className="display-3">Belajar Jadi Asyik!</h1>
                    <p className="lead">Kegiatan Belajar Intensif Programming dan Qur'an bersama Santren Koding.</p>
                    <p className="lead">
                        <Button color="success">Muali Belajar</Button>
                    </p>
                </Jumbotron>
            </div>
        );
    }
}
