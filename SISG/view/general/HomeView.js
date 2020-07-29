import React, { Component } from 'react'
import '../../assets/scss/home.css'

import NewsCard from '../components/card/NewsCard'
import Loading from '../components/Loading';

export default class HomeView extends Component {

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

    limitCharacter = e => {

        if (e) {
            return e.substring(0, 200) + " ..."
        }

    }

    render() {

        return (
            <div>

                <div id="home">

                    {/* HEADER */}
                    <div id="heading-image">

                        <div className="container my-auto">

                            <div className="caption">
                                <h4>Utamakan keaktifan anak dalam belajar</h4>
                                <p> Februari 12, 2019</p>
                            </div>

                        </div>

                    </div>

                    <div id="banner">
                        <div className="container">
                            <div className="row text-center align-items-center">
                                <div className="col-12 col-md-6 col-lg-3 mb-4 mb-md-0">
                                    <h5>
                                        <i className="fas fa-map-marker-alt"></i> &nbsp;
                                        {this.props.state.schoolProfile.alamat}
                                    </h5>
                                </div>
                                <div className="col-12 col-md-6 col-lg-3 mb-4 mb-md-0">
                                    <h5>
                                        <i className="fas fa-phone-alt"></i> &nbsp;
                                        {this.props.state.schoolProfile.phone}
                                    </h5>
                                </div>
                                <div className="col-12 col-md-6 col-lg-3">
                                    <h5 style={{fontSize:16,paddingLeft:20}}>
                                        <i className="fas fa-envelope"></i> &nbsp;
                                        {this.props.state.schoolProfile.email}
                                    </h5>
                                </div>
                                <div className="col-12 col-md-6 col-lg-3 contact-us">
                                    <p>Ada pertanyaan?</p>
                                    <h4 onClick={() => this.props.method.goToPage('profile')}>
                                        Hubungi Kami &nbsp;
                                        <i className="fas fa-arrow-alt-circle-right"></i>
                                    </h4>
                                </div>
                            </div>
                        </div>
                    </div>

                    {
                        this.props.state.schoolEvent.length > 0
                            ?
                            <div id="latest-event">

                                <div className="container">

                                    <h4>Event Terbaru</h4>
                                    <p onClick={() => this.props.method.goToPage('kegiatan')} >Lihat lebih</p>

                                    <div className="row mt-4">
                                        {
                                            this.props.state.isLoaded === false
                                                ?
                                                this.props.state.schoolEvent.map((item, id) => {
                                                    return <div key={id} className="col-12 col-md-4 col-lg-3">
                                                        <NewsCard
                                                            id={item.id}
                                                            date={item.dateKeg}
                                                            title={item.title}
                                                            img={item.image}
                                                        />
                                                    </div>
                                                })
                                                :
                                                <div style={{ marginTop: 60 }} className="mx-auto">
                                                    <Loading color="#e6be1e" />
                                                </div>
                                        }
                                    </div>

                                </div>
                            </div>
                            :
                            <div></div>
                    }

                    <div id="galery">
                        <div className="row w-100 mx-auto">
                            <div className="col-6 col-md-4 col-lg-2 px-0">
                                <img src="https://images.unsplash.com/photo-1563971950268-3d7e4df9f9ba?ixlib=rb-1.2.1&auto=format&fit=crop&w=1868&q=80" alt="" />
                            </div>
                            <div className="col-6 col-md-4 col-lg-2 px-0">
                                <img src="https://images.unsplash.com/photo-1485322551133-3a4c27a9d925?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" alt="" />
                            </div>
                            <div className="col-6 col-md-4 col-lg-2 px-0">
                                <img src="https://images.unsplash.com/photo-1524069290683-0457abfe42c3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" alt="" />
                            </div>
                            <div className="col-6 col-md-4 col-lg-2 px-0">
                                <img src="https://images.unsplash.com/photo-1519406596751-0a3ccc4937fe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" alt="" />
                            </div>
                            <div className="col-6 col-md-4 col-lg-2 px-0">
                                <img src="https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" alt="" />
                            </div>
                            <div className="col-6 col-md-4 col-lg-2 px-0">
                                <img src="https://images.unsplash.com/photo-1534643960519-11ad79bc19df?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" alt="" />
                            </div>
                        </div>

                    </div>

                    <div id="about">
                        <div className="row w-100 mx-auto">
                            <div className="col-12 col-md-8 col-lg-8 left">
                                <h4>Tentang Sekolah</h4>
                                <p>{this.limitCharacter(this.props.state.schoolProfile.deskripsi)} </p>

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
                                <button className="mt-3" onClick={() => this.props.method.goToPage('profile')}>Lihat Lebih</button>
                            </div>
                            <div className="col-12 col-md-4 col-lg-4 px-0 right">

                                <div className="wrapper">
                                    <h5>Kontak Kami</h5>
                                    <p className="mt-4">
                                        <i className="fas fa-map-marker-alt"></i> &nbsp;
                                        {this.props.state.schoolProfile.alamat}
                                    </p>
                                    <p className="mt-3">
                                        <i className="fas fa-phone-alt"></i> &nbsp;
                                        {this.props.state.schoolProfile.phone}
                                    </p>
                                    <p className="mt-3">
                                        <i className="fas fa-envelope"></i> &nbsp;
                                        {this.props.state.schoolProfile.email}
                                    </p>
                                    <h4>
                                        <i className="fab fa-facebook-f"></i> &nbsp;
                                        &nbsp; <i className="fab fa-twitter"></i> &nbsp;
                                        &nbsp; <i className="fab fa-instagram"></i> &nbsp;
                                    </h4>
                                </div>

                            </div>
                        </div>

                    </div>

                </div>
            </div>
        )
    }
}
