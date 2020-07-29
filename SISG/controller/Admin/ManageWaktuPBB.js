import React, { Component } from 'react'
import ManageWaktuPBBView from '../../view/admin/ManageWaktuPBBView'
import { ManagePPDB } from '../../model/MManagePPDB'
import { toast } from 'react-toastify'
import { AuthKey } from '../../system/Collection'

const month = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"]

export default class ManageWaktuPBB extends Component {

    constructor(props) {
        super(props)

        this.state = {
            editMode: false,
            dateOpen: new Date(),
            dateClose: new Date(),
            tanggal_buka: null,
            tanggal_tutup: null,
            isLoading: false
        }

        this.method = {
            getData: this.getData.bind(this),
            setForm: this._setForm.bind(this),
            editMode: this._editMode.bind(this),
            dateOpenChanged: this.dateOpenChanged.bind(this),
            dateCloseChanged: this.dateCloseChanged.bind(this),
            update: this.update.bind(this)
        }
    }

    componentDidMount = () => {
        this.getData()
    }

    getData = async () => {

        await ManagePPDB.GET().then(res => {

            if (ManagePPDB.data) {

                this.setState({
                    tanggal_buka: ManagePPDB.data[0].tanggal_buka,
                    tanggal_tutup: ManagePPDB.data[0].tanggal_tutup
                })
            }

        })

    }

    update = async () => {
        this.setState({ isLoading: !this.state.isLoading })

        const storage = localStorage.getItem(AuthKey.LOGIN_DATA)
        const parse = JSON.parse(storage)

        let headers = {
            token_type: parse.token_type,
            access_token: parse.access_token
        }

        var formData = {
            tanggal_buka: this.state.tanggal_buka,
            tanggal_tutup: this.state.tanggal_tutup,
        }

        await ManagePPDB.UPDATE(headers, formData).then(res => {

            if (ManagePPDB.data.status === 200) {

                toast.success("Berhasil update waktu ppdb")

            } else {

                toast.warn("Gagal update")

            }

            this.setState({ isLoading: !this.state.isLoading }, () => this._editMode())

        })
            .catch(
                err => {
                    console.log("UPDATE FUNCT", err);
                    this.setState({ isLoading: !this.state.isLoading })
                }
            );

    }

    dateOpenChanged = e => {

        const dayParsed = e.getDate() < 10 ? 0 + '' + e.getDate() : e.getDate()
        const parseDate = e.getFullYear() + '-' + (e.getMonth() + 1) + '-' + dayParsed

        this.setState({
            dateOpen: e,
            tanggal_buka: parseDate
        },
            // () => console.log(this.state.date, "SELECTED DATE")
        );
    };

    dateCloseChanged = e => {

        const dayParsed = e.getDate() < 10 ? 0 + '' + e.getDate() : e.getDate()
        const parseDate = e.getFullYear() + '-' + (e.getMonth() + 1) + '-' + dayParsed

        this.setState({
            dateClose: e,
            tanggal_tutup: parseDate
        },
            // () => console.log(this.state.date, "SELECTED DATE")
        );
    };

    _setForm = e => {
        this.setState({
            [e.target.name]: [e.target.value]
        })
    }

    _editMode = () => {
        this.setState({
            editMode: !this.state.editMode
        }, () => this.getData())
    }

    render() {

        return <ManageWaktuPBBView method={this.method} state={this.state} />

    }
}
