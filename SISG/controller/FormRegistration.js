import React, { Component } from 'react'
import FormRegistrationPPDB from '../view/general/PPDB/DataDiri'

/**
 * Components
 */
import '../assets/scss/form-resgistration.css'
import Navbar from '../view/components/Navbar'
import Footer from '../view/components/Footer'
import SubNavbar from '../view/components/SubNavbar'
import DataDiri from '../view/general/PPDB/DataDiri'
import { ICON } from '../assets/Images'
import DataSekolah from '../view/general/PPDB/DataSekolah'
import DataOrangTua from '../view/general/PPDB/DataOrangTua'
import Complete from '../view/general/PPDB/Complete'
/**
 * PROGRESS BAR
 */
import { ProgressBar, Step } from 'react-step-progress-bar'
import "react-step-progress-bar/styles.css";
import { PPDBUser } from '../model/MPPDBUser'
import { toast } from 'react-toastify'
import { PPDBOrtu } from '../model/MPPDBOrtu'

export default class FormRegistration extends Component {

    constructor(props) {

        super(props)

        this.state = {
            tanggalLahir: new Date(),
            tanggalAyah: new Date(),
            tanggalIbu: new Date(),
            tanggalWali: new Date(),

            percentCompleted: 49,
            page: 1,

            /**
             * User
             */
            foto: null,
            fotoRef: null, // for display
            nama_lengkap: null,
            nisn: null,
            nem: null,
            noijazah: null,
            kelamin: null, //Laki-laki / Perempuan
            tempat_lahir: null,
            tl: null,
            asal_sekolah: null,
            saudara_kandung: null,
            saudara_tiri: null,
            tinggal: null, //Orang Tua / Kos / Asrama / Wali
            alamat: null,

            /**
             * Sekolah
             */
            jarak: null,
            transportasi: null, //'Jalan Kaki','Kendaraan Umum','Diantar-Jemput','Kereta Api','Pesawat Terbang','Sepeda'
            lama_sd: null,

            /**
             * Parent
             */
            nama_ayah: null,
            nama_ibu: null,
            nama_wali: null,

            ttl_ayah: null,
            ttl_ibu: null,
            ttl_wali: null,

            pekerjaan_ayah: null,
            pekerjaan_ibu: null,
            pekerjaan_wali: null,

            alamat: null,
            phone: null,
        }

        this.method = {
            setNewImage: this._setNewImage.bind(this),
            goToPage: this.goToPage.bind(this),
            stepCompleted: this.stepCompleted.bind(this),
            stepPrevious: this.stepPrevious.bind(this),
            setForm: this._setForm.bind(this),
            dateChanged: this.dateChanged.bind(this),
            RegisterPPDB: this.RegisterPPDB.bind(this),

            dateChangedAyah: this.dateChangedAyah.bind(this),
            dateChangedIbu: this.dateChangedIbu.bind(this),
            dateChangedWali: this.dateChangedWali.bind(this),
        }

    }

    componentDidMount() {
        window.scrollTo(0, 0)
    }

    RegisterPPDB = async () => {
        console.log(this.state)

        let formData = null
        formData = new FormData();

        formData.append("ppdb_id", 1)
        formData.append("foto", this.state.foto)
        formData.append("nama_lengkap", this.state.nama_lengkap)
        formData.append("nisn", this.state.nisn)
        formData.append("nem", this.state.nem)
        formData.append("noijazah", this.state.noijazah)
        formData.append("kelamin", this.state.kelamin)
        formData.append("tempat_lahir", this.state.tempat_lahir)
        formData.append("tl", this.state.tl)
        formData.append("asal_sekolah", this.state.asal_sekolah)
        formData.append("saudara_kandung", this.state.saudara_kandung)
        formData.append("saudara_tiri", this.state.saudara_tiri)
        formData.append("tinggal", this.state.tinggal)
        formData.append("alamat", this.state.alamat)
        formData.append("agama_id", 1)

        formData.append("jarak", this.state.jarak)
        formData.append("lama_sd", this.state.lama_sd)
        formData.append("transportasi", this.state.transportasi)
        formData.append("agama_id", 1)

        await PPDBUser.REGISTER(formData).then(res => {

            if (PPDBUser.data.ppdbuser_id) {

                this.registerOrangTua(PPDBUser.data.ppdbuser_id)

            } else {
                toast('Gagal Registrasi. Mohon ulangi kembali')
            }

        })
            .catch(
                err => {
                    console.log("PPDB USEr FUNCT", err);
                    toast.error("Server Sibuk, Mohon coba lagi beberapa saat nanti")
                }
            );

    }

    registerOrangTua = async (id) => {

        let formData = null
        formData = new FormData();

        formData.append("ppdbuser_id", id)
        formData.append("nama_ayah", this.state.nama_ayah)
        formData.append("nama_ibu", this.state.nama_ibu)
        formData.append("nama_wali", this.state.nama_wali)
        formData.append("ttl_ayah", this.state.ttl_ayah)
        formData.append("ttl_ibu", this.state.ttl_ibu)
        formData.append("ttl_wali", this.state.ttl_wali)
        formData.append("pekerjaan_ayah", this.state.pekerjaan_ayah)
        formData.append("pekerjaan_ibu", this.state.pekerjaan_ibu)
        formData.append("pekerjaan_wali", this.state.pekerjaan_wali)
        formData.append("alamat", this.state.alamat)
        formData.append("phone", this.state.phone)

        await PPDBOrtu.REGISTER(formData).then(res => {

            if (PPDBOrtu.data === 'Berhasil menambah data ortu') {
                toast.success("Anda telah terdaftar")
                this.setState({ page: this.state.page + 1 })
            } else {
                toast.warn("Server sibuk")
            }

        })
            .catch(
                err => {
                    console.log("PPDB ORTU FUNCT", err);
                    toast.error("Server Sibuk, Mohon coba lagi beberapa saat nanti")
                }
            );

    }

    /**
     * Display Selected image
     */
    _setNewImage = (e) => {

        if (e.target.files[0].size <= 2000000) {

            this.setState({
                foto: e.target.files[0]
            })

            if (e.target.files[0]) {

                this.setState({
                    fotoRef: URL.createObjectURL(e.target.files[0]),
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

    goToPage = (request) => {
        this.props.history.push(`/${request}`)
    }

    _setForm = e => {
        this.setState({
            [e.target.name]: [e.target.value].toString()
        })
    }

    dateChangedAyah = e => {

        const dayParsed = e.getDate() < 10 ? 0 + '' + e.getDate() : e.getDate()
        const parseDate = e.getFullYear() + '-' + (e.getMonth() + 1) + '-' + dayParsed

        this.setState({
            tanggalAyah: e,
            ttl_ayah: parseDate
        },
            // () => console.log(this.state.date, "SELECTED DATE")
        );
    };

    dateChangedIbu = e => {

        const dayParsed = e.getDate() < 10 ? 0 + '' + e.getDate() : e.getDate()
        const parseDate = e.getFullYear() + '-' + (e.getMonth() + 1) + '-' + dayParsed

        this.setState({
            tanggalIbu: e,
            ttl_ibu: parseDate
        },
            // () => console.log(this.state.date, "SELECTED DATE")
        );
    };

    dateChangedWali = e => {

        const dayParsed = e.getDate() < 10 ? 0 + '' + e.getDate() : e.getDate()
        const parseDate = e.getFullYear() + '-' + (e.getMonth() + 1) + '-' + dayParsed

        this.setState({
            tanggalWali: e,
            ttl_wali: parseDate
        },
            // () => console.log(this.state.date, "SELECTED DATE")
        );
    };

    dateChanged = e => {

        const dayParsed = e.getDate() < 10 ? 0 + '' + e.getDate() : e.getDate()
        const parseDate = e.getFullYear() + '-' + (e.getMonth() + 1) + '-' + dayParsed

        this.setState({
            tanggalLahir: e,
            tl: parseDate
        },
            // () => console.log(this.state.date, "SELECTED DATE")
        );
    };

    /**
     * Progress Status
     */
    stepPrevious = () => {
        if (this.state.percentCompleted !== 49) {
            this.setState({
                page: this.state.page - 1,
                percentCompleted: this.state.percentCompleted - 49
            })
        }
        window.scrollTo(0, 0)
    }

    stepCompleted = () => {
        if (this.state.percentCompleted < 100) {
            this.setState({
                page: this.state.page + 1,
                percentCompleted: this.state.percentCompleted + 49
            })
        }
        window.scrollTo(0, 0)
    }

    /**
     * SetPage
     */

    setScene = (key) => {
        switch (key) {
            case 1:
                return <DataDiri method={this.method} state={this.state} />
            case 2:
                return <DataSekolah method={this.method} state={this.state} />
            case 3:
                return <DataOrangTua method={this.method} state={this.state} />
            case 4:
                return <Complete method={this.method} state={this.state} />
            default:
                return <DataDiri method={this.method} state={this.state} />
        }
    }

    render() {

        return <div>

            <Navbar />

            <SubNavbar />

            <div id="form-registration">

                {
                    this.state.page <= 3
                        ?

                        <div className="progress-container">

                            <div className="container">

                                {/* PROGRESSBAR */}
                                <div className="wrapper">

                                    <ProgressBar
                                        percent={this.state.percentCompleted}
                                        filledBackground="linear-gradient(to right, #2F8EED, #2F8EED)"
                                    >
                                        <Step transition="scale">
                                            {({ accomplished }) => (
                                                <img
                                                    style={{ filter: `grayscale(${accomplished ? 0 : 80}%)` }}
                                                    width="60"
                                                    src={ICON.PROGRESS_STEP_1}
                                                />
                                            )}
                                        </Step>
                                        <Step transition="scale">
                                            {({ accomplished }) => (
                                                <img
                                                    style={{ filter: `grayscale(${accomplished ? 0 : 80}%)` }}
                                                    width="60"
                                                    src={ICON.PROGRESS_STEP_2}
                                                />
                                            )}
                                        </Step>
                                        <Step transition="scale">
                                            {({ accomplished }) => (
                                                <img
                                                    style={{ filter: `grayscale(${accomplished ? 0 : 80}%)` }}
                                                    width="60"
                                                    src={ICON.PROGRESS_STEP_3}
                                                />
                                            )}
                                        </Step>
                                    </ProgressBar>

                                </div>

                            </div>

                        </div>

                        :
                        <div></div>
                }

                {this.setScene(this.state.page)}

            </div>

            <Footer />

        </div>
    }
}
