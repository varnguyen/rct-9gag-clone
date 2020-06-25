import React, { Component } from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import './SideBar.scss';
import { FaHotjar, FaChartLine, FaRegClock, FaStar } from 'react-icons/fa';
// import { connect } from 'react-redux';

// function mapStateToProps(state) {
//     return {

//     };
// }

class SideBar extends Component {
    render() {
        return (
            <div id="sidebar">
                <Nav vertical>
                    <NavItem>
                        <Link to="/hot"><FaHotjar className="sidebar-icon" /> Hot</Link>
                    </NavItem>
                    <NavItem>
                        <Link to="/trending"><FaChartLine className="sidebar-icon" /> Trending</Link>
                    </NavItem>
                    <NavItem>
                        <Link to="/fresh"><FaRegClock className="sidebar-icon" /> Fresh</Link>
                    </NavItem>
                </Nav>

                <p className="text-muted"><strong>FAVORITE</strong></p>
                <Nav vertical>
                    <NavItem>
                        <Link to="/about"><img src="/assets/images/default-img.png" className="sidebar-icon" alt="logo" /> Drawing, DIY & Crafts</Link>
                    </NavItem>
                    <NavItem>
                        <Link to="/about"><img src="/assets/images/default-img.png" className="sidebar-icon" alt="logo" /> Link <FaStar className="star-icon" /></Link>
                    </NavItem>
                    <NavItem>
                        <Link to="/about"><img src="/assets/images/default-img.png" className="sidebar-icon" alt="logo" /> Another</Link>
                    </NavItem>
                    <NavItem>
                        <Link to="/about"><img src="/assets/images/default-img.png" className="sidebar-icon" alt="logo" /> About</Link>
                    </NavItem>
                    <NavItem>
                        <Link to="/about"><img src="/assets/images/default-img.png" className="sidebar-icon" alt="logo" /> Link</Link>
                    </NavItem>
                    <NavItem>
                        <Link to="/about"><img src="/assets/images/default-img.png" className="sidebar-icon" alt="logo" /> Another</Link>
                    </NavItem>
                    <NavItem>
                        <Link to="/about"><img src="/assets/images/default-img.png" className="sidebar-icon" alt="logo" /> About</Link>
                    </NavItem>
                </Nav>

                <p className="text-muted"><strong>POPULAR</strong></p>
                <Nav vertical>
                    <NavItem>
                        <Link to="/about"><img src="/assets/images/default-img.png" className="sidebar-icon" alt="logo" /> About</Link>
                    </NavItem>
                    <NavItem>
                        <Link to="/about"><img src="/assets/images/default-img.png" className="sidebar-icon" alt="logo" /> Link</Link>
                    </NavItem>
                    <NavItem>
                        <Link to="/about"><img src="/assets/images/default-img.png" className="sidebar-icon" alt="logo" /> Another</Link>
                    </NavItem>
                    <NavItem>
                        <Link to="/about"><img src="/assets/images/default-img.png" className="sidebar-icon" alt="logo" /> About</Link>
                    </NavItem>
                    <NavItem>
                        <Link to="/about"><img src="/assets/images/default-img.png" className="sidebar-icon" alt="logo" /> Link</Link>
                    </NavItem>
                    <NavItem>
                        <Link to="/about"><img src="/assets/images/default-img.png" className="sidebar-icon" alt="logo" /> Another</Link>
                    </NavItem>
                    <NavItem>
                        <Link to="/about"><img src="/assets/images/default-img.png" className="sidebar-icon" alt="logo" /> About</Link>
                    </NavItem>
                </Nav>

                <p><strong>SECTIONS</strong></p>
                <Nav vertical>
                    <NavItem>
                        <Link to="/about"><img src="/assets/images/default-img.png" className="sidebar-icon" alt="logo" /> About</Link>
                    </NavItem>
                    <NavItem>
                        <Link to="/about"><img src="/assets/images/default-img.png" className="sidebar-icon" alt="logo" /> Link</Link>
                    </NavItem>
                    <NavItem>
                        <Link to="/about"><img src="/assets/images/default-img.png" className="sidebar-icon" alt="logo" /> Another</Link>
                    </NavItem>
                    <NavItem>
                        <Link to="/about"><img src="/assets/images/default-img.png" className="sidebar-icon" alt="logo" /> About</Link>
                    </NavItem>
                    <NavItem>
                        <Link to="/about"><img src="/assets/images/default-img.png" className="sidebar-icon" alt="logo" /> Link</Link>
                    </NavItem>
                    <NavItem>
                        <Link to="/about"><img src="/assets/images/default-img.png" className="sidebar-icon" alt="logo" /> Another</Link>
                    </NavItem>
                    <NavItem>
                        <Link to="/about"><img src="/assets/images/default-img.png" className="sidebar-icon" alt="logo" /> About</Link>
                    </NavItem>
                </Nav>

                <p>SECTIONS</p>
                <Nav vertical>
                    <NavItem>
                        <Link to="/about"><img src="/assets/images/default-img.png" className="sidebar-icon" alt="logo" /> About</Link>
                    </NavItem>
                    <NavItem>
                        <Link to="/about"><img src="/assets/images/default-img.png" className="sidebar-icon" alt="logo" /> Link</Link>
                    </NavItem>
                    <NavItem>
                        <Link to="/about"><img src="/assets/images/default-img.png" className="sidebar-icon" alt="logo" /> Another</Link>
                    </NavItem>
                    <NavItem>
                        <Link to="/about"><img src="/assets/images/default-img.png" className="sidebar-icon" alt="logo" /> About</Link>
                    </NavItem>
                    <NavItem>
                        <Link to="/about"><img src="/assets/images/default-img.png" className="sidebar-icon" alt="logo" /> Link</Link>
                    </NavItem>
                    <NavItem>
                        <Link to="/about"><img src="/assets/images/default-img.png" className="sidebar-icon" alt="logo" /> Another</Link>
                    </NavItem>
                    <NavItem>
                        <Link to="/about"><img src="/assets/images/default-img.png" className="sidebar-icon" alt="logo" /> About</Link>
                    </NavItem>
                </Nav>
                <div className="sidebar-footer">Coppy right © 2020</div>
            </div>
        );
    }
}
export default SideBar;

// export default connect(
//     mapStateToProps,
// )(SideBar);