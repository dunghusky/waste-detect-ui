import Axios from 'axios'

const loginAPI = (user_name, password) => {
    return Axios.post("/api/v1/user/login", {user_name, password})
}

export {loginAPI}