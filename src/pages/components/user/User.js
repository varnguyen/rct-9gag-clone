import React, { Component } from 'react'
// import { connect } from 'react-redux'
import { Nav, NavItem, NavLink } from 'reactstrap'
import { Link } from 'react-router-dom'

import './User.scss'

// function mapStateToProps(state) {
//     return {

//     };
// }

class User extends Component {
    constructor(props) {
        super(props)
        this.state = {
            current_url: "home"
        }
    }

    componentDidMount() {
        this._load_init()
    }

    _load_init = () => {
        let path = window.location.pathname
        if (path) {
            const tab_name = path.split('/')

            if (!tab_name[3]) {
                this.setState({ current_url: "home" })
                return
            }

            this.setState({ current_url: tab_name[3] })
        }
    }

    render() {
        const { current_url } = this.state
        const { url } = this.props

        return (
            <div className="user">
                <div className="user-header">
                    <div className="img-container round">
                        <img src="https://accounts-cdn.9gag.com/media/avatar/55629313_100_3.jpg" alt="user Pic" />
                    </div>
                    <div>
                        <h2>John Nguyen</h2>
                        <p>@enqminh12 - 83 days</p>
                    </div>
                </div>
                <div className="user-about">Everything happens for a reason.</div>

                <div className="tab-bar">
                    <Nav>
                        <NavItem>
                            <NavLink tag={Link} to={`${url}/home`} active={current_url === "home"} onClick={() => this.setState({ current_url: "home" })}>Home</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={Link} to={`${url}/posts`} active={current_url === "posts"} onClick={() => this.setState({ current_url: "posts" })}>Posts</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={Link} to={`${url}/comments`} active={current_url === "comments"} onClick={() => this.setState({ current_url: "comments" })}>Comments</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={Link} to={`${url}/likes`} active={current_url === "likes"} onClick={() => this.setState({ current_url: "likes" })}>Upvotes</NavLink>
                        </NavItem>
                    </Nav>
                </div>
            </div>
        )
    }
}

export default User;
// export default connect(
//     mapStateToProps,
// )(User);