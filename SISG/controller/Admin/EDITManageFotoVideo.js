import React, { Component } from 'react'
import EDITManageFotoVideoView from '../../view/admin/EDITManageFotoVideoView'

export default class EDITManageFotoVideo extends Component {

    constructor(props) {
        super(props)

        this.state = {
            /**
             * Ref state only for displaying the selected file
             */
            photoRef: null,
            videoRef: null,

            video: null,
            photo: null
        }

        this.method = {
            setNewImage: this._setNewImage.bind(this),
            setNewVideo: this._setNewVideo.bind(this),
            setForm: this._setForm.bind(this)
        }
    }


    /**
     * Display Selected Video
     */
    _setNewVideo = (e) => {

        this.setState({
            video: e.target.files[0]
        })

        if (e.target.files[0]) {

            this.setState({
                videoRef: URL.createObjectURL(e.target.files[0])
            }, () => console.log(this.state.video, "VIDEO AFTERS"))

        } else {

            console.log("Not Supported")

        }

    }

    /**
     * Display Selected image
     */
    _setNewImage = (e) => {

        if (e.target.files[0].size <= 2000000) {

            this.setState({
                image: e.target.files[0]
            })

            if (e.target.files[0]) {

                this.setState({
                    imageRef: URL.createObjectURL(e.target.files[0]),
                    isImageUpdate: true
                },
                    // () => console.log(this.state.image, "Foto")
                )

            } else {

                toast.warn("Image not supported")

            }

        } else {

            toast.warn("Ukuran file lebih dari 2mb")

        }

    }

    _setForm = e => {

        this.setState({
            [e.target.name]: [e.target.value]
        })

    }

    render() {
        return <EDITManageFotoVideoView method={this.method} state={this.state} />
    }
}
