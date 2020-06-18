import React, { Component } from 'react'
// import { connect } from 'react-redux'
import { Row, Col } from 'reactstrap'
import { AiTwotoneLike, AiTwotoneDislike } from "react-icons/ai";

import LatestPost from '../latest-post/LatestPost'

import './PostDetail.scss'

class PostDetail extends Component {
    render() {
        return (
            <div id="post-detail">
                <Row>
                    <Col xs="6" sm="7">
                        <div className="box">
                            <div className="post-detail_header">
                                <div className="post-section">
                                    <img src="https://miscmedia-9gag-fun.9cache.com/images/thumbnail-facebook/1557310702.1267_UgysAp_100x100.jpg" className="media-section" alt="media-section" /> Funny - 1h</div>
                                <h1>Wondering what will happen next in the couple of weeks since there is a lot happening since this terrible year started</h1>
                            </div>

                            <div className="post-detail_content">
                                <p>458 points · 18 comments</p>
                            </div>
                            <div className="post-detail_action">
                                <span className="like"><AiTwotoneLike /></span>
                                <span className="dislike"><AiTwotoneDislike /></span>
                            </div>

                            <div className="post-detail_img">
                                <img src="https://img-9gag-fun.9cache.com/photo/adVXvmQ_460swp.webp" className="media-content" alt="media-content" />
                            </div>

                        </div>
                    </Col>
                    <Col xs="6" sm="5">
                        <LatestPost />
                    </Col>
                </Row>
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
// )(PostDetail);

export default PostDetail;