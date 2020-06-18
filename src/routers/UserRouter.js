import React, { Suspense, lazy, Component } from 'react'
// import { connect } from 'react-redux'
import { Row, Col } from "reactstrap"
import { Switch, Route, Redirect } from 'react-router-dom'

import User from '../pages/components/user/User'
import PostItem from '../pages/commons/post-item/PostItem'
import LatestPost from '../pages/components/latest-post/LatestPost'

class SettingsRouter extends Component {
    constructor(props) {
        super(props)
        this.state = {
            "url": ""
        }
    }

    componentDidMount() {
        this._load_init()
    }

    _load_init = () => {
        const url = this.props.match.url
        console.log(url)
        this.setState({ "url": url })
    }

    render() {
        const { url } = this.state

        return (<Suspense fallback={<div></div>}>
            <div id="user">
                <Row>
                    <Col sm="7">
                        <User url={url} />
                        <Switch>
                            <Route exact path={`${url}/home`} render={(props) => (<PostItem {...props} />)} />
                            <Route exact path={`${url}/posts`} render={(props) => (<PostItem {...props} />)} />
                            <Route exact path={`${url}/comments`} render={(props) => (<PostItem {...props} />)} />
                            <Route exact path={`${url}/likes`} render={(props) => (<PostItem {...props} />)} />

                            <Route path="/" render={(props) => <PostItem {...props} />} />
                            <Route path="*" render={() => (<Redirect to={{ pathname: "/404" }} />)} />
                        </Switch>
                    </Col>
                    <Col sm="5">
                        <LatestPost />
                    </Col>
                </Row>
            </div>
        </Suspense>)
    }
}

// const mapStateToProps = (state) => {
//     return {
//         // get_menu_build: state.get_menu_build_reducer
//     }
// }
export default SettingsRouter;
// export default connect(mapStateToProps, {
// })(SettingsRouter)