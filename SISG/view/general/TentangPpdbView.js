import React, { Component } from 'react'
import '../../assets/scss/tentang-ppdb.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import FacilityCard from '../components/card/FacilityCard'

export default class TentangPpdbView extends Component {
    render() {
        return (
            <div>

                <Navbar />
                
                <div id="ppdb-content">

                    <div id="heading-image">

                        <div className="mask"></div>

                            <div className="container my-auto">

                                <div className="caption">
                                    <h3>Tentang PPDB Online</h3>
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
                                <a>Tentang PPDB Online</a>
                            </p>
                        </div>
                    </div>

                    <div id="content">
                        <div className="container">
                            <div className="desc mb-5">
                                <h1 className="title">PPDB Online SMP Sunan Giri</h1>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud ...
                                </p>
                            </div>

                            <div className="step mb-5">
                                <h1 className="title">Langkah - langkah</h1>
                                <div className="s-card mt-2">
                                    <FacilityCard />
                                </div>
                                <div className="s-card mt-2">
                                    <FacilityCard />
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
