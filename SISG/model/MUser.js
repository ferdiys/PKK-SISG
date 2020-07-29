import { String } from '../system/Collection';

export var data = []

export var USER = {

    data: [],

    LOGIN: function (formData) {

        this.data = [];

        var apiUrl = String.OPENRESTO_API_BASE + 'login';

        console.log(apiUrl, "USER LOGIN@POST");


        return new Promise((resolve, reject) => {

            fetch(apiUrl, {
                method: "POST",
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    email           : formData.email,
                    password        : formData.password,
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

    REGISTER: function (formData) {

        this.data = [];

        var apiUrl = String.OPENRESTO_API_BASE + 'register';

        console.log(apiUrl, "USER REGISTER@POST");

        console.log(formData,"FORMDATA")

        return new Promise((resolve, reject) => {

            fetch(apiUrl, {
                method: "POST",
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    name                    : formData.name,
                    email                   : formData.email,
                    password                : formData.password,
                    role                    : formData.role,
                    password_confirmation   : formData.password_confirmation
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