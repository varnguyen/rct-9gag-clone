import React, { Component } from 'react'
// import { connect } from 'react-redux'
import { Button, Form, FormGroup, Label, Input, FormFeedback } from 'reactstrap'

import './Password.scss'

// function mapStateToProps(state) {
//     return {

//     };
// }

class Password extends Component {
    render() {
        return (
            <div id="password">
                <h2>Password</h2>
                <Form>
                    <FormGroup>
                        <Label for="old_password"><strong>Old Password</strong></Label>
                        <Input type="password" name="old_password" id="old_password" placeholder="" />
                        <FormFeedback valid>Sweet! that name is available</FormFeedback>
                    </FormGroup>

                    <FormGroup>
                        <Label for="new_password"><strong>New Password</strong></Label>
                        <Input type="password" name="new_password" id="new_password" placeholder="" />
                        <FormFeedback valid>Sweet! that name is available</FormFeedback>
                    </FormGroup>

                    <FormGroup>
                        <Label for="rp_new_password"><strong>Re-type New Password</strong></Label>
                        <Input type="password" name="rp_new_password" id="rp_new_password" placeholder="" />
                        <FormFeedback valid>Sweet! that name is available</FormFeedback>
                    </FormGroup>

                    <Button>Save changes</Button>

                </Form>
            </div>
        );
    }
}

export default Password;

// export default connect(
//     mapStateToProps,
// )(Password);