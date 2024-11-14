import axios from 'axios'; 

const loginAPI = (user_name, password) => {
  return axios.post("/api/v1/user/login", { user_name, password });
};

export { loginAPI };