import axios from 'axios'; 

const getWasteDataAPI = () => {
  return axios.get("/api/v1/waste/waste_data", { });
};

const getWasteCategoryDataAPI = () => {
  return axios.get("/api/v1/waste-category/waste_category_data", { });
};

const getCameraDataAPI = () => {
  return axios.get("/api/v1/camera/camera_data", { });
};

const getVideoDetailProcessDataAPI = () => {
  return axios.get("/api/v1/details_process_video/video_detail_process_data", { });
};

const getModelCategoryDataAPI = () => {
  return axios.get("/api/v1/model-category/model_category_data", { });
};

const getVideoProcessDataAPI = () => {
  return axios.get("/api/v1/process_video/video_process_data", { });
};

export { getWasteDataAPI, getVideoProcessDataAPI, getWasteCategoryDataAPI, getCameraDataAPI, getVideoDetailProcessDataAPI, getModelCategoryDataAPI };