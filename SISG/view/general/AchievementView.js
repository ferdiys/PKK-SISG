import React, { Component } from 'react'

import '../../assets/scss/achievement.css'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import AchievementCard from '../components/card/AchievementCard'
import NewPostCard from '../components/card/NewPostCard';

export default class AchievementView extends Component {

    render() {
        return (
            <div>

                <div id="achievement">

                    <div id="heading-image">
                        <div className="mask"></div>

                        <div className="container my-auto">
                            <div className="caption">
                                <h3>Penghargaan Sekolah</h3>
                                <div className="hr-green"></div>
                            </div>
                        </div>
                    </div>

                    <div className="container">
                        <div id="sub-link">
                            <div className="container">
                                <p>
                                    <a>Home</a>
                                    &nbsp;<i class="fas fa-caret-right"></i>&nbsp;
                                    <a>Penghargaan Sekolah</a>
                                </p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12 col-md-8">
                                <div id="content">
                                    <div className="container">
                                        <AchievementCard
                                            date={"January 10, 2020"}
                                            rank={1}
                                            image={"https://images.unsplash.com/photo-1514820720301-4c4790309f46?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1789&q=80"}
                                            title={"Adiwiyata Nasional"}
                                            desc={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis Lorem ipsum dolor sit amet, consectetur a"}
                                        />

                                        <AchievementCard
                                            date={"February 23, 2020"}
                                            rank={3}
                                            image={"https://images.unsplash.com/photo-1527606432722-8b1422ce77a1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"}
                                            title={"Paduan Suara"}
                                            desc={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis Lorem ipsum dolor sit amet, consectetur a"}
                                        />

                                        <AchievementCard
                                            date={"July 2, 2020"}
                                            rank={3}
                                            image={"https://images.unsplash.com/photo-1514820720301-4c4790309f46?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1789&q=80"}
                                            title={"Paskibra Nasional"}
                                            desc={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis Lorem ipsum dolor sit amet, consectetur a"}
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="col-12 col-md-4">
                                <div id="content-side">

                                    <div className="container">
                                        <div className="input-group">
                                            <input type="text" className="form-control" placeholder="Search" />
                                            <div className="input-group-append">
                                                <button type="button" className="btn btn-secondary"><i className="fas fa-search"></i></button>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="container my-4">

                                        <div className="card">
                                            <div className="card-header text-center">
                                                <h4>Lihat Profil Sekolah</h4>
                                            </div>
                                            <ul className="list-group list-group-flush">
                                                <li className="list-group-item">
                                                    <p><a>Home</a></p>
                                                </li>
                                                <li className="list-group-item">
                                                    <p><a>Ekstrakulikuler</a></p>
                                                </li>
                                                <li className="list-group-item">
                                                    <p><a>Organisasi</a></p>
                                                </li>
                                                <li className="list-group-item">
                                                    <p><a>PPDB</a></p>
                                                </li>
                                            </ul>
                                        </div>

                                    </div>

                                    <hr className="my-5" />

                                    <div className="container">
                                        <h5>Postingan Terbaru</h5>

                                        <NewPostCard
                                            image={"https://images.unsplash.com/photo-1570238647998-b4da400b6db6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"}
                                            title={"Turnamen Voli"}
                                            date={"May 14, 2020"}
                                        />
                                        <NewPostCard
                                            image={"https://images.unsplash.com/photo-1570238647998-b4da400b6db6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"}
                                            title={"Turnamen Voli"}
                                            date={"May 14, 2020"}
                                        />
                                        <NewPostCard
                                            image={"https://images.unsplash.com/photo-1570238647998-b4da400b6db6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"}
                                            title={"Turnamen Voli"}
                                            date={"May 14, 2020"}
                                        />
                                    </div>

                                </div>

                            </div>
                        </div>

                    </div>
                </div>

            </div>
        )
    }
}