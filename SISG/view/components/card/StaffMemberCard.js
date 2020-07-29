import React, { Component } from 'react'

export default class StaffMemberCard extends Component {
    render() {
        return (
            <div id="staff-member-card">
                <img src={"https://images.unsplash.com/photo-1492814580460-1f9a2a463cfe?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"} className="staff-pic" alt="" />
                <h4>Denny Lewish</h4>
                <div className="posistion my-4">
                    Wakil Kepala sekolah
                </div>
                <p>
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                </p>
                <div className="mt-3">
                    <i class="fab fa-facebook-f"></i>
                    <i class="fab fa-twitter"></i>
                </div>
            </div>
        )
    }
}
