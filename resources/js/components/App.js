import React, { Component } from 'react';
import ReactDOM from 'react-dom';

/**
 * Library
 */
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ToastContainer } from 'react-toastify'

/**
 * IMPORT CSS
 */
import 'react-toastify/dist/ReactToastify.css';
import '../../../SISG/assets/scss/style.css'
import '../../../SISG/assets/scss/components.css'

/**
 * ADMIN CSS
 */
import '../../../SISG/assets/Admin/shards-dashboards.1.1.0.css'

/**
 * IMPORT SCREEN
 */
import Login from '../../../SISG/controller/Auth/Login';
import FormRegistration from '../../../SISG/controller/FormRegistration';
import Profile from '../../../SISG/controller/Profile';
import Home from '../../../SISG/controller/Home';
import Organisasi from '../../../SISG/controller/Organisasi';
import Gallery from '../../../SISG/controller/Gallery';
import ListSiswa from '../../../SISG/controller/ListSiswa';
import Admin from '../../../SISG/controller/Admin/Index';
import Activity from '../../../SISG/controller/Activity';
import Ekstrakulikuler from '../../../SISG/controller/Ekstrakulikuler';
import Achievement from '../../../SISG/controller/Achievement';
import TentangPPDB from '../../../SISG/controller/TentangPpdb';
import VisiMisi from '../../../SISG/controller/VisiMisi';
import ADMINAuth from '../../../SISG/controller/Admin/ADMINAuth';
import FacilityScreen from '../../../SISG/controller/FacilityScreen';
import ManageDataSiswa from '../../../SISG/controller/Admin/ManageDataSiswa';
import ListPPDB from '../../../SISG/controller/ListPPDB';
import ForgotPassword from '../../../SISG/controller/Admin/ForgotPassword';
import ResetPassword from '../../../SISG/controller/Admin/ResetPassword';

class App extends Component {

    render() {

        return <div className="w-100 h-100">
            <Router>

                <Switch>

                    {/* USER ROUTE */}
                    <Route exact path='/' component={Home} />
                    <Route exact path='/ppdb_register' component={FormRegistration} />
                    <Route path='/profile' component={Profile} />
                    <Route path='/organisasi_sekolah' component={Organisasi} />
                    <Route path='/galeri' component={Gallery} />
                    <Route path='/fasilitas' component={FacilityScreen} />
                    <Route path='/list-siswa' component={ListSiswa} />
                    <Route path='/tentang-ppdb' component={TentangPPDB} />
                    <Route path='/kegiatan' component={Activity} />
                    <Route path='/ekstrakurikuler' component={Ekstrakulikuler} />
                    <Route path='/penghargaan' component={Achievement} />
                    <Route path='/visi_misi' component={VisiMisi} />

                    <Route path='/ppdb_register' component={FormRegistration} />
                    <Route path='/list_ppdb' component={ListPPDB} />

                    {/* ADMIN ROUTE */}
                    <Route path='/admin-login' component={ADMINAuth} />
                    <Route path='/admin' component={Admin} />
                    <Route path='/forgot-password' component={ForgotPassword} />
                    <Route path='/reset-password/:token' component={ResetPassword} />

                    <Route component={Home} />

                </Switch>

            </Router>

            {/* TOAST */}
            <ToastContainer
                position="top-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnVisibilityChange={false}
                draggable
                pauseOnHover={true} />

        </div>

    }
}

/**
 * Render App in div with id of 'app'
 * resources/views/app.blade.php
 */
if (document.getElementById('app')) {
    ReactDOM.render(<App />, document.getElementById('app'))
    // ReactDOM.render(<App />, document.getElementById('app'))
}
