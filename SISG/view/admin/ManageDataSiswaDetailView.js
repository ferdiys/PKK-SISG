import React, { Component } from 'react'
import PageHeader from '../components/admin/PageHeader'
import ReusableButton from '../components/btn/ReusableButton'
import Loading from '../components/Loading'

export default class ManageDataSiswaView extends Component {
    render() {
        return (
            <div>
                <div className="navbar justify-content-between p-0 ">
                    <PageHeader
                        subLink="Manage PPDB"
                        pageTitle="Detail Data Siswa" />
                </div>

                <div id="detail-content" className="mt-3">
                    <div className="container">
                        <div className="card">
                            {this.props.state.isLoaded
                                ?
                                this.props.state.data.length !== 0
                                    ?
                                    <div>
                                        <div className=" mt-5 text-center">
                                            <h2 className="mb-2">Data Siswa</h2>
                                        </div>
                                        <div className="card-body">
                                            <div className="table-content">
                                                <table className="table table-borderless table-hover">
                                                    <colgroup>
                                                        <col span="1" style={{ width: "50%" }} />
                                                        <col span="1" style={{ width: "50%" }} />
                                                    </colgroup>
                                                    <tbody>
                                                        <tr>
                                                            <td><h6 className="mb-0">Nama Lengkap</h6></td>
                                                            <td>{this.props.state.data.nama_lengkap}</td>
                                                        </tr>
                                                        <tr>
                                                            <td><h6 className="mb-0">No. NISN</h6></td>
                                                            <td>{this.props.state.data.nisn}</td>
                                                        </tr>
                                                        <tr>
                                                            <td><h6 className="mb-0">Nilai NEM</h6></td>
                                                            <td>{this.props.state.data.nem}</td>
                                                        </tr>
                                                        <tr>
                                                            <td><h6 className="mb-0">No Ijazah</h6></td>
                                                            <td>{this.props.state.data.noijazah}</td>
                                                        </tr>
                                                        <tr>
                                                            <td><h6 className="mb-0">Jenis Kelamin</h6></td>
                                                            <td>{this.props.state.data.kelamin}</td>
                                                        </tr>
                                                        <tr>
                                                            <td><h6 className="mb-0">Tempat / Tanggal Lahir</h6></td>
                                                            <td>{this.props.state.data.tl}</td>
                                                        </tr>
                                                        <tr>
                                                            <td><h6 className="mb-0">Asal Sekolah</h6></td>
                                                            <td>{this.props.state.data.asal_sekolah}</td>
                                                        </tr>
                                                        <tr>
                                                            <td><h6 className="mb-0">Jumlah Saudara Kandung</h6></td>
                                                            {this.props.state.data.saudara_kandung
                                                                ?
                                                                <td>{this.props.state.data.saudara_kandung}</td>
                                                                :
                                                                <td>-</td>
                                                            }

                                                        </tr>
                                                        <tr>
                                                            <td><h6 className="mb-0">Jumlah Saudara Tiri</h6></td>
                                                            {this.props.state.data.saudara_tiri
                                                                ?
                                                                <td>{this.props.state.data.saudara_tiri}</td>
                                                                :
                                                                <td>-</td>
                                                            }
                                                        </tr>
                                                        <tr>
                                                            <td><h6 className="mb-0">Tinggal</h6></td>
                                                            <td>{this.props.state.data.tinggal}</td>
                                                        </tr>
                                                        <tr>
                                                            <td><h6 className="mb-0">Jarak tempat tinggal ke Sekolah</h6></td>
                                                            <td>{this.props.state.data.jarak} km</td>
                                                        </tr>
                                                        <tr>
                                                            <td><h6 className="mb-0">Lama belajar di Sekolah Dasar / MI</h6></td>
                                                            <td>{this.props.state.data.lama_sd} tahun</td>
                                                        </tr>
                                                        {/* <tr>
                                                            <td><h6 className="mb-0">Agama</h6></td>
                                                            <td>{this.props.state.data.agama}</td>
                                                        </tr> */}
                                                        <tr>
                                                            <td><h6 className="mb-0">Alamat</h6></td>
                                                            <td>{this.props.state.data.alamat}</td>
                                                        </tr>

                                                        <hr></hr>

                                                        {
                                                            this.props.state.dataOrtu.map((item, id) => {
                                                                if (item.nama) {
                                                                    return <React.Fragment key={id}>
                                                                        <tr>
                                                                            <td><h6 className="mb-0">Nama Ortu</h6></td>
                                                                            <td>{item.nama}</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td><h6 className="mb-0">Tempat / Tanggal Lahir Ortu</h6></td>
                                                                            <td>{item.ttl}</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td><h6 className="mb-0">Pekerjaan Ortu</h6></td>
                                                                            <td>{item.pekerjaan}</td>
                                                                        </tr>
                                                                        <hr></hr>
                                                                    </React.Fragment>
                                                                }
                                                            })
                                                        }
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                    :
                                    <div className="text-center my-5">
                                        <h5 style={{ opacity: .4, margin: 0 }}>Tidak Ada Data</h5>
                                    </div>
                                :
                                <div className="py-4">
                                    <Loading color="#e6be1e" />
                                </div>

                            }
                        </div>

                    </div>

                </div>

            </div>
        )
    }
}
