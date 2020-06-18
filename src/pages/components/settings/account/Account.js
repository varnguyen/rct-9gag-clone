import React, { Component } from 'react'
// import { connect } from 'react-redux'
import { CustomInput, Button, Form, FormGroup, Label, Input, FormText, FormFeedback } from 'reactstrap'
import { Link } from 'react-router-dom'

import './Account.scss'

// function mapStateToProps(state) {
//     return {

//     };
// }

class Account extends Component {
    render() {
        return (
            <div id="account">
                <h2>Account</h2>
                <Form>
                    <FormGroup>
                        <Label for="username"><strong>Username</strong></Label>
                        <Input type="text" name="username" id="username" placeholder="" />
                        <FormText color="muted">
                            https://9gag.com/u/enqminh12
                        </FormText>
                        <FormFeedback valid>Sweet! that name is available</FormFeedback>
                    </FormGroup>

                    <FormGroup>
                        <Label for="email"><strong>Email</strong></Label>
                        <Input type="email" name="email" id="email" placeholder="" />
                        <FormText color="muted">
                            Email will not be displayed publicly
                        </FormText>
                        <FormFeedback valid>Sweet! that name is available</FormFeedback>
                    </FormGroup>

                    <FormGroup>
                        <Label for="exampleCheckbox"><strong>Mask Sensitive Content</strong></Label>
                        <div>
                            <CustomInput type="switch" id="MaskSensitiveContent" name="customSwitch" label="On" />
                        </div>
                    </FormGroup>

                    <FormGroup>
                        <Label for="exampleCheckbox"><strong>Show Sensitive Content</strong></Label>
                        <div>
                            <CustomInput type="switch" id="ShowSensitiveContent" name="customSwitch" label="On" />
                        </div>
                    </FormGroup>

                    <Button>Save changes</Button>

                    <FormGroup>
                        <Link to="/member/delete">Delete my account</Link>
                    </FormGroup>
                </Form>
            </div>
        );
    }
}

export default Account;

// export default connect(
//     mapStateToProps,
// )(Account);