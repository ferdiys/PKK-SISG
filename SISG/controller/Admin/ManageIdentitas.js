import React, { Component } from 'react'
import ManageIdentitasView from '../../view/admin/ManageIdentitasView'
import { School } from '../../model/MSchool'
import { AuthKey } from '../../system/Collection'
import { toast } from 'react-toastify'
import { Token } from '../../model/MRefreshToken'

export default class ManageIdentitas extends Component {

    constructor(props) {
        super(props)

        this.state = {
            logo: null,
            logoRef: null,
            nama: '',
            deskripsi: '',
            alamat: '',
            visi: '',
            misi: '',
            email: '',
            phone: '',
            faximail: '',
            tanggal_berdiri: '',
            youtube: 'https://www.youtube.com/',
            instagram: 'https://www.instagram.com/',
            facebook: 'https://www.facebook.com/',
            _method: 'put',

            isImageUpdate: false,
            isLoading: false
        }

        this.method = {
            setNewImage: this._setNewImage.bind(this),
            _setForm: this._setForm.bind(this),
            getSchoolIdentity: this.getSchoolIdentity.bind(this),
            updateSchoolIdentity: this.updateSchoolIdentity.bind(this)
        }

    }

    componentDidMount = () => {
        this.getSchoolIdentity()
    }

    updateSchoolIdentity = async () => {

        this.setState({ isLoading: !this.state.isLoading })

        const storage = localStorage.getItem(AuthKey.LOGIN_DATA)
        const parse = JSON.parse(storage)

        let headers = {
            token_type: parse.token_type,
            access_token: parse.access_token
        }

        console.log(headers)

        let formData = null
        formData = new FormData();

        if (this.state.isImageUpdate === true) {
            formData.append('logo', this.state.logo);
        }

        formData.append('nama', this.state.nama);
        formData.append('deskripsi', this.state.deskripsi);
        formData.append('alamat', this.state.alamat);
        formData.append('visi', this.state.visi);
        formData.append('misi', this.state.misi);
        formData.append('email', this.state.email);
        formData.append('phone', this.state.phone);
        formData.append('faximial', this.state.faximail);
        formData.append('tanggal_berdiri', this.state.tanggal_berdiri);
        formData.append('instagram', this.state.instagram);
        formData.append('facebook', this.state.facebook);
        formData.append('youtube', this.state.youtube);
        formData.append('_method', 'put');

        await School.UPDATE(headers, formData).then(res => {

            this.setState({ logoRef: null })

            if (School.data.status === 200) {
                toast.success("Data berhasi diupdate")
            } else if (School.data.message === "Unauthenticated.") {

                this.refreshToken(headers)

            } else {
                toast.error("Data gagal diupdate, coba ulang kembali !")
            }

            this.setState({ isLoading: !this.state.isLoading })

            this.getSchoolIdentity()

        })
            .catch(
                err => {
                    console.log("UPDATE", err);
                    this.setState({ isLoading: !this.state.isLoading })
                }
            );

    }

    getSchoolIdentity = async () => {

        await School.GET().then(res => {

            if (School.data) {

                this.setState({
                    logoRef: School.data[0].logo,
                    nama: School.data[0].nama,
                    deskripsi: School.data[0].deskripsi,
                    alamat: School.data[0].alamat,
                    visi: School.data[0].visi,
                    misi: School.data[0].misi,
                    email: School.data[0].email,
                    phone: School.data[0].phone,
                    faximail: School.data[0].faximail,
                    tanggal_berdiri: School.data[0].tanggal_berdiri,
                    _method: 'put'
                },
                    () => localStorage.setItem("SUNANGIRI:LOGO", School.data[0].logo) //set logo locally
                )

            } else {

                console.log("Error retrieve api")

            }

        })
            .catch(
                err => {
                    console.log("GET", err);
                }
            );

    }

    refreshToken = async (headers) => {
        console.log("REFRESHIG TOKEN")
        this.setState({ isLoading: true })

        await Token.REFRESH(headers).then(res => {

            if (TOken.data.access_token && Token.data.token_type) {

                var loginData = {
                    access_token: Token.data.access_token,
                    token_type: Token.data.token_type,
                    expires_in: Token.data.expires_in
                }

                localStorage.setItem(AuthKey.LOGIN_DATA, JSON.stringify(loginData))

                if (localStorage.getItem(AuthKey.LOGIN_DATA)) {

                    this.setState({ isLoading: false })
                    this.updateSchoolIdentity();

                } else {
                    this.setState({
                        err_message: "Mohon ulangi lagi",
                        loading: !this.state.loading
                    })
                }

            } else {
                this.setState({ isLoading: false })
                toast.error("Token gagal direfresh. Mohon logout lalu login kembali")
            }

        })
    }

    /**
     * Display Selected image
     */
    _setNewImage = (e) => {

        if (e.target.files[0].size <= 2000000) {

            if (e.target.files[0]) {

                this.setState({
                    logo: e.target.files[0],
                    logoRef: URL.createObjectURL(e.target.files[0]),
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

    _setForm = (e) => {

        this.setState({
            [e.target.name]: [e.target.value].toString()
        })

    }

    render() {
        return <ManageIdentitasView state={this.state} method={this.method} />
    }
}
