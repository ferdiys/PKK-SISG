import React, { Component } from 'react'

import RegisterView from '../../view/auth/RegisterView'

export default class Register extends Component {

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
        return <RegisterView method={this.method}/>
    }
}
