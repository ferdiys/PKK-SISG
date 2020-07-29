import React, { Component } from 'react'
import ManageFasilitasView from '../../view/admin/ManageFasilitasView'
import { Facility } from '../../model/MFacility'

export default class ManageFasilitas extends Component {

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
                console.log(Facility.data)
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
        this.props.history.push({
            pathname: `${request}`,
            state: {
                data: request.id
            }
        })
    }

    render() {
        return <ManageFasilitasView state={this.state} method={this.method} />
    }
}
