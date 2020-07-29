import React, { Component } from 'react'

import { Link } from 'react-router-dom'
import '../../assets/scss/ekstra.css'

import ExtraCard from '../components/card/ExtraCard'
import Loading from '../components/Loading'

export default class EkstraView extends Component {

    render() {
        return (
            <div>

                <div id="ekstrakulikuler">

                    <div id="heading-image">

                        <div className="mask"></div>

                        <div className="container my-auto">

                            <div className="caption">
                                <h3>Ekstrakulikuler Sekolah</h3>
                                <div className="hr-green mt-4"></div>
                            </div>

                        </div>
                    </div>

                    <div className="container">
                        <div className="row px-md-2">

                            <div className="col-12 col-md-8 p-0 pr-md-4">

                                <div id="sub-link">
                                    <div className="container">
                                        <p>
                                            <Link to={'/'}>Home</Link>
                                            &nbsp; <i class="fas fa-caret-right"></i> &nbsp;
                                            <a>Ekstrakulikuler</a>
                                        </p>
                                    </div>
                                </div>

                                {/* CONTENT */}
                                <div id="content">
                                    <div className="container">
                                        <h1 className="title">Kembangkan Bakat Murid</h1>
                                        <p>
                                            Kembangkan bakat dan minat siswa siswi. Latih kemampuan non-akademik mereka untuk menjadi lebih kreatif,
                                            aktif dan berwawasan tinggi di bidang non akademik.
                                        </p>

                                        {/* EXTRACURICULAR LIST */}

                                        {
                                            this.props.state.isLoaded === true
                                                ?
                                                this.props.state.extracurricular.map((item, id) => {
                                                    return <div key={id}>
                                                        <ExtraCard
                                                            id={item.id}
                                                            title={item.title}
                                                            desc={item.description}
                                                            image={item.image}
                                                        />
                                                    </div>
                                                })
                                                :
                                                <div style={{ marginTop: 60 }}>
                                                    <Loading color="#e6be1e" />
                                                </div>
                                        }

                                    </div>

                                </div>
                            </div>

                            {/* <div className="col-12 col-md-4 p-0 pl-md-4">
                                <div id="achievement">

                                    <h3 className="d-block d-md-none" style={{ wordWrap: "break-word" }}>Penghargaan</h3>

                                    <div className="card">
                                        <ul className="list-group list-group-flush">
                                            <li className="list-group-item">
                                                <div class="d-flex w-100 align-items-center">
                                                    <h3 className="mb-0 mr-4 text-muted">1</h3>
                                                    <p className="mb-0">Juara 1 Kota Paduan Suara</p>
                                                </div>
                                            </li>

                                            <li className="list-group-item">
                                                <div class="d-flex w-100 align-items-center">
                                                    <h3 className="mb-0 mr-4 text-muted">2</h3>
                                                    <p className="mb-0">Juara 1 Provinsi Karawitan</p>
                                                </div>
                                            </li>

                                            <li className="list-group-item">
                                                <div class="d-flex w-100 align-items-center">
                                                    <h3 className="mb-0 mr-4 text-muted">3</h3>
                                                    <p className="mb-0">Juara 2 Kota Drum Band</p>
                                                </div>
                                            </li>

                                            <li className="list-group-item">
                                                <div class="d-flex w-100 align-items-center">
                                                    <h3 className="mb-0 mr-4 text-muted">4</h3>
                                                    <p className="mb-0">Juara 3 Paskibra</p>
                                                </div>
                                            </li>

                                            <li className="list-group-item">
                                                <div class="d-flex w-100 align-items-center">
                                                    <h3 className="mb-0 mr-4 text-muted">5</h3>
                                                    <p className="mb-0">Juara 1 UN Nasional</p>
                                                </div>
                                            </li>

                                            <li className="list-group-item">
                                                <div class="d-flex w-100 align-items-center">
                                                    <h3 className="mb-0 mr-4 text-muted">6</h3>
                                                    <p className="mb-0">Juara 3 Story Telling</p>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div> */}

                        </div>

                    </div>

                </div>

            </div>
        )
    }
}