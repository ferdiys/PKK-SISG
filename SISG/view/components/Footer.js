import React, { Component } from 'react'

import { Link } from 'react-router-dom'
import { School } from '../../model/MSchool'

export default class Footer extends Component {

    constructor(props) {
        super(props)

        this.state = {
            schoolProfile: {},
        }
    }

    componentDidMount = async () => {
        this.getSchoolProfile();
    }

    getSchoolProfile = async () => {
        await School.GET().then(res => {

            if (School.data) {

                this.setState({
                    schoolProfile: School.data[0],
                    profileIsLoaded: true
                },
                    // () => this.forceUpdate()
                    // () => console.log(this.state.schoolProfile)
                )

            } else {

                console.log("Error retrieve api")

            }

        })
            .catch(
                err => {
                    console.log(err);
                }
            );

    }

    render() {
        return (
            <div id="footer">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-4">
                            <h1>Menu Sekolah</h1>
                            <p> <Link to="/profile">Profile</Link> </p>
                            <p> <Link to="/visi_misi">Visi & Misi</Link> </p>
                            <p> <Link to="/kegiatan">Kegiatan / Aktivitas</Link> </p>
                            <p> <Link to="/fasilitas">Struktur Organisasi</Link> </p>
                            <p> <Link to="/organisasi_sekolah">Guru / Staff</Link> </p>
                            <br></br>
                        </div>
                        <div className="col-12 col-md-4">
                            <h1>Menu Siswa</h1>
                            <p> <Link to="/ekstrakulikuler">Ekstrakulikuler</Link> </p>
                            <br></br>
                            <h1>Galeri</h1>
                            <p> <Link to="/galeri">Foto & Video</Link> </p>
                            {/* <h1>Berita</h1>
                            <p> <a>Sekolah</a> </p>
                            <p> <a>Artikel</a> </p> */}
                        </div>
                        <div className="col-12 col-md-4">
                            <h1>Kontak</h1>
                            <p> <a>
                                <i className="fas fa-map-marker-alt"></i> &nbsp;
                                {this.state.schoolProfile.alamat}
                            </a> </p>
                            <p> <a>
                                <i className="fas fa-phone-alt"></i> &nbsp;
                                {this.state.schoolProfile.phone}
                            </a> </p>
                            <p> <a>
                                <i className="fas fa-envelope"></i> &nbsp;
                                {this.state.schoolProfile.email}
                            </a> </p>
                        </div>
                    </div>
                    <div className="hr"></div>
                    <p className="text-center mt-2">@SMP SUNAN GIRI</p>
                </div>
            </div>
        )
    }
}

