import React, { Component } from 'react';
// import { connect } from 'react-redux';
import './PostItem.scss';
import { AiTwotoneLike, AiTwotoneDislike } from "react-icons/ai";
import { FaCommentAlt, FaEllipsisH } from "react-icons/fa";
// import {
//     Dropdown,
//     DropdownToggle,
//     DropdownMenu,
//     DropdownItem,
//     UncontrolledDropdown
// } from 'reactstrap';

// function mapStateToProps(state) {
//     return {

//     };
// }

class PostItem extends Component {
    render() {
        return (
            <div>
                <div id="post-item">
                    <div className="post-item_header">
                        <div className="post-section">
                            <img src="https://miscmedia-9gag-fun.9cache.com/images/thumbnail-facebook/1557310702.1267_UgysAp_100x100.jpg" className="media-section" alt="media-section" /> Funny - 1h</div>
                        <h1>Wondering what will happen next in the couple of weeks since there is a lot happening since this terrible year started</h1>
                    </div>
                    <div className="post-item_content">
                        <img src="https://img-9gag-fun.9cache.com/photo/adVXvmQ_460swp.webp" className="media-content" alt="media-content" />
                    </div>
                    <p>458 points · 18 comments</p>
                    <div className="post-item_footer">
                        <span className="like"><AiTwotoneLike /></span>
                        <span className="dislike"><AiTwotoneDislike /></span>
                        <span className="comment"><FaCommentAlt /></span>
                        {/* <span className="comment">
                        <UncontrolledDropdown direction="right">
                            <DropdownToggle>
                                <FaEllipsisH />
                            </DropdownToggle>
                            <DropdownMenu>
                                <DropdownItem>Download</DropdownItem>
                                <DropdownItem>Report</DropdownItem>
                                <DropdownItem>I just don't like it</DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                    </span> */}
                    </div>
                </div>

                <div id="post-item">
                    <div className="post-item_header">
                        <div className="post-section">
                            <img src="https://miscmedia-9gag-fun.9cache.com/images/thumbnail-facebook/1557310702.1267_UgysAp_100x100.jpg" className="media-section" alt="media-section" /> Funny - 1h</div>
                        <h1>Wondering what will happen next in the couple of weeks since there is a lot happening since this terrible year started</h1>
                    </div>
                    <div className="post-item_content">
                        <img src="https://img-9gag-fun.9cache.com/photo/adVXvmQ_460swp.webp" className="media-content" alt="media-content" />
                    </div>
                    <p>458 points · 18 comments</p>
                    <div className="post-item_footer">
                        <span className="like"><AiTwotoneLike /></span>
                        <span className="dislike"><AiTwotoneDislike /></span>
                        <span className="comment"><FaCommentAlt /></span>
                    </div>
                </div>
            </div>
        );
    }
}

export default PostItem;

// export default connect(
//     mapStateToProps,
// )(PostItem);