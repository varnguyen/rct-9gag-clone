import React, { Component } from 'react'
// import { connect } from 'react-redux'
import {
    Container,
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
    NavbarText
} from 'reactstrap'
import { FaMoon, FaPlus } from "react-icons/fa"
import { Link } from 'react-router-dom'
import { Button } from 'reactstrap'
import Modal from 'react-awesome-modal'
import ModalUpload from '../modal-upload/ModalUpload'

import './DesktopHeader.scss'

class DesktopHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false
        }
    }

    // componentWillMount() {
    // }

    // componentDidMount() {
    // }

    openModal() {
        this.setState({
            visible: true
        });
    }

    closeModal() {
        this.setState({
            visible: false
        });
    }

    render() {
        const { visible } = this.state

        return (
            <div id="desktop-header">
                <Navbar color="dark" dark expand="md" fixed="top">
                    <Container fluid="md">
                        <NavbarBrand href="/">9GAG</NavbarBrand>
                        <NavbarToggler />
                        <Collapse navbar>
                            <Nav className="mr-auto" navbar>

                                <NavItem>
                                    <NavLink href="/components">Random</NavLink>
                                </NavItem>

                                <NavItem>
                                    <NavLink href="/components">Shop</NavLink>
                                </NavItem>

                                <NavItem>
                                    <NavLink href="/components">18+</NavLink>
                                </NavItem>

                                <NavItem>
                                    <NavLink href="/components">3am Chat</NavLink>
                                </NavItem>

                                <NavItem>
                                    <NavLink href="/components">Cosplay</NavLink>
                                </NavItem>
                            </Nav>

                            <NavbarText>
                                <NavLink >
                                    <FaMoon />
                                </NavLink>
                            </NavbarText>

                            {/* <NavbarText>
                                <NavLink href="/components">Noti</NavLink>
                            </NavbarText> */}

                            <NavbarText>
                                <UncontrolledDropdown >
                                    <DropdownToggle nav>
                                        <img src="https://accounts-cdn.9gag.com/media/avatar/55629313_100_3.jpg" className="avatar" alt="logo" />
                                    </DropdownToggle>
                                    <DropdownMenu right>
                                        <DropdownItem className="txt-main" tag={Link} to="/u/enqminh">
                                            My Profile
                                        </DropdownItem>
                                        <DropdownItem className="txt-main" tag={Link} to="/settings">
                                            Settings
                                        </DropdownItem>
                                        <DropdownItem divider />
                                        <DropdownItem className="txt-main">
                                            Logout
                                        </DropdownItem>
                                    </DropdownMenu>
                                </UncontrolledDropdown>
                            </NavbarText>

                            <NavbarText>
                                <NavLink onClick={() => this.openModal()} >
                                    <FaPlus /> Upload
                                </NavLink>
                            </NavbarText>

                        </Collapse>
                    </Container>
                </Navbar>
                <section>
                    <Modal
                        visible={visible}
                        width="500"
                        height="500"
                        effect="fadeInDown"
                        onClickAway={() => this.closeModal()}
                    >
                        <ModalUpload onClose={() => this.closeModal()} />
                    </Modal>
                </section>
            </div >

        );
    }
}

export default DesktopHeader;