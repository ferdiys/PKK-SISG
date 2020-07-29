import React, { Component } from 'react'
import FacilityView from '../view/general/FacilityView'
import Navbar from '../view/components/Navbar'
import Footer from '../view/components/Footer'
import { Facility } from '../model/MFacility'

export default class FacilityScreen extends Component {

    constructor(props) {

        super(props)

        this.state = {
            facility: [],
            isLoaded: false
        }

        this.method = {
            goToPage: this.goToPage.bind(this)
        }

    }

    componentDidMount() {
        window.scrollTo(0, 0)

        this.getFacility()
    }

    getFacility = async () => {

        await Facility.GET().then(res => {

            if (Facility.data) {
                this.setState({ facility: Facility.data.reverse(), isLoaded: true })
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

            <FacilityView state={this.state} />

            <Footer />

        </div>

    }
}
