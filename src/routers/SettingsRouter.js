import React, { Suspense, lazy, Component } from 'react'
// import { connect } from 'react-redux'
import { Row, Col } from "reactstrap";

import { Switch, Route, Redirect } from 'react-router-dom'
import SettingsMenu from '../pages/components/settings/SettingsMenu'

const Account = lazy(() => import('./../pages/components/settings/account/Account'))
const Password = lazy(() => import('./../pages/components/settings/password/Password'))
const Profile = lazy(() => import('./../pages/components/settings/profile/Profile'))
const Privacy = lazy(() => import('./../pages/components/settings/privacy/Privacy'))

class SettingsRouter extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {

        return (<Suspense fallback={<div></div>}>
            <div className="settings">
                <Row>
                    <Col sm="3"><SettingsMenu /></Col>

                    <Col sm="9">
                        <Switch>
                            <Route path="/settings/account" render={(props) => (<Account {...props} />)} />
                            <Route path="/settings/password" render={(props) => (<Password {...props} />)} />
                            <Route path="/settings/profile" render={(props) => (<Profile {...props} />)} />
                            <Route path="/settings/privacy" render={(props) => (<Privacy {...props} />)} />

                            <Route path="/" render={(props) => <Account {...props} />} />
                            <Route path="*" render={() => (<Redirect to={{ pathname: "/404" }} />)} />
                        </Switch>
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