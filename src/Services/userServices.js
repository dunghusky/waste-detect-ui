import axios from 'axios'; 

const loginAPI = (user_name, password) => {
  return axios.post("/api/v1/user/login", { user_name, password });
};
const streamAPI = () => {
  return axios.get("/api/v1/stream/video_feed", { });
};
const stopStreamAPI = () => {
  return axios.post("/api/v1/stream/stop", { });
};
const getVideoStreamAPI = () => {
  return axios.post("/api/v1/stream/get_video_url", { });
};
export { loginAPI, streamAPI, stopStreamAPI, getVideoStreamAPI };