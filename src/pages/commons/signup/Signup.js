import React, { Component } from 'react'
// import { connect } from 'react-redux'
import { FaTimes } from "react-icons/fa"
// import { Form, FormGroup, Label, Input, FormFeedback, FormText, Col, Button } from 'reactstrap'
import { Link } from 'react-router-dom'
import './Signup.scss'

class Signup extends Component {

    _closeModal = () => {
        this.props.onClose()
    }

    render() {
        return (
            <div id="signup">
                <div className="box">
                    <div className="header">
                        <FaTimes className="close" onClick={() => this._closeModal()} />
                        <h1>Hey there!</h1>
                        <p>9GAG is your best source for fun. Share anything you find interesting, get real responses from people all over the world,
                            and discover what makes you laugh.</p>
                    </div>
                    <div className="content">
                        <p>Sign up with your <a>Email</a></p>
                        <p>Have an account? <a>Log in</a></p>
                    </div>
                    <div className="footer"></div>
                </div>
            </div>
        );
    }
}

// function mapStateToProps(state) {
//     return {

//     };
// }

export default Signup;