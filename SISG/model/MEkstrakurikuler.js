import { String } from '../system/Collection';
import { toast } from 'react-toastify';

export var data = []

export var Extracurricular = {

    data: [],

    GET: function () {

        this.data = [];

        var apiUrl = String.SISG_API_BASE + 'extracurricular';

        console.log(apiUrl, "apiUrl extracurricular@GET");

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

    GET_ID: function (id) {

        this.data = [];

        var apiUrl = String.SISG_API_BASE + `extracurricular/${id}`;

        console.log(apiUrl, "apiUrl extracurricular@GET");

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

    UPDATE: function (headers, id, formData) {

        this.data = [];

        var apiUrl = String.SISG_API_BASE + `extracurricular/${id}`;

        console.log(apiUrl, "extracurricular@UPDATE");

        for (var pair of formData.entries()) {
            console.log(pair[0] + ', ' + pair[1], "MODEL");
        }

        return new Promise((resolve, reject) => {

            fetch(apiUrl, {
                method: "POST",
                headers: {
                    "Accept": "application/json",
                    "Authorization": `${headers.token_type} ${headers.access_token}`,
                },
                body: formData
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

    ADD: function (headers, formData) {

        this.data = [];

        var apiUrl = String.SISG_API_BASE + `extracurricular`;

        console.log(apiUrl, "extracurricular@ADD");

        return new Promise((resolve, reject) => {

            fetch(apiUrl, {
                method: "POST",
                headers: {
                    "Accept": "application/json",
                    "Authorization": `${headers.token_type} ${headers.access_token}`,
                },
                body: formData
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

    DELETE: function (headers, id) {

        this.data = [];

        var apiUrl = String.SISG_API_BASE + `extracurricular/${id}`;

        console.log(apiUrl, "extracurricular@ADD");

        return new Promise((resolve, reject) => {

            fetch(apiUrl, {
                method: "POST",
                headers: {
                    "Accept": "application/json",
                    "Authorization": `${headers.token_type} ${headers.access_token}`,
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    _method: 'delete'
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

}