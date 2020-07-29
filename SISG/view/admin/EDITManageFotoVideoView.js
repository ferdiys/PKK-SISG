import React, { Component } from 'react';
import PageHeader from '../components/admin/PageHeader';

import '../../assets/scss/admin/admin.css';
import TextAreaComponents from '../components/input/TextAreaWithLabel'
import FormInputWithLabel from '../components/input/FormInputWithLabel';
import ReusableButton from '../components/btn/ReusableButton';
import VideoCard from '../components/card/VideoCard';

let reader = new FileReader();

export default class EDITManageFotoVideoView extends Component {

    constructor(props) {
        super(props)

        this.state = {
            photo: null,
            video: null,
            videoFile: []
        }
    }

    render() {
        return (
            <div id="edit-manage-foto">
                <PageHeader
                    subLink="Manage Sekolah"
                    pageTitle="Edit Foto / Video" />

                <div className="row no-gutter mt-4">

                    <div className="col-12 col-md-5 col-lg-3">

                        <ul className="nav nav-tabs" id="myTab" role="tablist">
                            <li className="nav-item">
                                <a className="nav-link active" id="foto-tab" data-toggle="tab" href="#restoran" role="tab" aria-controls="restoran" aria-selected="true">Foto</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" id="video-tab" data-toggle="tab" href="#makanan" role="tab" aria-controls="makanan" aria-selected="false">Video</a>
                            </li>
                        </ul>
                        <div className="tab-content mt-4" id="myTabContent">
                            {/* Image */}
                            <div className="tab-pane fade show active" id="restoran" role="tabpanel" aria-labelledby="foto-tab">
                                <div className="pic-wrapper">
                                    <img className="profile-pic" src={this.props.state.photoRef !== null ? this.props.state.photoRef : "https://images.unsplash.com/photo-1492560704044-e15259ca1c61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"} />
                                    <div className="mask">
                                        <img src={require("../../assets/images/add.png")} />
                                        <input type="file" name="myfile" onChange={(e) => this.props.method.setNewImage(e)} />
                                    </div>
                                </div>
                            </div>
                            {/* Video */}
                            <div className="tab-pane fade" id="makanan" role="tabpanel" aria-labelledby="video-tab">
                                <div className="vid-wrapper">
                                    <VideoCard src={this.props.state.videoRef} />
                                    {
                                        this.props.state.video === null
                                            ?
                                            <div className="mask">
                                                <img src={require("../../assets/images/add.png")} />
                                                <input id="video-play" type="file" name="myfile" onChange={(e) => this.props.method.setNewVideo(e)} />
                                            </div>
                                            :
                                            <div className="select-file text-center">
                                                <button>Upload Other</button>
                                                <input id="video-play" type="file" name="myfile" onChange={(e) => this.props.method.setNewVideo(e)} />
                                            </div>
                                    }

                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="col-12 col-md-7 col-lg-9">

                        <FormInputWithLabel
                            for="txt-tahun"
                            label="Sub-Judul"
                            type="text"
                            className="form-control mb-3"
                            name="judul" />

                        <FormInputWithLabel
                            for="txt-tahun"
                            label="Judul"
                            type="text"
                            className="form-control"
                            name="subtitle" />

                        <TextAreaComponents
                            for="txt-desc"
                            label="Deskripsi konten"
                            name="description"
                            row="4" />
                    </div>

                    <div className="col-12 text-right">
                        <ReusableButton
                            className="btn btn-success px-4 my-4"
                            onClick={() => this.props.method.goToPage("manage_fotovideo/edit")}
                            buttonText="Submit" />
                    </div>

                </div>


            </div>
        )
    }
}
