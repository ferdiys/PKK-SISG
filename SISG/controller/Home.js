import React, { Component } from 'react'
import HomeView from '../view/general/HomeView'
import Navbar from '../view/components/Navbar'
import Footer from '../view/components/Footer'

import { School } from '../model/MSchool'
import { Kegiatan } from '../model/MKegiatan'

export default class Home extends Component {

    constructor(props) {

        super(props)

        this.state = {
            schoolProfile: {},
            schoolEvent: [],
            profileIsLoaded: false,
            isLoaded: false
        }

        this.method = {
            goToPage: this.goToPage.bind(this)
        }

    }

    componentDidMount = async () => {
        window.scrollTo(0, 0);
        this.getSchoolProfile();
        this.getSchoolEvent();
    }

    goToPage = (request) => {
        this.props.history.push(`/${request}`)
    }

    getSchoolEvent = async () => {

        this.setState({ isLoaded: true })

        await Kegiatan.GET().then(res => {

            if (Kegiatan.data.length > 0) {
                this.setState({
                    schoolEvent: Kegiatan.data,
                    isLoaded: false
                })
            }

            this.setState({ isLoaded: false })

        })

    }

    getSchoolProfile = async () => {

        await School.GET().then(res => {

            if (School.data) {

                this.setState({
                    schoolProfile: School.data[0],
                    profileIsLoaded: true
                },
                    // () => this.forceUpdate()
                    // () => console.log(this.state.schoolProfile)
                )

            } else {

                console.log("Error retrieve api")

            }

        })
            .catch(
                err => {
                    console.log(err);
                }
            );

    }

    render() {

        return (
            <div>
                <Navbar />

                <HomeView state={this.state} method={this.method} />

                <Footer />
            </div>
        )
    }
}
