import React, { Component } from 'react'

import '../../assets/scss/gallery.css'

import GalleryCard from '../components/card/GalleryCard'
import VideoCard from '../components/card/VideoCard'

export default class GalleryView extends Component {

    render() {
        return (
            <div>

                <div id="gallery">

                    <div id="heading-image">
                        <div className="mask"></div>

                        <div className="container my-auto">
                            <div className="caption">
                                <h3>Galeri Sekolah</h3>
                                <div className="hr-green"></div>
                            </div>
                        </div>
                    </div>

                    <div id="content">
                        <div id="sub-link">
                            <div className="container">
                                <p>
                                    <a>Home</a>
                                    &nbsp; <i class="fas fa-caret-right"></i> &nbsp;
                                    <a>Galeri sekolah</a>
                                </p>
                            </div>
                        </div>

                        <div className="container">
                            <div className="row">
                                <div className="col-12 col-sm-6 col-md-4 mt-sm-3 mt-md-0">
                                    <GalleryCard
                                        image={"https://images.unsplash.com/photo-1416339134316-0e91dc9ded92?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"}
                                        kind={"EVENT SEKOLAH"}
                                        title={"Ulang Tahun Sekolah"}
                                        desc={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}
                                    />
                                </div>

                                <div className="col-12 col-sm-6 col-md-4 mt-sm-3 mt-md-0">
                                    <GalleryCard
                                        image={"https://images.unsplash.com/photo-1416339134316-0e91dc9ded92?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"}
                                        kind={"EVENT SEKOLAH"}
                                        title={"Ulang Tahun Sekolah"}
                                        desc={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}
                                    />
                                </div>

                                <div className="col-12 col-sm-6 col-md-4 mt-sm-3 mt-md-0">
                                    <GalleryCard
                                        image={"https://images.unsplash.com/photo-1416339134316-0e91dc9ded92?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"}
                                        kind={"EVENT SEKOLAH"}
                                        title={"Ulang Tahun Sekolah"}
                                        desc={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}
                                    />
                                </div>
                            </div>
                        </div>

                        <div id="highlight">

                            <div className="container">
                                <div className="row">
                                    <div className="col-12 col-md-7 left">
                                        <div className="row">
                                            <div className="col-6 p-1">
                                                <img src="https://images.unsplash.com/photo-1416339134316-0e91dc9ded92?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" />
                                            </div>

                                            <div className="col-6 p-1">
                                                <img src="https://images.unsplash.com/photo-1494029722188-672a328c4989?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1891&q=80" />
                                            </div>

                                            <div className="col-6 p-1">
                                                <img src="https://images.unsplash.com/photo-1525351159099-81893194469e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1946&q=80" />
                                            </div>

                                            <div className="col-6 p-1">
                                                <img src="https://images.unsplash.com/photo-1529512731903-186378156bad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-12 col-md-5 right">
                                        <p style={{ color: "#6c98e1" }}>HIGHLIGHT</p>

                                        <h3 className="mb-2">Ulang Tahun Sekolah</h3>

                                        <p className="date">September 10, 2019</p>

                                        <div class="collapse" id="collapseExample">
                                            <p className="desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                        </div>

                                        <p className="mt-4 mb-0"><a data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">Lihat Selengkapnya</a> &nbsp; <i className="fa fa-long-arrow-right"></i></p>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div id="video">
                            <div className="container">
                                <p style={{ color: "#6c98e1" }}>VIDEO</p>
                                <div className="row mt-4">
                                    <div className="col-12 col-md-6">
                                        <VideoCard
                                            src={'https://s3.amazonaws.com/codecademy-content/courses/React/react_video-fast.mp4'} />
                                    </div>

                                    <div className="col-12 col-md-6">
                                        <VideoCard
                                            src={'https://s3.amazonaws.com/codecademy-content/courses/React/react_video-fast.mp4'} />
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