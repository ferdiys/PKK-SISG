import React, { Component } from 'react'
import PageHeader from '../components/admin/PageHeader'

import CardRow from '../components/card/CardRow'
import ReusableButton from '../components/btn/ReusableButton'
import Loading from '../components/Loading'

export default class ManageEkstrakulikulerView extends Component {
    render() {
        return (
            <div>

                <nav className="navbar justify-content-between p-0 ">

                    <PageHeader
                        subLink="Manage Sekolah"
                        pageTitle="Manage Ekstrakurikuler"
                    />

                    <ReusableButton
                        className="btn btn-success px-3"
                        onClick={() => this.props.method.goToPage("manage_ekstrakurikuler/tambah")}
                        buttonText="Tambah Ekstrakulikuler" />

                </nav>

                <div id="ekstra-content">

                    {
                        this.props.state.isLoaded === true
                            ?
                            this.props.state.extracurricular.length !== 0
                                ?
                                this.props.state.extracurricular.map((item, id) => {
                                    return <div key={id}>
                                        <CardRow
                                            id={item.id}
                                            title={item.title}
                                            desc={item.description}
                                            img={item.image}
                                            onClick={() => this.props.method.goToPage(`manage_ekstrakurikuler/edit/${item.id}`)}
                                        />
                                    </div>
                                })
                                :
                                <div className="text-center my-5">
                                    <h5 style={{ opacity: .4 }}>Belum Ada Ekstrakulikuler</h5>
                                </div>
                            :
                            <div style={{ marginTop: 60 }}>
                                <Loading color="#e6be1e" />
                            </div>
                    }

                </div>

            </div>
        )
    }
}