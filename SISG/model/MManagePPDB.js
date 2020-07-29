import { String, AuthKey } from '../system/Collection';
import { toast } from 'react-toastify';

export var data = []

export var ManagePPDB = {

    data: [],

    GET: function () {

        this.data = [];

        var apiUrl = String.SISG_API_BASE + 'ppdb';

        console.log(apiUrl, "apiUrl managePPDB@GET");

        return new Promise((resolve, reject) => {

            fetch(apiUrl, {
                method: "GET",
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                }
            })
                .then((response) => response.json())
                .then((responseData) => {

                    if (responseData) {

                        this.data = responseData;
                        resolve(true);
                    }
                    else {
                        resolve(false);
                    }

                })
                .catch((e) => {
                    console.log(e);
                    reject(e);
                });

        });

    },

    UPDATE: function (headers, formData) {

        this.data = [];

        var apiUrl = String.SISG_API_BASE + `ppdb/1`;

        console.log(apiUrl, "facility@UPDATE");

        return new Promise((resolve, reject) => {

            fetch(apiUrl, {
                method: "POST",
                headers: {
                    "Accept": "application/json",
                    "Authorization": `${headers.token_type} ${headers.access_token}`,
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    tanggal_buka: formData.tanggal_buka,
                    tanggal_tutup: formData.tanggal_tutup,
                    _method:'put'
                })
            })
                .then((response) => response.json())
                .then((responseData) => {

                    console.log(responseData, "RES")

                    if (responseData) {

                        if (responseData.message === "Unauthenticated") {
                            toast.error("Mohon login ulang")
                        }
                        this.data = responseData;
                        resolve(true);

                    }
                    else {
                        resolve(false);
                    }

                })
                .catch((e) => {
                    console.log(e);
                    reject(e);
                });

        });

    },

    GET_USER: function () {

        this.data = [];

        var apiUrl = String.SISG_API_BASE + 'ppdbuser';

        console.log(apiUrl, "apiUrl managePPDB@GET");

        return new Promise((resolve, reject) => {

            fetch(apiUrl, {
                method: "GET",
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                }
            })
                .then((response) => response.json())
                .then((responseData) => {

                    if (responseData) {

                        this.data = responseData;
                        resolve(true);
                    }
                    else {
                        resolve(false);
                    }

                })
                .catch((e) => {
                    console.log(e);
                    reject(e);
                });

        });

    },

}