import React, { Component } from 'react'
import EditEkstrakulikulerView from '../../view/admin/EditEkstrakulikulerView'

import { Extracurricular } from '../../model/MEkstrakurikuler'
import { toast } from 'react-toastify'
import { AuthKey } from '../../system/Collection'

export default class EditEkstrakulikuler extends Component {

    constructor(props) {
        super(props)

        this.state = {
            id: 0,
            title: '',
            imageRef: null, //for display only
            image: null, //image file
            date: new Date(),
            description: '',

            isImageUpdate: false,
            pageStats: 'add', //page status add or update data
            itemId: 0, // if update. for item id
            isLoading: false
        }

        this.method = {
            _setForm: this._setForm.bind(this),
            getData: this.getData.bind(this),
            _setNewImage: this._setNewImage.bind(this), //select image and display
            resetState: this.resetState.bind(this), //empty form
            updateExtracurricular: this.updateExtracurricular.bind(this),
            addExtracurricular: this.addExtracurricular.bind(this),
            dateChanged: this.dateChanged.bind(this),
            deleteData: this.deleteData.bind(this)
        }
    }

    componentDidMount = () => {
        this.pageStats()
    }

    updateExtracurricular = async () => {

        this.setState({ isLoading: !this.state.isLoading })

        const storage = localStorage.getItem(AuthKey.LOGIN_DATA)
        const parse = JSON.parse(storage)

        let headers = {
            token_type: parse.token_type,
            access_token: parse.access_token
        }

        let formData = null
        formData = new FormData();

        if (this.state.isImageUpdate === true) {

            formData.append('image', this.state.image);
            formData.append('title', this.state.title);
            formData.append('description', this.state.description);
            formData.append('_method', 'put');

        } else {

            formData.append('title', this.state.title);
            formData.append('description', this.state.description);
            formData.append('_method', 'put');

        }

        await Extracurricular.UPDATE(headers, this.state.itemId, formData).then(res => {

            if (Extracurricular.data.status === 200) {
                toast.success("Data berhasi diupdate")

                this.props.history.push('/admin/manage_ekstrakurikuler')
                this.setState({ isLoading: !this.state.isLoading })

            } else {
                toast.error("Data gagal diupdate, coba ulang kembali !")
                this.setState({ isLoading: !this.state.isLoading })
            }

            this.getData()
        })

            .catch(
                err => {
                    console.log("UPDATE FUNCT", err);
                    this.setState({ isLoading: !this.state.isLoading })
                }
            );

    }

    addExtracurricular = async () => {
        this.setState({ isLoading: !this.state.isLoading })

        /**
         * Parse Date format to yy/mm/dd
         */

        const monthParsed = (this.state.date.getMonth() + 1) < 10 ? 0 + '' + (this.state.date.getMonth() + 1) : (this.state.date.getMonth() + 1);
        const dayParsed = this.state.date.getDate() < 10 ? 0 + '' + this.state.date.getDate() : this.state.date.getDate();

        const parseDate = this.state.date.getFullYear() + '-' + monthParsed + '-' + dayParsed
        // console.log(parseDate, "PARSED DATE")

        /**
         * Header authorization for api
         */
        const storage = localStorage.getItem(AuthKey.LOGIN_DATA)
        const parse = JSON.parse(storage)

        let headers = {
            token_type: parse.token_type,
            access_token: parse.access_token
        }

        let formData = new FormData();
        formData.append('school_id', 1);
        formData.append('image', this.state.image);
        formData.append('title', this.state.title);
        formData.append('description', this.state.description);
        formData.append('dateFormed', parseDate);

        await Extracurricular.ADD(headers, formData).then(res => {

            if (Extracurricular.data.status === 201) {

                toast.success("Data berhasil disave")

                this.props.history.push('/admin/manage_ekstrakurikuler')

                this.setState({ isLoading: !this.state.isLoading })

            } else {
                toast.error("Data gagal disave, coba ulang kembali !")

                this.setState({ isLoading: !this.state.isLoading })
            }

        })

            .catch(
                err => {
                    this.setState({ isLoading: !this.state.isLoading })
                    console.log("ADD FUNCT", err);
                }
            );

    }

    deleteData = async () => {

        const storage = localStorage.getItem(AuthKey.LOGIN_DATA)
        const parse = JSON.parse(storage)

        let headers = {
            token_type: parse.token_type,
            access_token: parse.access_token
        }

        await Extracurricular.DELETE(headers, this.state.itemId).then(res => {

            if (Extracurricular.data.status === 200) {
                toast.success("Data berhasil dihapus")
                this.props.history.push('/admin/manage_ekstrakurikuler')
            } else {
                toast.error("Data gagal dihapus")
            }

        })

            .catch(
                err => {
                    console.log("DELETE FUNCT", err);
                }
            );
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

    getData = async () => {
        await Extracurricular.GET_ID(this.state.itemId).then(res => {

            if (Extracurricular.data) {

                console.log(Extracurricular.data.id)

                this.setState({
                    id: Extracurricular.data.id,
                    title: Extracurricular.data.title,
                    imageRef: Extracurricular.data.image,
                    description: Extracurricular.data.description,
                })


            } else {

                console.log("Error retrieve api")

            }

        })
            .catch(
                err => {
                    console.log("GET FUNCT", err);
                }
            );
    }

    /**
     * DECIDE IF PAGE IS FOR UPDATE DATA OR ADD DATA
     */
    pageStats = () => {
        const url = this.props.location.pathname
        const split = url.split('/')

        if (split[4]) {
            this.setState({ pageStats: "edit", itemId: split[4] }, () => this.getData())
        }
        else { console.log(this.state.pageStats) }

    }

    /**
     * Reset input / empty form
     */
    resetState = () => {
        this.setState({
            image: null,
            title: '',
            description: '',
            isImageUpdate: false,

        })
    }

    _setForm = e => {
        this.setState({
            [e.target.name]: [e.target.value].toString()
        })
    }

    dateChanged = e => {
        this.setState({
            date: e
        },
            // () => console.log(this.state.date, "SELECTED DATE")
        );
    };

    render() {
        return <EditEkstrakulikulerView state={this.state} method={this.method} />
    }
}
