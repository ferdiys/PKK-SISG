import React, { Component } from 'react'
import EditFasilitasView from '../../view/admin/EditFasilitasView'
import { Facility } from '../../model/MFacility'
import { AuthKey } from '../../system/Collection'
import { toast } from 'react-toastify'

export default class EditFasilitas extends Component {

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
            pageStats: "add", //page status add or update data
            itemId: 0, // if update. for item id
            isLoading: false
        }

        this.method = {
            _setForm: this._setForm.bind(this),
            getData: this.getData.bind(this),
            _setNewImage: this._setNewImage.bind(this), //select image and display
            resetState: this.resetState.bind(this), //empty form
            updateFacility: this.updateFacility.bind(this),
            addFacility: this.addFacility.bind(this),
            deleteData: this.deleteData.bind(this)
        }

    }

    componentDidMount = () => {
        this.pageStats()
    }

    deleteData = async () => {

        const storage = localStorage.getItem(AuthKey.LOGIN_DATA)
        const parse = JSON.parse(storage)

        let headers = {
            token_type: parse.token_type,
            access_token: parse.access_token
        }

        await Facility.DELETE(headers, this.state.itemId).then(res => {

            if (Facility.data.status === 200) {
                toast.success("Data berhasil dihapus")
                this.props.history.push('/admin/manage_fasilitas')
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

    updateFacility = async () => {

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

        await Facility.UPDATE(headers, this.state.itemId, formData).then(res => {

            if (Facility.data.status === 200) {
                toast.success("Data berhasi diupdate")

                this.props.history.push('/admin/manage_fasilitas')
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

    addFacility = async () => {

        this.setState({ isLoading: !this.state.isLoading })

        /**
         * Parse Date format to yy/mm/dd
         */

        const monthParsed = (this.state.date.getMonth() + 1) < 10 ? 0 + '' + (this.state.date.getMonth() + 1) : (this.state.date.getMonth() + 1);
        const dayParsed = this.state.date.getDate() < 10 ? 0 + '' + this.state.date.getDate() : this.state.date.getDate();

        const parseDate = this.state.date.getFullYear() + '-' + monthParsed + '-' + dayParsed

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

        await Facility.ADD(headers, formData).then(res => {

            if (Facility.data.status === 201) {

                toast.success("Data berhasil disave")

                this.props.history.push('/admin/manage_fasilitas')

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

    getData = async () => {

        const storage = localStorage.getItem(AuthKey.LOGIN_DATA)
        const parse = JSON.parse(storage)

        let headers = {
            token_type: parse.token_type,
            access_token: parse.access_token
        }


        await Facility.GET_ID(headers,this.state.itemId).then(res => {

            if (Facility.data) {

                // console.log(Facility.data.id)

                this.setState({
                    id: Facility.data.id,
                    title: Facility.data.title,
                    imageRef: Facility.data.image,
                    description: Facility.data.description,
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

    /**
     * DECIDE IF PAGE IS FOR UPDATE DATA OR ADD DATA
     */
    pageStats = () => {
        const url = this.props.location.pathname
        const split = url.split('/')

        if (split[4] !== undefined) {
            this.setState({ pageStats: "edit", itemId: split[4] }, () => this.getData())
        } else {
            console.log(this.state.pageStats)
        }

    }

    render() {
        return <EditFasilitasView state={this.state} method={this.method} />
    }
}
