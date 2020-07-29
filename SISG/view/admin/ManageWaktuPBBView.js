import React, { Component } from 'react'

import DatePicker from 'react-date-picker';

import FormInputWithLabel from '../components/input/FormInputWithLabel'
import PageHeader from '../components/admin/PageHeader'
import ReusableButton from '../components/btn/ReusableButton'
import Loading from '../components/Loading';

export default class ManageWaktuPBBView extends Component {
    render() {
        return (
            <div id="manage-waktuPPDB">
                <PageHeader
                    pageTitle="Jadwal Waktu Pendaftaran"
                    subLink="Manage PPDB" />

                <div className="row no-gutter my-3">
                    <div className="col-12 col-md-6">
                        <label>Batas Waktu Pendaftaran Dimulai &nbsp;&nbsp;</label>

                        {
                            this.props.state.editMode
                                ?
                                <DatePicker
                                    value={this.props.state.dateOpen}
                                    onChange={(e) => this.props.method.dateOpenChanged(e)}
                                />
                                :
                                <span className="text-view">{this.props.state.tanggal_buka}</span>
                        }

                    </div>
                    <div className="col-12 col-md-6">
                        <label>Batas Waktu Pendaftaran Ditutup &nbsp;&nbsp;</label>
                        {
                            this.props.state.editMode
                                ?
                                <DatePicker
                                    value={this.props.state.dateClose}
                                    onChange={(e) => this.props.method.dateCloseChanged(e)}
                                />
                                :
                                <span className="text-view">{this.props.state.tanggal_tutup}</span>
                        }

                    </div>
                </div>

                <div className="text-right mt-3">

                    {
                        this.props.state.isLoading
                            ?
                            <div> <Loading color="#e6be1e" /> </div>
                            :
                            this.props.state.editMode
                                ?
                                <div>
                                    <ReusableButton
                                        className="btn btn-secondary px-4 ml-3"
                                        onClick={() => this.props.method.editMode()}
                                        buttonText="Batal" />

                                    <ReusableButton
                                        className="btn btn-primary px-4 ml-3"
                                        onClick={() => this.props.method.update()}
                                        buttonText="Simpan" />
                                </div>
                                :
                                <ReusableButton
                                    className="btn btn-primary px-3 my-3 btn-width"
                                    onClick={() => this.props.method.editMode()}
                                    buttonText="Edit" />
                    }

                </div>

            </div>
        )
    }
}
