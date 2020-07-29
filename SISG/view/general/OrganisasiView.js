import React, { Component } from 'react'

import '../../assets/scss/organisasi.css'

import StaffMemberCard from '../components/card/StaffMemberCard'

export default class OrganisasiView extends Component {
    render() {
        return (
            <div>

                <div id="organisasi">

                    <div id="content">

                        <div className="container">

                            <div id="sub-link">
                                <div className="container">
                                    <p>
                                        <a>Home</a>
                                        &nbsp; <i class="fas fa-caret-right"></i> &nbsp;
                                    <a>Organisasi </a>
                                    </p>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-12 col-md-4 col-lg-5 py-0">
                                    <img src={"https://images.unsplash.com/photo-1544717305-2782549b5136?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"} className="profile-pic" />
                                </div>
                                <div className="col-12 col-md-8 col-lg-7 py-4">
                                    <h1>Kepala sekolah SMP Sunan Giri</h1>
                                    <h4>Dra Stri Yuni</h4>
                                    <div className="hr"></div>
                                    <p className="my-5 desc">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                        <br></br><br></br>
                                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis Lorem ipsum dolor sit amet. . .
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div id="staff">

                            <div className="container">
                                <div className="row">
                                    <div class="col-12 col-md-6 col-lg-3 mb-5 mb-lg-0">
                                        <StaffMemberCard />
                                    </div>
                                    <div class="col-12 col-md-6 col-lg-3 mb-5 mb-lg-0">
                                        <StaffMemberCard />
                                    </div>
                                    <div class="col-12 col-md-6 col-lg-3 mb-5 mb-lg-0">
                                        <StaffMemberCard />
                                    </div>
                                    <div class="col-12 col-md-6 col-lg-3 mb-5 mb-lg-0">
                                        <StaffMemberCard />
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div id="ekstra-banner">
                            <div className="container">
                                <div className="row align-items-center">
                                    <div className="col-12 col-md-8">
                                        <h2>Lihat Ekstrakurikuler sekolah kita.</h2>
                                    </div>
                                    <div className="col-12 col-md-4 text-md-right">
                                        <button onClick={() => this.props.method.goToPage('ekstrakulikuler')}>Ekstrakulikuler</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div id="contact">
                            <div className="row w-100 mx-auto align-items-center">
                                <div className="col-12 col-md-6 col-lg-6 left-side ">
                                    <h1>
                                        <span>Kunjungi </span>
                                        kami
                                    </h1>

                                    <div className="row mt-1 mt-lg-5">
                                        <div className="col-12 col-md-6 mb-5 mb-md-0">
                                            <div className="inline-left">
                                                <h5>
                                                    <i className="fas fa-map-marker-alt"></i>
                                                </h5>
                                            </div>
                                            <div className="inline-right">
                                                <h6>TEMUKAN KAMI</h6>
                                                <p>
                                                    Dinoyo Malang, <br></br>
                                                    Dekat Mall Dinoyo, <br></br>
                                                    No 12 gang 3
                                                </p>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-6 mb-5 mb-md-0">
                                            <div className="inline-left">
                                                <h5>
                                                    <i className="fas fa-phone-alt"></i> &nbsp;
                                                </h5>
                                            </div>
                                            <div className="inline-right">
                                                <h6>HUBUNGI KAMI</h6>
                                                <p>
                                                    + 234 456 7890 <br></br>
                                                    + 234 456 7890
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row mt-3">
                                        <div className="col-12 col-md-6 mb-5 mb-md-0">
                                            <div className="inline-left">
                                                <h5>
                                                    <i className="fas fa-map-marker-alt"></i>
                                                </h5>
                                            </div>
                                            <div className="inline-right">
                                                <h6>JAM KERJA</h6>
                                                <p>
                                                    Senin - Sabtu: 7 AM - 4 PM
                                                </p>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-6 mb-5 mb-md-0">
                                            <div className="inline-left">
                                                <h5>
                                                    <i className="fas fa-envelope"></i> &nbsp;
                                                </h5>
                                            </div>
                                            <div className="inline-right">
                                                <h6>EMAIL</h6>
                                                <p>
                                                    school@sch.com
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <div className="col-12 col-md-6 col-lg-6 pr-0">
                                    <img src={"https://media.wired.com/photos/59269cd37034dc5f91bec0f1/master/pass/GoogleMapTA.jpg"} className="maps" />
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        )
    }
}
