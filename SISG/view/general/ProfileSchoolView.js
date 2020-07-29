import React, { Component } from 'react'
import '../../assets/scss/profile-school.css'

export default class ProfileSchoolView extends Component {

    VisiList = () => {
        var visi = this.props.state.schoolProfile.visi === undefined ? "" : this.props.state.schoolProfile.visi;

        var res = visi.split(";");

        let visiRows = [];

        for (let i = 0; i < res.length; i++) {
            visiRows.push(<li key={res[i]}>{res[i]}</li>)
        }

        return visiRows;
    }

    MisiList = () => {
        var misi = this.props.state.schoolProfile.misi === undefined ? "" : this.props.state.schoolProfile.misi;

        var res = misi.split(";");

        let misiRows = [];

        for (let i = 0; i < res.length; i++) {
            misiRows.push(<li key={res[i]}>{res[i]}</li>)
        }

        return misiRows;
    }

    render() {
        return (
            <div>

                <div id="profile">

                    <div id="big-hero">
                        <div className="mask"></div>
                        <div className="container my-auto">

                            <div className="caption">
                                <h3>Tentang Smp Sunan Giri</h3>
                                <div className="hr-green mt-4"></div>
                            </div>

                        </div>
                    </div>

                    <div className="container">

                        <div className="profile-container">

                            <h1>Profil Sekolah</h1>
                            <div className="row">
                                <div className="col-lg-6">
                                    <img src={'https://i2.wp.com/sditistiqomah.com/wp-content/uploads/2017/02/14da8d15614557302e791f0b60c6c098_school-building-wallpapers-school-building-background-clipart-a-normal-school_3000-1621.jpeg?ssl=1'} className="profile-image w-100 "></img>
                                </div>
                                <div className="desc col-lg-6">
                                    <div>{this.props.state.schoolProfile.deskripsi} </div>
                                </div>
                            </div>

                        </div>

                        <div className="sejarah-container">

                            <h1>Visi & Misi Sekolah</h1>
                            <div className="row mt-4">
                                <div className="col-12 col-md-6">
                                    Visi
                                        <ul className="mx-4 mt-2">
                                        {this.VisiList()}
                                    </ul>
                                </div>
                                <div className="col-12 col-md-6">
                                    Misi
                                        <ul className="mx-4 mt-2">
                                        {this.MisiList()}
                                    </ul>
                                </div>
                            </div>

                        </div>

                        {/* <div className="gallery-container">
                            <div className="row">
                                <div className="col-lg-4">
                                    <img className="gallery-img w-100" src={"https://images.unsplash.com/flagged/photo-1560408582-aabf80b149a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"}></img>
                                </div>
                                <div className="col-lg-4">
                                    <img className="gallery-img w-100" src={"https://images.unsplash.com/flagged/photo-1560408582-aabf80b149a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"}></img>
                                </div>
                                <div className="col-lg-4">
                                    <img className="gallery-img w-100" src={"https://images.unsplash.com/flagged/photo-1560408582-aabf80b149a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"}></img>
                                </div>
                            </div>
                        </div> */}

                    </div>
                </div>
            </div>
        )
    }
}
