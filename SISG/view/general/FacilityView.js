import React, { Component } from 'react'

import '../../assets/scss/facility.css'
import FacilityCard from '../components/card/FacilityCard'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Loading from '../components/Loading'
import CardRow from '../components/card/CardRow'

export default class FacilityView extends Component {
    render() {
        return (
            <div>

                <div id="facility">

                    <div id="heading-image">

                        <div className="mask"></div>

                        <div className="container my-auto">

                            <div className="caption">
                                <h3>Utamakan keaktifan anak dalam belajar</h3>
                                <div className="hr-green mt-4"></div>
                            </div>

                        </div>
                    </div>

                    <div id="sub-link">
                        <div className="container">
                            <p>
                                <a>Home</a>
                                &nbsp; <i class="fas fa-caret-right"></i> &nbsp;
                                <a>Fasilitas</a>
                            </p>
                        </div>
                    </div>

                    <div id="content">
                        <div className="container">
                            <h1 className="title">Sarana Prasarana</h1>
                            <p>
                                SMP Sunan Giri mempunyai banyak sarana dan prasarana yang membantu dan mempermudah siswa siswi dalam belajar. Sehingga mereka dapat berkembang mengikuti teknologi.
                            </p>

                            <div className="f-card mt-5 ">
                                {
                                    this.props.state.isLoaded === true
                                        ?
                                        this.props.state.facility.map((item, id) => {
                                            return <div key={id}>
                                                <CardRow
                                                    id={item.id}
                                                    title={item.title}
                                                    desc={item.description}
                                                    img={item.image}
                                                    onClick={() => this.props.method.goToPage(`manage_fasilitas/edit/${item.id}`)}
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

                </div>

            </div>
        )
    }
}
