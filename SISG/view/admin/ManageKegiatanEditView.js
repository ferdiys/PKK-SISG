import React, { Component } from 'react'
import PageHeader from '../components/admin/PageHeader'
import TextAreaComponents from '../components/input/TextAreaWithLabel'
import ReusableButton from '../components/btn/ReusableButton'

import DatePicker from 'react-date-picker';

import '../../assets/scss/admin/admin.css';
import FormInputWithLabel from '../components/input/FormInputWithLabel'
import Loading from '../components/Loading';

export default class ManageKegiatanEditView extends Component {
  render() {
    return (
      <div id="edit-kegiatan">
        <PageHeader
          pageTitle="Manage Kegiatan Edit"
          subLink="Manage PPDB" />

        <div className="row no-gutter align-items-center mb-4">
          <div className="col-6">
            <h5 className="m-0">Thumbnail</h5>
          </div>
          <div className="col-6 text-right">

            <ReusableButton
              className="btn btn-danger px-4 ml-3"
              onClick={() => this.props.method.deleteKegiatan()}
              buttonText="Delete" />

          </div>
        </div>

        <div className="pic-wrapper">
          <img className="profile-pic" src={this.props.state.imageRef !== null ? this.props.state.imageRef : "https://images.unsplash.com/photo-1570238647998-b4da400b6db6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"} />
          <div className="mask">
            <img src={require("../../assets/images/add.png")} />
            <input type="file" name="myfile" onChange={(e) => this.props.method._setNewImage(e)} />
          </div>
        </div>

        <div className="w-100 mt-5 mb-3"></div>

        <div className="mt-4">

          <FormInputWithLabel
            for="txt-ekstra"
            label="Judul Kegiatan"
            type="text"
            className="form-control"
            onChange={(e) => this.props.method._setForm(e)}
            value={this.props.state.title}
            name="title" />

        </div>

        <div className="mt-4">

          <TextAreaComponents
            for="txt-desc"
            label="Deskripsi Singkat"
            name="description"
            onChange={(e) => this.props.method._setForm(e)}
            value={this.props.state.description}
            row="4" />

        </div>

        <div className="mt-4" className="datePicker">

          <DatePicker
            value={this.props.state.date}
            onChange={(e) => this.props.method.dateChanged(e)}
          />

        </div>

        <div className="d-flex justify-content-between my-4">
          <div></div>
          <div className="w-100">

            {
              this.props.state.isLoading === true
              ?
              <div className="ml-auto w-25 ">
                <Loading color="#e6be1e" />
              </div>
              :
              <div className="text-right">

                <ReusableButton
                  className="btn btn-secondary px-4"
                  onClick={this.props.state.pageStats === 'add' ? () => this.props.method.resetState() : () => this.props.method.getData()}
                  buttonText="Batal" />

                <ReusableButton
                  className="btn btn-primary px-4 ml-3"
                  onClick={this.props.state.pageStats === 'add' ? () => this.props.method.addKegiatan() : () => this.props.method.updateKegiatan()}
                  buttonText="Simpan" />

              </div>
            }
          </div>
        </div>
      </div> 
    )
  }
}
