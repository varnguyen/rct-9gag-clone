import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/App.scss'

import React, { Component, Suspense, lazy } from 'react'
import { connect } from 'react-redux'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import { Container, Row, Col } from "reactstrap"

import DesktopHeader from '../pages/commons/header/DesktopHeader'
import MobileHeader from '../pages/commons/header/MobileHeader'
import SideBar from './../pages/components/sidebar/SideBar'
import Posts from '../pages/components/posts/Posts'
import PostDetail from '../pages/components/post-detail/PostDetail'
import Recover from '../pages/components/recover/Recover'

const NotFound = lazy(() => import('../pages/commons/404/NotFound'))
const Forbidden = lazy(() => import('../pages/commons/403/Forbidden'))
const Unauthorized = lazy(() => import('../pages/commons/401/Unauthorized'))
const SettingsRouter = lazy(() => import('./../routers/SettingsRouter'))
const UserRouter = lazy(() => import('./../routers/UserRouter'))

class AppRouter extends Component {
    render() {
        return (<BrowserRouter forceRefresh={false} >
            {/* <ErrorBoundary> */}
            <div id="wrapper">
                <Suspense fallback={<div>Loading ...</div>}>

                    <DesktopHeader {...this.props} />

                    <Container fluid="md" id="main-content">

                        <Row>
                            <Col sm="3"><SideBar /></Col>

                            <Col sm="9">
                                <Switch onUpdate={() => window.scrollTo(0, 0)}>
                                    <Route exact path="/home" render={(props) => (<Posts {...props} />)} />
                                    <Route exact path="/gag/abcdxyz" render={(props) => (<PostDetail {...props} />)} />
                                    <Route path="/u/:username" render={(props) => (<UserRouter {...props} />)} />
                                    <Route path="/settings" render={(props) => (<SettingsRouter {...props} />)} />
                                    <Route exact path="/recover" render={(props) => (<Recover {...props} />)} />

                                    <Route exact path="/404" render={(props) => <NotFound {...props} />} />
                                    {/* <Route exact path="/403" render={(props) => <Forbidden {...props} />} /> */}
                                    {/* <Route exact path="/401" render={(props) => <Unauthorized {...props} />} /> */}
                                    <Route exact path="/" render={(props) => <Posts {...props} />} />
                                    <Route path="*" render={(props) => <Redirect to={{ pathname: `/404` }} />} />
                                </Switch>
                            </Col>

                            {/* <Col sm="4"><LatestPost /></Col> */}
                        </Row>

                    </Container>

                </Suspense>
            </div>
            {/* </ErrorBoundary> */}
        </BrowserRouter>)
    }
}

export default AppRouter;