import React, { Component } from 'react'
import { ManagePPDB } from '../model/MManagePPDB'
import Navbar from '../view/components/Navbar'
import Loading from '../view/components/Loading'
import ReusableButton from '../view/components/btn/ReusableButton'

export default class ListPPDB extends Component {

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
        this.props.history.push('/admin/data_siswa/detail/' + id)
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
        return (
            <div>
                <Navbar />

                <div id="data-content" className=" container mt-3">
                    <div className="card">
                        <div className="card-body">
                            {this.state.isLoaded === true
                                ?
                                this.state.data.length !== 0
                                    ?
                                    <div className="table-list">
                                        <div className="table-content">
                                            <table className="table table-borderless table-hover">
                                                <thead>
                                                    <tr>
                                                        <th scope="col">No</th>
                                                        <th scope="col">Nama Siswa</th>
                                                        <th scope="col">Asal Sekolah</th>
                                                        <th scope="col">NISN</th>
                                                        <th scope="col">Nem</th>
                                                        <th scope="col">Alamat</th>
                                                    </tr>
                                                </thead>
                                                <tbody>

                                                    {
                                                        this.state.data.map((item, id) => {
                                                            return <tr key={id}>
                                                                <td>{id + 1}</td>
                                                                <td>{item.nama_lengkap}</td>
                                                                <td>{item.asal_sekolah}</td>
                                                                <td>{item.nem}</td>
                                                                <td>{item.nisn}</td>
                                                                <td>{item.alamat}</td>
                                                            </tr>
                                                        })
                                                    }

                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                    :
                                    <div className="text-center my-5">
                                        <h5 style={{ opacity: .4, margin: 0 }}>Belum Ada Data</h5>
                                    </div>
                                :
                                <Loading color="#e6be1e" />
                            }
                        </div>
                    </div>
                </div>

            </div >
        )
    }
}
