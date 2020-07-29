import React, { Component } from 'react'

/**
 * Components
 */
import '../../../assets/scss/form-resgistration.css'
import INPUTRoundBackground from '../../components/input/INPUTRoundBackground'
import PrimaryBtn from '../../components/btn/PrimaryBtn'
import DatePicker from 'react-date-picker'

export default class DataDiri extends Component {
    render() {

        const stateProps = this.props.state;

        return (

            <div className="form-container container">

                <h2 className="text-center" >Data Diri </h2>

                *kosongi data bila tidak sesuai, setelah submit data tidak dapat diubah

                <div className="hr"></div>

                {/* Image */}
                <div className="tab-pane fade show active mb-5" id="restoran" role="tabpanel" aria-labelledby="foto-tab">
                    <div className="pic-wrapper">
                        <img className="profile-pic" src={this.props.state.fotoRef !== null ? this.props.state.fotoRef : "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"} />
                        <div className="mask">
                            <img src={require("../../../assets/images/add.png")} />
                            <input type="file" name="myfile" onChange={(e) => this.props.method.setNewImage(e)} />
                        </div>
                    </div>
                </div>

                <div className="mb-4">
                    <label>Nama Lengkap *</label>
                    <INPUTRoundBackground
                        name="nama_lengkap"
                        value={stateProps.nama_lengkap}
                        onChange={(e) => this.props.method.setForm(e)}
                    />
                </div>

                <div className="mb-4">
                    <label>No. NISN *</label>
                    <INPUTRoundBackground
                        name="nisn"
                        value={stateProps.nisn}
                        onChange={(e) => this.props.method.setForm(e)} />
                </div>

                <div className="mb-4">
                    <label>No. STTB/Ijazah *</label>
                    <INPUTRoundBackground
                        name="noijazah"
                        value={stateProps.noijazah}
                        onChange={(e) => this.props.method.setForm(e)} />
                </div>

                <div className="mb-4">
                    <label>Nem *</label>
                    <INPUTRoundBackground
                        maxLength="8"
                        name="nem"
                        value={stateProps.nem}
                        onChange={(e) => this.props.method.setForm(e)} />
                </div>

                <div className="mb-4">
                    <div class="inputGroup" onChange={(e)=>this.props.method.setForm(e)}>
                        <input id="kelamin1" name="kelamin" value="Laki-laki" type="radio" />
                        <label for="kelamin1">Laki Laki</label>
                    </div>
                    <div class="inputGroup" onChange={(e)=>this.props.method.setForm(e)}>
                        <input id="kelamin2" name="kelamin" value="Perempuan" type="radio" />
                        <label for="kelamin2">Perempuan</label>
                    </div>
                </div>

                <div className="row no-gutter mb-4">

                    <div className="col-12 col-md-4">
                        <label>Tanggal Lahir *</label>
                        <br></br>
                        <DatePicker
                            value={this.props.state.tanggalLahir}
                            onChange={(e) => this.props.method.dateChanged(e)}
                        />
                    </div>

                    <div className="col-12 col-md-4">
                        <label>Tempat Lahir *</label>
                        <INPUTRoundBackground
                            name="tempat_lahir"
                            value={stateProps.tempat_lahir}
                            onChange={(e) => this.props.method.setForm(e)} />
                    </div>

                </div>

                <div className="mb-4">
                    <label>Alamat *</label>
                    <INPUTRoundBackground
                        name="alamat"
                        value={stateProps.alamat}
                        onChange={(e) => this.props.method.setForm(e)} />
                </div>

                <div className="mb-4">
                    <label>Asal Sekolah *</label>
                    <INPUTRoundBackground
                        name="asal_sekolah"
                        value={stateProps.asal_sekolah}
                        onChange={(e) => this.props.method.setForm(e)} />
                </div>

                <div className="row no-gutter mb-4">
                    <div className="col-12 col-md-4">
                        <label>Jumlah Saudara Kandung</label>
                        <INPUTRoundBackground
                            name="saudara_kandung"
                            type="number"
                            value={stateProps.saudara_kandung}
                            onChange={(e) => this.props.method.setForm(e)} />
                    </div>
                    <div className="col-12 col-md-4">
                        <label>Jumlah Saudara Tiri </label>
                        <INPUTRoundBackground
                            name="saudara_tiri"
                            type="number"
                            value={stateProps.tiri}
                            onChange={(e) => this.props.method.setForm(e)} />
                    </div>
                </div>

                {/* <div className="mb-4">
                    <div class="inputGroup">
                        <input id="radio1" name="yatim" type="radio" />
                        <label for="radio1">Yatim</label>
                    </div>
                    <div class="inputGroup">
                        <input id="radio2" name="piatu" type="radio" />
                        <label for="radio2">Piatu</label>
                    </div>
                </div> */}

                <div className="mb-4">
                    <label>Tinggal bersama</label>
                    <div>
                        <div class="inputGroup" onChange={(e)=>this.props.method.setForm(e)}>
                            <input id="tinggal1" name="tinggal" value="Orang tua" type="radio" />
                            <label for="tinggal1">Orang tua</label>
                        </div>
                        <div class="inputGroup" onChange={(e)=>this.props.method.setForm(e)}>
                            <input id="tinggal2" name="tinggal" value="Wali" type="radio" />
                            <label for="tinggal2">Wali</label>
                        </div>
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
                                onClick={() => this.props.method.stepCompleted()} 
                                />
                        </div>
                    </div>
                </div>

            </div>

        )
    }
}
