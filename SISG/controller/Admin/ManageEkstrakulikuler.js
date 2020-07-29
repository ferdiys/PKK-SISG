import React, { Component } from 'react'
import ManageEkstrakulikulerView from '../../view/admin/ManageEktrakulikulerView'

import { Extracurricular } from '../../model/MEkstrakurikuler'

export default class ManageEkstrakulikuler extends Component {

    constructor(props) {

        super(props)

        this.state = {
            extracurricular: [],
            
            isLoaded: false
        }

        this.method = {
            goToPage: this.goToPage.bind(this),
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
        this.props.history.push({
            pathname: `${request}`,
            state: {
                data: request.id
            }
        })
    }

    render() {
        return <ManageEkstrakulikulerView method={this.method} state={this.state} />
    }
}
