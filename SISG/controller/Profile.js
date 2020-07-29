import React, { Component } from 'react'
import ProfileSchool from '../view/general/ProfileSchoolView'
import Navbar from '../view/components/Navbar'
import Footer from '../view/components/Footer'
import { School } from '../model/MSchool'

export default class Profile extends Component {

    constructor(props) {

        super(props)

        this.state = {
            schoolProfile: []
        }

        this.method = {
            goToPage: this.goToPage.bind(this)
        }

    }
    
    componentDidMount() {
        window.scrollTo(0, 0)
        this.getSchoolProfile()
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

    goToPage = (request) => {
        this.props.history.push(`/${request}`)
    }

    render() {
        return <div>

            <Navbar/>

            <ProfileSchool state={this.state}/>

            <Footer/>

        </div>
    }
}
