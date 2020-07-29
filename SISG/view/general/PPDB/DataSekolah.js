import React, { Component } from 'react'

/**
 * Components
 */
import '../../../assets/scss/form-resgistration.css'
import INPUTRoundBackground from '../../components/input/INPUTRoundBackground'
import PrimaryBtn from '../../components/btn/PrimaryBtn'
import DatePicker from 'react-date-picker'

export default class DataSekolah extends Component {
    render() {

        const stateProps = this.props.state;

        return (

            <div className="form-container container">

                <h2 className="text-center" >Data Sekolah </h2>

                *kosongi data bila tidak sesuai, setelah submit data tidak dapat diubah

                <div className="hr"></div>

                <div className="row no-gutter mb-4">
                    <div className="col-12 col-md-6 mb-3">
                        <label>Jarak tempat tinggal ke sekolah (SMP SUNAN GIRI) *</label>
                        <INPUTRoundBackground
                            name="jarak"
                            type="number"
                            value={stateProps.jarak}
                            onChange={(e) => this.props.method.setForm(e)} />
                        *km
                    </div>
                    <div className="col-12 col-md-6">
                        <label>Lama belajar di Sekolah dasar / MI *</label>
                        <INPUTRoundBackground
                            name="lama_sd"
                            type="number"
                            value={stateProps.lama_sd}
                            onChange={(e) => this.props.method.setForm(e)} />
                        *tahun
                    </div>
                </div>

                <div className="mb-4">
                    <label>Ke sekolah berkendaraan / jalan kaki</label>
                    <div class="input-group" style={{maxWidth:300}}>
                        <select class="custom-select" name="transportasi" id="inputGroupSelect01" onChange={(e) => this.props.method.setForm(e)}>
                            <option selected>Pilih...</option>
                            <option value="Jalan Kaki">Jalan Kaki</option>
                            <option value="Kendaraan Umum">Kendaraan Umum</option>
                            <option value="Diantar-Jemput">Diantar-Jemput</option>
                            <option value="Kereta Api">Kereta Api</option>
                            <option value="Pesawat Terbang">Pesawat Terbang</option>
                            <option value="Sepeda">Sepeda</option>
                        </select>
                    </div>
                </div>

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
                                title="lanjut"
                                onClick={() => this.props.method.stepCompleted()} />
                        </div>
                    </div>
                </div>

            </div>

        )
    }
}
