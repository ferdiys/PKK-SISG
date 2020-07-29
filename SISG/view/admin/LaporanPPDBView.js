import React, { Component } from 'react'

import '../../assets/scss/laporanppdb.css'
import PageHeader from '../components/admin/PageHeader'
import ReusableButton from '../components/btn/ReusableButton'

import InputWithIcon from '../components/input/INPUTWithIcon'

export default class LaporanPPDBView extends Component {
    render() {
        return (
            <div>
                <div className="navbar justify-content-between p-0 ">
                    <PageHeader
                        subLink="Manage PPDB"
                        pageTitle="Laporan PPDB" />

                    <div className="right-container">
                        {/* <InputWithIcon /> */}
                    </div>
                </div>

                <div id="laporan-content">

                    <div class="row panel">
                        <div class="col-12 col-sm-6 col-md-3">
                            <div className="card">
                                <div className="container py-5 d-flex align-items-center box">
                                    <div>
                                        <h5 className="mb-0">Total Pendaftar 2020</h5>
                                        <h3 className="mb-0">260</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-sm-6 col-md-3">
                            <div className="card">
                                <div className="container py-5 d-flex align-items-center box">
                                    <div>
                                        <h5 className="mb-0">Kuota Periode 2020</h5>
                                        <h3 className="mb-0">300</h3>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-12 col-sm-6 col-md-3">
                            <div className="card">
                                <div className="container py-5 d-flex align-items-center box">
                                    <div>
                                        <h5 className="mb-0">Siswa Diterima 2020</h5>
                                        <h3 className="mb-0">240</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-sm-6 col-md-3">
                            <div className="card">
                                <div className="container py-5 d-flex align-items-center box">
                                    <div>
                                        <h5 className="mb-0">PPDB 2019</h5>
                                        <h3 className="mb-0">229</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-body">
                            <div className="table-list">
                                <div className="table-heading">
                                    <div className="navbar justify-content-between">
                                        <h2 className="title m-0">Total Siswa Mendaftar (68)</h2>
                                        <div className="d-flex align-items-center mt-4 mt-lg-0">
                                            <InputWithIcon />
                                            <ReusableButton
                                                className="btn btn-success px-3 ml-3"
                                                onClick=""
                                                buttonText="Buat Laporan" />
                                        </div>
                                    </div>
                                </div>
                                <div className="table-content">
                                    <table className="table table-borderless table-hover">
                                        <thead>
                                            <tr>
                                                <th scope="col">#</th>
                                                <th scope="col">Nama Siswa</th>
                                                <th scope="col">Asal Sekolah</th>
                                                <th scope="col">Nilai</th>
                                                <th scope="col">Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>#1</td>
                                                <td>Crystal Smith</td>
                                                <td>SD Sawojajar</td>
                                                <td>97.5</td>
                                                <td><a href="admin/edit_daftar_calon_siswa">Edit</a></td>
                                            </tr>
                                            <tr>
                                                <td>#2</td>
                                                <td>Crystal Smith</td>
                                                <td>SD Sawojajar</td>
                                                <td>97.5</td>
                                                <td><a href="/edit_daftar_calon_siswa">Edit</a></td>
                                            </tr>
                                            <tr>
                                                <td>#3</td>
                                                <td>Crystal Smith</td>
                                                <td>SD Sawojajar</td>
                                                <td>97.5</td>
                                                <td><a href="/edit_daftar_calon_siswa">Edit</a></td>
                                            </tr>
                                            <tr>
                                                <td>#4</td>
                                                <td>Crystal Smith</td>
                                                <td>SD Sawojajar</td>
                                                <td>97.5</td>
                                                <td><a href="/edit_daftar_calon_siswa">Edit</a></td>
                                            </tr>
                                            <tr>
                                                <td>#5</td>
                                                <td>Crystal Smith</td>
                                                <td>SD Sawojajar</td>
                                                <td>97.5</td>
                                                <td><a href="">Edit</a></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        )
    }
}