import React, { Component } from 'react'
import OrganisasiView from '../view/general/OrganisasiView'
import Navbar from '../view/components/Navbar'
import Footer from '../view/components/Footer'

export default class Organisasi extends Component {

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
        this.props.history.push(`/${request}`)
    }

    render() {

        return <div>

            <Navbar />

            <OrganisasiView state={this.state} method={this.method} />

            <Footer />

        </div>

    }
}
