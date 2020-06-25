import React, { Component } from 'react'
// import { connect } from 'react-redux'
import { Form, FormGroup, Label, Input, FormFeedback, FormText, Col, Button } from 'reactstrap'

import './Recover.scss'

class Recover extends Component {
    render() {
        return (
            <div id="recover">
                <h2>Forgot Password</h2>
                <FormGroup>
                    <Input type="email" name="email" id="exampleEmail" placeholder="Email" />

                    {/* <FormFeedback valid>Sweet! that name is available</FormFeedback> */}
                    {/* <FormText>Example help text that remains unchanged.</FormText> */}
                </FormGroup>

                <FormGroup >
                    <Button color="primary">Send instruction</Button>
                </FormGroup>
            </div>
        );
    }
}

// function mapStateToProps(state) {
//     return {

//     };
// }

// export default connect(
//     mapStateToProps,
// )(Recover);

export default Recover;