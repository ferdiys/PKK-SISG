import React, { Component } from 'react'

import '../../assets/scss/activity.css'

import ActivityCard from '../components/card/ActivityCard'
import Loading from '../components/Loading'

export default class ActivityView extends Component {

    limitCharacter = e => {

        if (e) {
            return e.substring(0, 160) + " ..."
        }

    }

    render() {
        return (
            <div>

                <div id="activity">

                    <div id="heading-image">

                        <div className="mask"></div>

                        <div className="container my-auto">

                            <div className="caption">
                                <h3>Kegiatan Sekolah</h3>
                                <div className="hr-green mt-4"></div>
                            </div>

                        </div>
                    </div>

                    <div id="sub-link">
                        <div className="container">
                            <p>
                                <a>Home</a>
                                &nbsp; <i className="fas fa-caret-right"></i> &nbsp;
                            <a>Kegiatan Sekolah</a>
                            </p>
                        </div>
                    </div>

                    <div id="content">
                        <div className="container">
                            <h3>Kegiatan Sekolah</h3>

                            <div className="row">
                                {
                                    this.props.state.isLoaded === true
                                        ?
                                        this.props.state.kegiatan.map((item, id) => {
                                            return <div key={id} className="col-12 col-md-4 mb-4">
                                                <ActivityCard 
                                                image={item.image}
                                                title={item.title}
                                                description={this.limitCharacter(item.description)}
                                                />
                                            </div>
                                        })
                                        :
                                        <Loading />
                                }
                            </div>
                        </div>
                    </div>


                </div>

            </div>
        )
    }
}
