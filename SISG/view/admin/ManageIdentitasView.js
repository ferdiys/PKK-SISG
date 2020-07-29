import React, { Component } from 'react'
import PageHeader from '../components/admin/PageHeader'

import TextAreaComponents from '../components/input/TextAreaWithLabel'
import ReusableButton from '../components/btn/ReusableButton'
import FormInputWithLabel from '../components/input/FormInputWithLabel'
import INPUTRoundBackground from '../components/input/INPUTRoundBackground'
import Loading from '../components/Loading'

export default class ManageIdentitasView extends Component {
  render() {
    return (
      <div>
        <PageHeader
          subLink="Manage Sekolah"
          pageTitle="Manage Identitas" />

        <div id="identitas-content">

          <div className="row">
            <div className="col-lg-4 col-md-12 col-sm-12">

              <div className="pic-wrapper">
                <img className="profile-pic" src={this.props.state.logoRef !== null ? this.props.state.logoRef : "https://images.unsplash.com/photo-1494621622354-777dad9c18e4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"} />
                <div className="mask">
                  <img src={require("../../assets/images/add.png")} />
                  <input type="file" name="myfile" onChange={(e) => this.props.method.setNewImage(e)} />
                </div>
              </div>
              <label style={{ opacity: .8, fontSize: 14 }}>file maksimal 2 mb</label>

              <FormInputWithLabel
                for="txt-school"
                label="Nama Sekolah"
                type="text"
                value={this.props.state.nama}
                onChange={(e) => this.props.method._setForm(e)}
                className="form-control"
                name="nama" />

              <FormInputWithLabel
                for="txt-address"
                label="Alamat Sekolah"
                type="text"
                value={this.props.state.alamat}
                onChange={(e) => this.props.method._setForm(e)}
                className="form-control"
                name="alamat" />

              <FormInputWithLabel
                for="txt-email"
                label="Email"
                type="email"
                value={this.props.state.email}
                onChange={(e) => this.props.method._setForm(e)}
                className="form-control"
                name="email" />

              <FormInputWithLabel
                for="txt-telp"
                label="No Telp"
                type="text"
                value={this.props.state.phone}
                onChange={(e) => this.props.method._setForm(e)}
                className="form-control"
                name="phone" />

              <FormInputWithLabel
                for="txt-fax"
                label="Fax"
                type="text"
                value={this.props.state.faximail}
                onChange={(e) => this.props.method._setForm(e)}
                className="form-control"
                name="faximail" />

              <FormInputWithLabel
                for="txt-fax"
                label="Link Facebook"
                type="text"
                value={this.props.state.facebook}
                onChange={(e) => this.props.method._setForm(e)}
                className="form-control"
                name="facebook" />

              <FormInputWithLabel
                for="txt-fax"
                label="Link Youtube"
                type="text"
                value={this.props.state.youtube}
                onChange={(e) => this.props.method._setForm(e)}
                className="form-control"
                name="youtube" />

              <FormInputWithLabel
                for="txt-fax"
                label="Link Instagram"
                type="text"
                value={this.props.state.instagram}
                onChange={(e) => this.props.method._setForm(e)}
                className="form-control"
                name="instagram" />

            </div>

            {/* RIGHT SIDE */}
            <div className="col-lg-8 col-md-12 col-sm-12">

              <TextAreaComponents
                for="txt-desc"
                label="Deskripsi Sekolah"
                value={this.props.state.deskripsi}
                onChange={(e) => this.props.method._setForm(e)}
                name="deskripsi"
                row="4" />

              <TextAreaComponents
                for="txt-visi"
                label="Visi"
                value={this.props.state.visi}
                onChange={(e) => this.props.method._setForm(e)}
                name="visi"
                row="4" />
              <label style={{ opacity: .8, fontSize: 14 }}>tanda " ; " berarti enter atau membuat line baru</label>

              <TextAreaComponents
                for="txt-misi"
                label="Misi"
                value={this.props.state.misi}
                onChange={(e) => this.props.method._setForm(e)}
                name="misi"
                row="4" />
              <label style={{ opacity: .8, fontSize: 14 }}>tanda " ; " berarti enter atau membuat line baru</label>

              <nav className="navbar justify-content-between p-0">
                <div></div>

                {
                  this.props.state.isLoading === false
                    ?
                    <div>
                      <ReusableButton
                        className="btn btn-secondary px-4"
                        onClick={() => this.props.method.getSchoolIdentity()}
                        buttonText="Batal" />

                      <ReusableButton
                        className="btn btn-primary px-4 ml-3"
                        onClick={() => this.props.method.updateSchoolIdentity()}
                        buttonText="Simpan" />
                    </div>
                    :
                    <div className="ml-auto w-25 ">
                      <Loading color="#e6be1e" />
                    </div>
                }

              </nav>

            </div>
          </div>

        </div>

      </div>
    )
  }
}
