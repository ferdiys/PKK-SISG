import React, { Component } from 'react'
import VisiMisiView from '../view/general/VisiMisiView'
import { School } from '../model/MSchool'

export default class VisiMisi extends Component {

    
    constructor(props) {

        super(props)

        this.state = {
            schoolProfile: {},
        }

    }

    componentDidMount = async () => {
        window.scrollTo(0, 0);
        this.getSchoolProfile();
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
        return <VisiMisiView state={this.state}/>
    }
}
