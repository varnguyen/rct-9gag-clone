import React, { Component } from 'react'
// import { connect } from 'react-redux'
import { Button, Form, FormGroup, Label, Input, FormText, FormFeedback } from 'reactstrap'
import { Link } from 'react-router-dom'

import './Profile.scss'

// function mapStateToProps(state) {
//     return {

//     };
// }

class Profile extends Component {
    render() {
        return (
            <div id="profile">
                <h2>Profile</h2>
                <Form>
                    <FormGroup>
                        <Label for="name"><strong>Your Name</strong></Label>
                        <Input type="text" name="name" id="name" placeholder="Name" />
                        <FormText color="muted">
                            This is the name that will be visible to other users on 9GAG.
                        </FormText>
                        <FormFeedback valid>Sweet! that name is available</FormFeedback>
                    </FormGroup>

                    <FormGroup>
                        <Label for="email"><strong>Email</strong></Label>
                        <Input type="email" name="email" id="email" placeholder="Email" />
                        <FormText color="muted">
                            Email will not be displayed publicly
                        </FormText>
                        <FormFeedback valid>Sweet! that name is available</FormFeedback>
                    </FormGroup>

                    <FormGroup>
                        <Label for="MaskSensitiveContent"><strong>Mask Sensitive Content</strong></Label>
                        <Input type="select" name="MaskSensitiveContent" id="MaskSensitiveContent">
                            <option>On</option>
                            <option>Off</option>
                        </Input>
                    </FormGroup>

                    <FormGroup>
                        <Label for="ShowSensitiveContent"><strong>Show Sensitive Content</strong></Label>
                        <Input type="select" name="ShowSensitiveContent" id="ShowSensitiveContent">
                            <option>On</option>
                            <option>Off</option>
                        </Input>
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

export default Profile;
// export default connect(
//     mapStateToProps,
// )(Profile);