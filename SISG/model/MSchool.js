import { String } from '../system/Collection';

export var data = []

export var School = {

    data: [],

    GET: function () {

        this.data = [];

        var apiUrl = String.SISG_API_BASE + 'school';

        console.log(apiUrl, "apiUrl school@GET");

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

        var apiUrl = String.SISG_API_BASE + 'school/1';

        console.log(apiUrl, "apiUrl school@UPDATE");

        return new Promise((resolve, reject) => {

            fetch(apiUrl, { 
                method: "POST",
                headers: {
                    "Accept": "application/json",
                    "Authorization": `${headers.token_type} ${headers.access_token}`,
                    // "Content-Type": "application/json"
                },
                body: formData
            })
                .then((response) => response.json())
                .then((responseData) => {

                    if (responseData) {

                        this.data = responseData;
                        console.log(responseData, "RES")
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