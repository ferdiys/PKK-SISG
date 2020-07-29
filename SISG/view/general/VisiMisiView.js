import React, { Component } from 'react'

import '../../assets/scss/visimisi.css'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default class VisiMisiView extends Component {

    VisiList = () => {
        var visi = this.props.state.schoolProfile.visi === undefined ? "" : this.props.state.schoolProfile.visi;

        var res = visi.split(";");

        let visiRows = [];

        for (let i = 0; i < res.length; i++) {
            visiRows.push(<li className="my-2" key={res[i]}>{res[i]}</li>)
        }

        return visiRows;
    }

    MisiList = () => {
        var misi = this.props.state.schoolProfile.misi === undefined ? "" : this.props.state.schoolProfile.misi;

        var res = misi.split(";");

        let misiRows = [];

        for (let i = 0; i < res.length; i++) {
            misiRows.push(<li className="my-2" key={res[i]}>{res[i]}</li>)
        }

        return misiRows;
    }

    render(){
        return(
            <div>

                <Navbar/>

                <div id="visimisi">

                    <div id="heading">
                    <div className="mask"></div>
                        <div className="container my-auto">
                            <div className="caption">
                                <h3>Visi Misi Sekolah</h3>
                                <div className="hr-green"></div>
                            </div>
                        </div>
                    </div>

                    <div id="content">

                        <div className="container">
                            
                            <div className="title">
                                <h1>Visi SMP Sunan Giri</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis Lorem ipsum dolor sit amet, consectetur a.</p>
                                <ul className="mx-4 mt-2">
                                    {this.VisiList()}
                                </ul>
                            </div>

                            <div className="title">
                                <h1>Misi SMP Sunan Giri</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis Lorem ipsum dolor sit amet, consectetur a.</p>
                                <ul className="mx-4 mt-2">
                                    {this.MisiList()}
                                </ul>
                            </div>

                        </div>

                    </div>

                </div>

                <Footer/>

            </div>
        )
    }
}