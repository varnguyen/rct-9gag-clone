import React, { Component } from 'react'
// import { connect } from 'react-redux'
import { FaTimes } from "react-icons/fa"
import { Form, FormGroup, Label, Input, FormFeedback, Col, Button, Spinner } from 'reactstrap'
import { Link } from 'react-router-dom'
import './Login.scss'

class Login extends Component {

    constructor(props) {
        super(props)
        this.state = {
            disabled: false,
            invald_email: false,
            invald_password: false,
            err_msg_email: "",
            err_msg_password: ""
        }
    }

    _closeModal = () => {
        this.props.onClose()
    }

    submit = (e) => {
        console.log(e)
        return
        // e.preventDefault()
        // const { target } = e
        // clearTimeout(this.timer_login)
        // this.timer_login = setTimeout(() => {
        //     const { disabled } = this.state

        // })
    }

    render() {
        const { disabled, invald_email, invald_password, err_msg_email, err_msg_password } = this.state

        return (
            <div id="login" >
                <div className="box">
                    <div className="header">
                        <FaTimes className="close" onClick={() => this._closeModal()} />
                        <h1>Log in</h1>
                        <p>Connect with a social network</p>
                    </div>
                    <div className="content">
                        <p>Log in with your Email</p>
                        <Form name="login" onSubmit={(e) => this.submit(e)} >
                            <FormGroup>
                                <Label for="exampleEmail"><strong>Email</strong></Label>
                                <Input
                                    invalid={invald_email}
                                    autoComplete="off"
                                    name="email"
                                    type="email"
                                    placeholder=""
                                    onFocus={(e) => this.setState({ invald_email: false })} />
                                <FormFeedback invalid={`${invald_email}`}>{err_msg_email}</FormFeedback>
                            </FormGroup>

                            <FormGroup>
                                <Label for="examplePassword"><strong>Password</strong></Label>
                                <Input
                                    invalid={invald_password}
                                    autoComplete="off"
                                    name="password"
                                    type="password"
                                    placeholder=""
                                    onFocus={(e) => this.setState({ invald_password: false })} />
                                <FormFeedback invalid={`${invald_password}`}>{err_msg_password}</FormFeedback>
                            </FormGroup>

                            <FormGroup row className="action">
                                <Col sm={6}>
                                    <Button color="primary" disabled={disabled} type="submit">{disabled ? <Spinner size="sm" /> : "Log in"}</Button>
                                </Col>
                                <Col sm={6} className="text-right forgot"><Link to="/recover" onClick={() => this._closeModal()}>Forgot password</Link></Col>
                            </FormGroup>
                        </Form>
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

export default Login;