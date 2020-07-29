import { String } from '../system/Collection';

export var data = []

export var Admin = {

    data: [],

    LOGIN: function (formData) {

        this.data = [];

        var apiUrl = String.SISG_API_BASE + 'login';

        console.log(apiUrl, "apiUrl admin login@GET");

        return new Promise((resolve, reject) => {

            fetch(apiUrl, {
                method: "POST",
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    email: formData.email,
                    password: formData.password,
                })
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

    CHANGE_PASSWORD: function (headers, formData) {

        this.data = [];

        var apiUrl = String.SISG_API_BASE + 'change-password';

        console.log(apiUrl, "apiUrl admin change-password@POST");

        return new Promise((resolve, reject) => {

            fetch(apiUrl, {
                method: "POST",
                headers: {
                    "Accept": "application/json",
                    "Authorization": `${headers.token_type} ${headers.access_token}`,
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    old_password: formData.old_password,
                    new_password: formData.new_password,
                    new_password_confirmation: formData.new_password_confirmation,
                    _method: 'put'
                })
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

    FORGOT_PASSWORD: function (email) {

        this.data = [];

        var apiUrl = String.SISG_API_BASE + 'forgot-password';

        console.log(apiUrl, "apiUrl admin forgot password@GET");

        return new Promise((resolve, reject) => {

            fetch(apiUrl, {
                method: "POST",
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    email: email
                })
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

    RESET_PASSWORD: function (formData) {

        this.data = [];

        var apiUrl = String.SISG_API_BASE + 'reset/password';

        console.log(apiUrl, "apiUrl admin reset-password@POST");

        return new Promise((resolve, reject) => {

            fetch(apiUrl, {
                method: "POST",
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    token: formData.token,
                    email: formData.email,
                    password: formData.password,
                    password_confirmation: formData.password_confirmation,
                })
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