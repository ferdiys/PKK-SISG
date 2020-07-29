import React, { Component } from 'react'
import '../../assets/scss/list-siswa.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default class ListSiswaView extends Component {
    render() {
        return (
            <div>
                <Navbar />

                <div id="list-content">

                    <div id="heading-image">

                        <div className="mask"></div>

                            <div className="container my-auto">

                                <div className="caption">
                                    <h3>Daftar Calon Siswa Tahun Ajaran 2020</h3>
                                <div className="hr-green mt-4"></div>
                            </div>

                        </div>
                    </div>

                    <div id="sub-link">
                        <div className="container">
                            <p>
                                <a>Home</a>
                                &nbsp; 
                                <i className="fas fa-caret-right"></i> 
                                &nbsp;
                                <a>PPDB Online</a>
                                &nbsp;
                                <i className="fas fa-caret-right"></i> 
                                &nbsp;
                                <a>Daftar Peserta PPDB Online</a>
                            </p>
                        </div>
                    </div>

                    <div id="content">
                        <div className="container">
                            <div className="table-list">
                                <div className="table-heading">
                                    <h2 className="title">Total Siswa Mendaftar (68)</h2>
                                </div>
                                <div className="table-content">
                                    <table className="table table-borderless table-hover">
                                        <thead>
                                            <tr>
                                            <th scope="col">#</th>
                                            <th scope="col">Nama Siswa</th>
                                            <th scope="col">Asal Sekolah</th>
                                            <th scope="col">Nilai</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>#1</td>
                                                <td>Crystal Smith</td>
                                                <td>SD Sawojajar</td>
                                                <td>97.5</td>
                                            </tr>
                                            <tr>
                                                <td>#2</td>
                                                <td>Crystal Smith</td>
                                                <td>SD Sawojajar</td>
                                                <td>97.5</td>
                                            </tr>
                                            <tr>
                                                <td>#3</td>
                                                <td>Crystal Smith</td>
                                                <td>SD Sawojajar</td>
                                                <td>97.5</td>
                                            </tr>
                                            <tr>
                                                <td>#4</td>
                                                <td>Crystal Smith</td>
                                                <td>SD Sawojajar</td>
                                                <td>97.5</td>
                                            </tr>
                                            <tr>
                                                <td>#5</td>
                                                <td>Crystal Smith</td>
                                                <td>SD Sawojajar</td>
                                                <td>97.5</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                <Footer />
            </div>
        )
    }
}
