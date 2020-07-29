import React, { Component } from 'react'
import ManageDataSiswaView from '../../view/admin/ManageDataSiswaView'
import { ManagePPDB } from '../../model/MManagePPDB'

export default class ManageDataSiswa extends Component {

    constructor(props) {
        super(props)

        this.state = {
            data: [],
            isLoaded: false
        }

        this.method = {
            goDetail: this._goDetail.bind(this)
        }

    }

    componentDidMount = () => {
        this.getData()
    }

    _goDetail = (id) => {
        this.props.history.push('/admin/data_siswa/detail/'+id)
    }

    getData = async () => {

        await ManagePPDB.GET_USER().then(res => {
            if (ManagePPDB.data) {
                this.setState({
                    data: ManagePPDB.data,
                    isLoaded: true
                })
            }
        })

    }

    render() {
        return <ManageDataSiswaView state={this.state} method={this.method} />
    }
}
