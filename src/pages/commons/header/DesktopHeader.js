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
import { FaMoon, FaPlus, FaBell } from "react-icons/fa"
import { Link } from 'react-router-dom'
import Modal from 'react-awesome-modal'

import './DesktopHeader.scss'

import ModalUpload from '../modal-upload/ModalUpload'
import Login from '../login/Login'
import Signup from '../signup/Signup'

class DesktopHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible_upload: false,
            visible_login: false,
            visible_signup: false,
            is_login: true
        }
    }

    // componentWillMount() {
    // }

    // componentDidMount() {
    // }

    openModalUpload() {
        this.setState({ visible_upload: true })
    }

    openModalLogin() {
        this.setState({ visible_login: true })
    }

    openModalSignup() {
        this.setState({ visible_signup: true })
    }

    closeModalUpload() {
        this.setState({ visible_upload: false })
    }

    closeModalLogin() {
        this.setState({ visible_login: false })
    }

    closeModalSignup() {
        this.setState({ visible_signup: false })
    }

    render() {
        const { visible_upload, visible_login, visible_signup, is_login } = this.state

        return (
            <div id="desktop-header">
                <Navbar expand="md" fixed="top">
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
                                <NavLink ><FaMoon /></NavLink>
                            </NavbarText>

                            {is_login
                                ? (<React.Fragment>
                                    <NavbarText>
                                        <NavLink ><FaBell /></NavLink>
                                    </NavbarText>

                                    <NavbarText>
                                        <UncontrolledDropdown >
                                            <DropdownToggle nav>
                                                <img src="https://accounts-cdn.9gag.com/media/avatar/55629313_100_3.jpg" className="avatar" alt="logo" />
                                            </DropdownToggle>
                                            <DropdownMenu right>
                                                <DropdownItem className="txt-main" tag={Link} to="/u/enqminh">My Profile</DropdownItem>
                                                <DropdownItem className="txt-main" tag={Link} to="/settings">Settings</DropdownItem>
                                                <DropdownItem divider />
                                                <DropdownItem className="txt-main">Logout</DropdownItem>
                                            </DropdownMenu>
                                        </UncontrolledDropdown>
                                    </NavbarText>

                                    <NavbarText>
                                        <NavLink className="header-button" onClick={() => this.openModalUpload()} >
                                            <FaPlus /> Upload
                                        </NavLink>
                                    </NavbarText>

                                    <NavbarText>
                                        <NavLink onClick={() => this.openModalLogin()} >Log in</NavLink>
                                    </NavbarText>

                                    <NavbarText>
                                        <NavLink className="header-button" onClick={() => this.openModalSignup()} >Sign up</NavLink>
                                    </NavbarText>
                                </React.Fragment>)
                                : (<React.Fragment>
                                    {/* <NavbarText>
                                        <NavLink onClick={() => this.openModalLogin()} >Log in</NavLink>
                                    </NavbarText>

                                    <NavbarText>
                                        <NavLink className="header-button" onClick={() => this.openModalSignup()} >Sign up</NavLink>
                                    </NavbarText> */}
                                </React.Fragment>)
                            }

                        </Collapse>
                    </Container>
                </Navbar>
                <section>
                    <Modal
                        visible={visible_upload}
                        width="500"
                        height="500"
                        effect="fadeInDown"
                        onClickAway={() => this.closeModalUpload()}
                    >
                        <ModalUpload onClose={() => this.closeModalUpload()} />
                    </Modal>
                </section>
                <section>
                    <Modal
                        visible={visible_login}
                        width="500"
                        height="500"
                        effect="fadeInDown"
                        onClickAway={() => this.closeModalLogin()}
                    >
                        <Login onClose={() => this.closeModalLogin()} />
                    </Modal>
                </section>
                <section>
                    <Modal
                        visible={visible_signup}
                        width="500"
                        height="500"
                        effect="fadeInDown"
                        onClickAway={() => this.closeModalSignup()}
                    >
                        <Signup onClose={() => this.closeModalSignup()} />
                    </Modal>
                </section>

            </div >

        );
    }
}

export default DesktopHeader;