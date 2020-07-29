import React from 'react'

import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import ADMINDashboard from './ADMINDashboard';
import ADMINProfile from './ADMINProfile';
import AdminNavbar from '../../view/components/AdminNavbar';
import ManageKegiatan from './ManageKegiatan';
import ManageIdentitas from './ManageIdentitas';
import ManageDaftarSiswa from './ManageDaftarSiswa';
import ManageEkstrakulikuler from './ManageEkstrakulikuler';
import ManageFasilitas from './ManageFasilitas';
import EditEkstrakulikuler from './EditEkstrakulikuler';
import EditFasilitas from './EditFasilitas';
import EditManageDaftarSiswa from './ManageDaftarSiswa';
import ManageKegiatanEdit from './ManageKegiatanEdit';
import ManageFotoVideo from './ManageFotoVideo';
import EDITManageFotoVideo from './EDITManageFotoVideo';
import ManageWaktuPPDB from './ManageWaktuPBB';
import LaporanPPDB from './LaporanPPDB';
import { AuthKey } from '../../system/Collection';
import ManageAkun from './ManageAkun';
import ManageDataSiswa from './ManageDataSiswa';
import ManageDataSiswaDetail from './ManageDataSiswaDetail';

export default function Index({ match, ...props }) {

    if (localStorage.getItem(AuthKey.LOGIN_DATA)) {

        return <Router>

            <div className="row w-100 mx-auto">

                <div className="main-sidebar col-12 col-md-3 col-lg-2 px-0">
                    <div className="main-navbar">
                        <nav className="navbar align-items-stretch navbar-light bg-white flex-md-nowrap border-bottom p-0">
                            <Link to={"/admin"} className="navbar-brand w-100 mr-0" style={{ lineHeight: 25 }}>
                                <h6 className="d-inline-block align-top mt-2 mr-1 ml-4">SMP Sunan Giri</h6>
                            </Link>

                            <div className="toggle-sidebar d-sm-inline d-md-none d-lg-none">
                                <i className="material-icons">&#xE5C4;</i>
                            </div>
                        </nav>
                    </div>
                    <form action="#" className="main-sidebar__search w-100 border-right d-sm-flex d-md-none d-lg-none">
                        <div className="input-group input-group-seamless ml-3">
                            <div className="input-group-prepend">
                                <div className="input-group-text">
                                    <i className="fas fa-search"></i>
                                </div>
                            </div>
                            <input className="navbar-search form-control" type="text" placeholder="Search for something..." aria-label="Search" />
                        </div>
                    </form>
                    <div className="nav-wrapper">
                        <ul className="nav flex-column">

                            <Link to={"/admin"} className="nav-item">
                                <div className="nav-link active" href="components-blog-posts.html">
                                    <i className="material-icons">vertical_split</i>
                                    <span>Dasboard</span>
                                </div>
                            </Link>

                            <li className="nav-item">
                                <a href="#manage_sekolah_submenu" className="nav-link dropdown-toggle" aria-expanded="false" data-toggle="collapse" >
                                    <i className="material-icons">edit</i>
                                    <span>Manage Sekolah</span>
                                </a>
                                <ul className="list-unstyled pl-4" id="manage_sekolah_submenu">
                                    <li className="my-3 sub-link">
                                        <Link to={`${match.path}/manage-identitas`}>Identitas Sekolah</Link>
                                    </li>

                                    <li className="my-3 sub-link">
                                        <Link to={`${match.path}/manage_kegiatan`}>Manage Kegiatan</Link>
                                    </li>

                                    <li className="my-3 sub-link">
                                        <Link to={`${match.path}/manage_ekstrakurikuler`} >Ekstrakurikuler</Link>
                                    </li>

                                    <li className="my-3 sub-link">
                                        <Link to={`${match.path}/manage_fasilitas`} >Fasilitas Sekolah</Link>
                                    </li>

                                    <li className="my-3 sub-link">
                                        <Link to={`${match.path}/manage_fotovideo`} >Foto & Video</Link>
                                    </li>

                                </ul>
                            </li>

                            <li className="nav-item">
                                <a href="#manage_ppdb_submenu" className="nav-link dropdown-toggle" aria-expanded="false" data-toggle="collapse" >
                                    <i className="material-icons">edit</i>
                                    <span>Manage PPDB</span>
                                </a>
                                <ul className="list-unstyled pl-4" id="manage_ppdb_submenu">
                                    <li className="my-3 sub-link">
                                        <Link to={`${match.path}/waktu_pendaftaran`}>Waktu Pendaftaran</Link>
                                    </li>
                                    {/* <li className="my-3 sub-link">
                                        <Link to={`${match.path}/daftar_calon_siswa`}>Data Calon Siswa</Link>
                                    </li> */}
                                    {/* <li className="my-3 sub-link">
                                        <Link to={`${match.path}/laporan_ppdb`}>Laporan Data Siswa</Link>
                                    </li>
                                    <li className="my-3 sub-link">
                                        <Link to={`${match.path}/data_siswa`}>Data Siswa</Link>
                                    </li> */}
                                </ul>
                            </li>

                            <Link to={`${match.path}/manage_akun`} className="nav-item">
                                <a className="nav-link " href="user-profile-lite.html">
                                    <i className="material-icons">person</i>
                                    <span>Manage Akun</span>
                                </a>
                            </Link>

                        </ul>
                    </div>
                </div>

                <div className="main-content col-lg-10 col-md-9 col-sm-12 p-0 offset-lg-2 offset-md-3">

                    <AdminNavbar />

                    <div className="main-content-container container-fluid px-4 h-100" >

                        <Switch>

                            <Route exact path={`${match.path}`} component={ADMINDashboard} />

                            {/* PROFILE */}
                            <Route path={`${match.path}/profile`} component={ADMINProfile} />

                            {/* KEGIATAN */}
                            <Route exact path={`${match.path}/manage_kegiatan`} component={ManageKegiatan} />
                            <Route path={`${match.path}/manage_kegiatan/edit`} component={ManageKegiatanEdit} />
                            <Route path={`${match.path}/manage_kegiatan/tambah`} component={ManageKegiatanEdit} />

                            {/* IDENTITAS SEKOLAH */}
                            <Route path={`${match.path}/manage-identitas`} component={ManageIdentitas} />

                            {/* EKSTRAKULIKULER */}
                            <Route exact path={`${match.path}/manage_ekstrakurikuler`} component={ManageEkstrakulikuler} />
                            <Route path={`${match.path}/manage_ekstrakurikuler/tambah`} component={EditEkstrakulikuler} />
                            <Route path={`${match.path}/manage_ekstrakurikuler/edit`} component={EditEkstrakulikuler} />

                            {/* FASILITAS */}
                            <Route exact path={`${match.path}/manage_fasilitas`} component={ManageFasilitas} />
                            <Route path={`${match.path}/manage_fasilitas/tambah`} component={EditFasilitas} />
                            <Route path={`${match.path}/manage_fasilitas/edit`} component={EditFasilitas} />

                            {/* WAKTU PENDAFTARAN */}
                            <Route path={`${match.path}/waktu_pendaftaran`} component={ManageWaktuPPDB} />

                            {/* CALON SISWA */}
                            <Route path={`${match.path}/daftar_calon_siswa`} component={ManageDaftarSiswa} />
                            <Route path={`${match.path}/edit_daftar_calon_siswa`} component={EditManageDaftarSiswa} />

                            {/* DATA SISWA */}
                            <Route exact path={`${match.path}/data_siswa`} component={ManageDataSiswa} />
                            <Route path={`${match.path}/data_siswa/detail`} component={ManageDataSiswaDetail} />

                            {/* LAPORAN PPDB */}
                            <Route path={`${match.path}/laporan_ppdb`} component={LaporanPPDB} />

                            {/* FOTO & VIDEO */}
                            <Route exact path={`${match.path}/manage_fotovideo`} component={ManageFotoVideo} />
                            <Route path={`${match.path}/manage_fotovideo/edit`} component={EDITManageFotoVideo} />

                            {/* FOTO & VIDEO */}
                            <Route exact path={`${match.path}/manage_akun`} component={ManageAkun} />

                            <Route component={ADMINDashboard} />

                        </Switch>

                    </div>

                </div>

            </div>

        </Router>

    } else {
        return <div>
            Loading...
            {props.history.push('')}
            {props.history.push('admin-login')}
        </div>
    }
}
