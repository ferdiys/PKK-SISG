import React, { Component } from 'react'
import EkstraView from '../view/general/EkstraView'
import Navbar from '../view/components/Navbar'
import Footer from '../view/components/Footer'

import { Extracurricular } from '../model/MEkstrakurikuler'
import { toast } from 'react-toastify'

export default class Ekstrakulikuler extends Component {

    constructor(props) {

        super(props)

        this.state = {
            extracurricular: [],
            isLoaded: false
        }

        this.method = {
            goToPage: this.goToPage.bind(this)
        }

    }

    componentDidMount() {
        window.scrollTo(0, 0)
        this.getExtracurricular()
    }

    getExtracurricular = async () => {

        await Extracurricular.GET().then(res => {

            if (Extracurricular.data) {

                this.setState({ extracurricular: Extracurricular.data, isLoaded: true })

            } else {

                toast.success("Gagal mendapatkan data")

            }

        })

            .catch(
                err => {
                    console.log("CATCH", err);
                }
            );

    }

    goToPage = (request) => {
        this.props.history.push(`/${request}`)
    }

    render() {
        return <div>

            <Navbar />

            <EkstraView state={this.state} method={this.method} />

            <Footer />

        </div>
    }
}
