import React, { Component } from 'react'
import PageHeader from '../components/admin/PageHeader'
import GalleryCard from '../components/card/GalleryCard'
import ReusableButton from '../components/btn/ReusableButton'
import VideoCard from '../components/card/VideoCard'

export default class ManageFotoVideoView extends Component {
    render() {
        return (
            <div>

                <PageHeader
                    subLink="Manage Sekolah"
                    pageTitle="Manage Video & Foto" />

                <div className="row no-gutter mt-4 align-items-center">

                    <div className="col-6">
                        <h5 className="m-0">Foto</h5>
                    </div>
                    <div className="col-6 text-right">
                        <ReusableButton
                            className="btn btn-success px-3"
                            onClick={() => this.props.method.goToPage("manage_fotovideo/edit")}
                            buttonText="Tambah" />
                    </div>

                    <div className="col-12 mt-4 mb-2"></div>

                    <div className="col-12 col-md-6 col-lg-4 mb-4">
                        <GalleryCard
                            image={"https://images.unsplash.com/photo-1416339134316-0e91dc9ded92?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"}
                            kind={"EVENT SEKOLAH"}
                            title={"Ulang Tahun Sekolah"}
                            desc={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}
                        />
                    </div>
                    <div className="col-12 col-md-6 col-lg-4 mb-4">
                        <GalleryCard
                            image={"https://images.unsplash.com/photo-1416339134316-0e91dc9ded92?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"}
                            kind={"EVENT SEKOLAH"}
                            title={"Ulang Tahun Sekolah"}
                            desc={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}
                        />
                    </div>
                    <div className="col-12 col-md-6 col-lg-4 mb-4">
                        <GalleryCard
                            image={"https://images.unsplash.com/photo-1416339134316-0e91dc9ded92?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"}
                            kind={"EVENT SEKOLAH"}
                            title={"Ulang Tahun Sekolah"}
                            desc={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}
                        />
                    </div>

                    <div className="col-6">
                        <h5 className="m-0">Video</h5>
                    </div>
                    <div className="col-6 text-right">
                        <ReusableButton
                            className="btn btn-success px-3"
                            onClick={() => this.props.method.goToPage("manage_fotovideo/edit")}
                            buttonText="Tambah" />
                    </div>

                    <div className="col-12 mt-4 mb-2"></div>

                    <div className="col-12 col-md-6 col-lg-6 mb-4">
                        <VideoCard
                            onClick={() => this.props.method.goToPage("manage_fotovideo/edit")}
                        />
                    </div>
                    <div className="col-12 col-md-6 col-lg-6 mb-4">
                        <VideoCard
                            onClick={() => this.props.method.goToPage(console.log("CLICK"))} />
                    </div>

                </div>

            </div>
        )
    }
}
