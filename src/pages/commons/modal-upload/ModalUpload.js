import React, { Component } from 'react'
// import { connect } from 'react-redux'
import { FaTimes } from "react-icons/fa";

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