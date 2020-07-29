import React, { Component } from 'react'
import PageHeader from '../components/admin/PageHeader'
import FormInput from '../components/input/FormInputWithLabel'
import ReusableButton from '../components/btn/ReusableButton'

export default class EditManageDaftarSiswaView extends Component {
  render() {
    return (
      <div className="px-4">
        <PageHeader
        subLink="Manage Sekolah"
        pageTitle="Manage Daftar Calon Siswa" />

        <div id="edit-daftar-content">

          <div className="header">
            <a href="" className="mr-4">Data Calon Siswa</a>
            <a href="" className="mr-4">Data Orang Tua</a>
            <a href="" className="mr-4">Data Asal Sekolah</a>
            <a href="" className="mr-4">Data Berkas</a>
          </div>
          
          <hr></hr>

          <div className="content mt-4">

            <center><h3 className="Title">Data Calon Siswa</h3></center>

            <FormInput
              for="name"
              label="Nama Lengkap"
              type="text"
              className="form-control"
              name="name" />

            <FormInput
              for="dob"
              label="Tanggal Lahir"
              type="date"
              className="form-control"
              name="dob" />

            <FormInput
              for="telp"
              label="No Telp"
              type="number"
              className="form-control"
              name="no-telp" />

            <FormInput
              for="email"
              label="Alamat email"
              type="email"
              className="form-control"
              name="email" />

            <FormInput
              for="alamat"
              label="Alamat Rumah"
              type="text"
              className="form-control"
              name="alamat" />

            <div className="navbar justify-content-between">
              <div></div>

              <div>
                <ReusableButton
                  className="btn btn-secondary btn-md px-4 mr-3"
                  onClick=""
                  buttonText="Batal" />

                <ReusableButton
                  className="btn btn-primary btn-md px-4"
                  onClick=""
                  buttonText="Simpan" />
              </div>
            </div>
            
          </div>


        </div>
      </div>
    )
  }
}
