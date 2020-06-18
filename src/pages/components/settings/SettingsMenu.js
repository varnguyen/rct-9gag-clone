import React, { Component } from 'react'
// import { connect } from 'react-redux'
import { Nav, NavItem } from 'reactstrap'
import { Link } from 'react-router-dom'

import './SettingsMenu.scss'

// function mapStateToProps(state) {
//     return {

//     };
// }

class SettingsMenu extends Component {
    render() {
        return (
            <div id="settings-menu">
                <Nav vertical>
                    <NavItem>
                        <Link to="/settings/account">Account</Link>
                    </NavItem>
                    <NavItem>
                        <Link to="/settings/password">Password</Link>
                    </NavItem>
                    <NavItem>
                        <Link to="/settings/profile">Profile</Link>
                    </NavItem>
                    <NavItem>
                        <Link to="/settings/privacy">Privacy</Link>
                    </NavItem>
                </Nav>
            </div>
        );
    }
}

export default SettingsMenu;

// export default connect(
//     mapStateToProps,
// )(SettingsMenu);