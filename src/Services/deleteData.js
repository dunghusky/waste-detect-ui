import axios from 'axios'; 

const deleteWasteDataAPI = (id_waste) => {
  return axios.post("/api/v1/waste/delete_waste", { idWaste: id_waste });
};

const deleteWasteCategoryDataAPI = (id_category) => {
  return axios.post("/api/v1/waste-category/delete_waste_category", {idWasteCategory: id_category });
};

const deleteCameraDataAPI = (id_Camera) => {
  return axios.post("/api/v1/camera/delete_camera", {idCamera:  id_Camera});
};

const deleteVideoDetailProcessDataAPI = (id_Video, id_Waste) => {
  return axios.post("/api/v1/details_process_video/delete_details_waste", {idVideo:  id_Video, idWaste: id_Waste});
};

const deleteModelCategoryDataAPI = (id_Model) => {
  return axios.post("/api/v1/model-category/delete_model_category", {idModel: id_Model});
};

const deleteVideoProcessDataAPI = (id_Video) => {
  return axios.post("/api/v1/process_video/delete_video", {idVideo: id_Video });
};

export { deleteWasteDataAPI, deleteWasteCategoryDataAPI, deleteCameraDataAPI, deleteVideoDetailProcessDataAPI, deleteModelCategoryDataAPI, deleteVideoProcessDataAPI}