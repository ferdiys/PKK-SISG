import React, { Component } from 'react'
import ManageFotoVideoView from '../../view/admin/ManageFotoVideoView'

export default class ManageFotoVideo extends Component {

    constructor(props) {

        super(props)

        this.method = {
            goToPage: this.goToPage.bind(this)
        }

    }

    componentDidMount() {
        window.scrollTo(0, 0)
    }

    goToPage = (request) => {
        this.props.history.push({
            pathname: `${request}`,
            state: {
                data: request.id
            }
        })
    }

    render() {
        return <ManageFotoVideoView method={this.method} />
    }
}
