import React, { Component } from 'react';
import AppRouter from './routers/AppRouter';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom'
// import { Provider } from 'react-redux'

class App extends Component {
    render() {
        return (<BrowserRouter>
            <AppRouter />
        </BrowserRouter>)
    }
}

export default App;
