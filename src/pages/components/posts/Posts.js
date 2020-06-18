import React, { Component } from 'react'
import PostItem from '../../commons/post-item/PostItem'
import LatestPost from '../latest-post/LatestPost'
import { Row, Col } from 'reactstrap'

import './Posts.scss';

class Posts extends Component {
    render() {
        return (
            <div id="posts">
                <Row>
                    <Col xs="6" sm="7">
                        <PostItem />
                    </Col>
                    <Col xs="6" sm="5">
                        <LatestPost />
                    </Col>
                </Row>
            </div>
        )
    }
}

export default Posts;