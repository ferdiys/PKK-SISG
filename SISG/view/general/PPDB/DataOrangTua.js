import React, { Component } from 'react'

/**
 * Components
 */
import '../../../assets/scss/form-resgistration.css'
import INPUTRoundBackground from '../../components/input/INPUTRoundBackground'
import PrimaryBtn from '../../components/btn/PrimaryBtn'
import DatePicker from 'react-date-picker'

export default class DataOrangTua extends Component {
    render() {

        const stateProps = this.props.state;

        return (

            <div className="form-container container">

                <h2 className="text-center" >Data Orang Tua </h2>

                *kosongi data bila tidak sesuai, setelah submit data tidak dapat diubah

                <div className="hr"></div>

                <div className="mb-4">
                    <label>Nama Ayah *</label>
                    <INPUTRoundBackground
                        name="nama_ayah"
                        value={stateProps.nama_ayah}
                        onChange={(e) => this.props.method.setForm(e)} />
                </div>

                <div className="mb-4">
                    <label>Nama Ibu *</label>
                    <INPUTRoundBackground
                        name="nama_ibu"
                        value={stateProps.nama_ibu}
                        onChange={(e) => this.props.method.setForm(e)} />
                </div>

                <div className="mb-4">
                    <label>Nama Wali </label>
                    <INPUTRoundBackground
                        name="nama_wali"
                        value={stateProps.nama_wali}
                        onChange={(e) => this.props.method.setForm(e)} />
                </div>

                <div className="mb-4">
                    <label>Alamat tempat tinggal orang tua / wali</label>
                    <INPUTRoundBackground
                        name="alamat"
                        value={stateProps.alamat}
                        onChange={(e) => this.props.method.setForm(e)} />
                    *Salah satu
                </div>

                <div className="mb-4">
                    <label>No Handphone</label>
                    <INPUTRoundBackground
                        name="phone"
                        value={stateProps.phone}
                        onChange={(e) => this.props.method.setForm(e)} />
                    *Salah satu
                </div>

                <div className="row no-gutter mb-4">
                    <div className="col-12 col-md-4 mb-4">
                        <label>Tanggal lahir Ayah *</label>
                        <br></br>
                        <DatePicker
                            value={this.props.state.tanggalAyah}
                            onChange={(e) => this.props.method.dateChangedAyah(e)}
                        />
                    </div>
                    <div className="col-12 col-md-4  mb-4">
                        <label>Tanggal lahir ibu *</label>
                        <br></br>
                        <DatePicker
                            value={this.props.state.tanggalIbu}
                            onChange={(e) => this.props.method.dateChangedIbu(e)}
                        />
                    </div>
                    <div className="col-12 col-md-4 mb-4">
                        <label>Tanggal lahir wali</label>
                        <br></br>
                        <DatePicker
                            value={this.props.state.tanggalWali}
                            onChange={(e) => this.props.method.dateChangedWali(e)}
                        />
                    </div>

                </div>


                <div className="mb-4">
                    <label>Pekerjaan ayah *</label>
                    <INPUTRoundBackground
                        name="pekerjaan_ayah"
                        value={stateProps.pekerjaan_ayah}
                        onChange={(e) => this.props.method.setForm(e)} />
                </div>

                <div className="mb-4">
                    <label>Pekerjaan ibu *</label>
                    <INPUTRoundBackground
                        name="pekerjaan_ibu"
                        value={stateProps.pekerjaan_ibu}
                        onChange={(e) => this.props.method.setForm(e)} />
                </div>

                <div className="mb-4">
                    <label>Pekerjaan wali *</label>
                    <INPUTRoundBackground
                        name="pekerjaan_wali"
                        value={stateProps.pekerjaan_wali}
                        onChange={(e) => this.props.method.setForm(e)} />
                </div>

                *Pastikan semua data benar
                {/* SEPARATOR */}

                <div className="hr"></div>

                <div className="text-center w-100">
                    <div className="row no-gutter align-items-center">
                        <div className="col-12 col-md-6">
                            <h6 style={{ cursor: 'pointer' }} className="m-0" onClick={() => this.props.method.stepPrevious()}>
                                Kembali
                                    </h6>
                        </div>
                        <div className="col-12 col-md-6">
                            <PrimaryBtn shadowed
                                title="Simpan"
                                onClick={() => this.props.method.RegisterPPDB()} />
                        </div>
                    </div>
                </div>

            </div >

        )
    }
}
