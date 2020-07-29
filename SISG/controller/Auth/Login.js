import React, { Component } from 'react'

import LoginView from '../../view/auth/LoginView'

export default class Login extends Component {

    constructor(props) {

        super(props)

        this.state = {

        }

        this.method= {
            goToPage : this.goToPage.bind(this)
        }
    }

    goToPage = (request) => {
        this.props.history.push(`/${request}`);
    }

    render() {
        return <LoginView method={this.method}/>
    }
}
