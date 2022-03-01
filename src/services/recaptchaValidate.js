import axios from 'axios'
export default {
    validate(params) {
        return new Promise((resolve, reject) => {
            axios.post('https://rest.flowlence.rs/api/recaptcha/validate', params)
                .then(response => {
                    if (response.data.hasErrors) {
                        reject(response.data.message)
                    } else {
                        resolve(response.data)
                    }
                })
                .catch(error => {
                    if (error.response.data.length) {
                        reject(error.response.data.message)
                    } else {
                        reject(error.message)
                    }
                })
        })
    }
}