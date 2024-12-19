import axios from 'axios'; 

const getWasteDataAPI = () => {
  return axios.get("/api/v1/waste/waste_data", { });
};

const getWasteCategoryDataAPI = () => {
  return axios.get("/api/v1/waste-category/waste_category_data", { });
};

export { getWasteDataAPI, getWasteCategoryDataAPI };