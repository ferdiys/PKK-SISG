import React, { Component } from 'react'
import PageHeader from '../components/admin/PageHeader'

import InputWithIcon from '../components/input/INPUTWithIcon'

export default class ManageDaftarSiswaView extends Component {
  render() {
    return (
      <div>
        <div className="navbar justify-content-between p-0 ">
          <PageHeader 
            subLink="Manage Sekolah"
            pageTitle="Manage Daftar Siswa" />

          <div className="right-container">            
            {/* <InputWithIcon /> */}
          </div>
        </div>

        <div id="daftar-content" className="mt-3">
          <div className="card">
            <div className="card-body">
              <div className="table-list">
                <div className="table-heading">
                  <div className="navbar justify-content-between">
                    <h2 className="title m-0">Total Siswa Mendaftar (68)</h2>
                    <InputWithIcon />
                  </div>
                </div>
                <div className="table-content">
                  <table className="table table-borderless table-hover">
                    <thead>
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col">Nama Siswa</th>
                        <th scope="col">Asal Sekolah</th>
                        <th scope="col">Nilai</th>
                        <th scope="col">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                        <tr>
                          <td>#1</td>
                          <td>Crystal Smith</td>
                          <td>SD Sawojajar</td>
                          <td>97.5</td>
                          <td><a href="admin/edit_daftar_calon_siswa">Edit</a></td>
                        </tr>
                        <tr>
                          <td>#2</td>
                          <td>Crystal Smith</td>
                          <td>SD Sawojajar</td>
                          <td>97.5</td>
                          <td><a href="/edit_daftar_calon_siswa">Edit</a></td>
                        </tr>
                        <tr>
                          <td>#3</td>
                          <td>Crystal Smith</td>
                          <td>SD Sawojajar</td>
                          <td>97.5</td>
                          <td><a href="/edit_daftar_calon_siswa">Edit</a></td>
                        </tr>
                        <tr>
                          <td>#4</td>
                          <td>Crystal Smith</td>
                          <td>SD Sawojajar</td>
                          <td>97.5</td>
                          <td><a href="/edit_daftar_calon_siswa">Edit</a></td>
                        </tr>
                        <tr>
                          <td>#5</td>
                          <td>Crystal Smith</td>
                          <td>SD Sawojajar</td>
                          <td>97.5</td>
                          <td><a href="">Edit</a></td>
                        </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>          
          </div>
        </div>

      </div>
    )
  }
}
