import React, { Component } from 'react'
// import { connect } from 'react-redux'
import { FaTimes } from "react-icons/fa"
import { Row, Col } from 'reactstrap'

import './ModalUpload.scss'

class ModalUpload extends Component {

    _closeModal = () => {
        this.props.onClose()
    }

    render() {
        return (
            <div id="modal-upload">
                <div className="box">
                    <FaTimes className="close" onClick={() => this._closeModal()} />
                    <h1>Upload a Post</h1>
                    <p>Choose how you want to upload the post</p>

                    <Row >
                        <Col sm={12}>
                            <div className="box_item file-img">
                                <div>
                                    <div>11</div>
                                    <div>22</div>
                                </div>
                            </div>
                        </Col>
                        <Col sm={6}>
                            <div className="box_item img-url">
                                URL
                            </div>
                        </Col>
                        <Col sm={6}>
                            <div className="box_item video-url">
                                Video
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        );
    }
}

// function mapStateToProps(state) {
//     return {

//     };
// }

export default ModalUpload;