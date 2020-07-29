import React, { Component } from 'react'
import ActivityView from '../view/general/ActivityView'
import Navbar from '../view/components/Navbar'
import Footer from '../view/components/Footer'
import { Kegiatan } from '../model/MKegiatan'

export default class Activity extends Component {

    constructor(props) {

        super(props)

        this.state = {
            kegiatan: [],
            isLoaded:true
        }

        this.method = {
            goToPage: this.goToPage.bind(this)
        }

    }

    componentDidMount() {
        window.scrollTo(0, 0)
        this.getKegiatan()
    }

    getKegiatan = async () => {
        this.setState({isLoaded:false})
        await Kegiatan.GET().then(res => {

            if (Kegiatan.data) {
                this.setState({ kegiatan: Kegiatan.data, isLoaded: true })
            }
            else {
                toast.success("Gagal mendapatkan data")
                this.setState({isLoaded:true})
            }
        })
            .catch(
                err => {
                    console.log("CATCH", err)
                    this.setState({isLoaded:true})
                }
            );
    }

    goToPage = (request) => {
        this.props.history.push(`/${request}`)
    }

    render() {
        return <div>

            <Navbar />

            <ActivityView state={this.state} />

            <Footer />

        </div>
    }
}
