import React, { Component } from 'react'
import { ManagePPDB } from '../../../model/MManagePPDB'

export default class Complete extends Component {

    constructor(props) {
        super(props)

        this.state = {
            tanggal_tutup:null
        }
    }

    componentDidMount = () => {
        this.getLimitDate()
    }

    getLimitDate = async () => {

        await ManagePPDB.GET().then(res => {

            if (ManagePPDB.data) {

                this.setState({
                    tanggal_tutup: ManagePPDB.data[0].tanggal_tutup
                })
            }

        })

    }

    render() {
        return (
            <div className="form-container container text-center">
                <div class="card">
                    <div class="card-body">
                        <h3>Anda telah terdaftar di ppdb smp sunan giri</h3>
                        <p>Harap daftar ulang pada {this.state.tanggal_tutup}</p>
                    </div>
                </div>
            </div>
        )
    }
}
