import axios from 'axios';

const updateWasteDataAPI = (dataWaste) => {
  return axios.post("/api/v1/waste/update_waste_data", { dataWaste });
};

const updateWasteCategoryDataAPI = (dataCategoryWaste) => {
  return axios.post("/api/v1/waste-category/update_waste_category_data", {dataCategoryWaste: dataCategoryWaste });
};

const updateCameraDataAPI = (dataCamera) => {
  return axios.post("/api/v1/camera/update_camera_data", {dataCamera:  dataCamera});
};

const updateVideoDetailProcessDataAPI = (dataProcessWaste) => {
  return axios.post("/api/v1/details_process_video/update_process_video_data", {dataProcessWaste:  dataProcessWaste});
};

const updateModelCategoryDataAPI = (dataCategoryModel) => {
  return axios.post("/api/v1/model-category/update_model_category_data", {dataCategoryModel: dataCategoryModel});
};

const updateVideoProcessDataAPI = (dataVideo) => {
  return axios.post("/api/v1/process_video/update_process_video_data", {dataVideo: dataVideo });
};

export { updateWasteDataAPI, updateWasteCategoryDataAPI, updateCameraDataAPI, updateVideoDetailProcessDataAPI, updateModelCategoryDataAPI, updateVideoProcessDataAPI}