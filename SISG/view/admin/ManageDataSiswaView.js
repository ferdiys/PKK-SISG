import React, { Component } from 'react'
import PageHeader from '../components/admin/PageHeader'
import ReusableButton from '../components/btn/ReusableButton'
import Loading from '../components/Loading';

export default class ManageDataSiswaView extends Component {
    render() {
        return (
            <div>
                <div className="navbar justify-content-between p-0 ">
                    <PageHeader
                        subLink="Manage PPDB"
                        pageTitle="Data Siswa" />
                </div>

                <div id="data-content" className="mt-3">
                    <div className="card">
                        <div className="card-body">
                            {this.props.state.isLoaded === true
                                ?
                                this.props.state.data.length !== 0
                                    ?
                                    <div className="table-list">
                                        <div className="table-content">
                                            <table className="table table-borderless table-hover">
                                                <thead>
                                                    <tr>
                                                        <th scope="col">Nama Siswa</th>
                                                        <th scope="col">Asal Sekolah</th>
                                                        <th scope="col">Alamat</th>
                                                        <th scope="col">Action</th>
                                                    </tr>
                                                </thead>
                                                <tbody>

                                                    {
                                                        this.props.state.data.map((item, id) => {
                                                            return <tr key={id}>
                                                                <td>{item.nama_lengkap}</td>
                                                                <td>{item.asal_sekolah}</td>
                                                                <td>{item.alamat}</td>
                                                                <td><ReusableButton
                                                                    className="btn btn-success"
                                                                    onClick={() => this.props.method.goDetail(item.id)}
                                                                    buttonText="Detail" />
                                                                </td>
                                                            </tr>
                                                        })
                                                    }

                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                    :
                                    <div className="text-center my-5">
                                        <h5 style={{ opacity: .4, margin:0 }}>Belum Ada Data</h5>
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
