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
  return axios.get("/api/v1/stream/get_video_url", { });
};
const imageDetectAPI = async (formData) => {
  try {
    const response = await axios.post("/api/v1/image/image_detect", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error adding image data:", error);
    throw error;
  }
};
export {
  loginAPI,
  streamAPI,
  stopStreamAPI,
  getVideoStreamAPI,
  imageDetectAPI,
};