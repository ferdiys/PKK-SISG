import React, { Component } from 'react'
import ManageDataSiswaDetailView from '../../view/admin/ManageDataSiswaDetailView'
import { ManagePPDB } from '../../model/MManagePPDB'

export default class ManageDataSiswaDetail extends Component {

    constructor(props) {
        super(props)

        this.state = {
            data: [],
            dataOrtu: [],
            itemId: null,
            isLoaded: false
        }

        this.method = {
        }

    }

    componentDidMount = () => {
        this.dataIndex()
    }

    dataIndex = () => {
        const url = this.props.location.pathname
        const split = url.split(`/`)

        if (split[4]) {
            this.setState({
                itemId: split[4] - 1
            }, () => this.getData(this.state.itemId))
        }
        else {
            this.props.history.push('/admin/data_siswa')
            console.log(this.state.itemId)
        }
    }

    getData = async (id) => {

        await ManagePPDB.GET_USER().then(res => {
            if (ManagePPDB.data) {
                if (ManagePPDB.data[id]) {
                    this.setState({
                        data: ManagePPDB.data[id],
                        dataOrtu: ManagePPDB.data[id].ortu,
                        isLoaded: true
                    })
                }
                else{
                    this.setState({
                        isLoaded: true
                    })
                }
            }
        })

    }

    render() {
        return <ManageDataSiswaDetailView state={this.state} method={this.method} />
    }
}
