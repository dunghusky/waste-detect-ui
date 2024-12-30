import axios from 'axios';

const updateWasteDataAPI = async (formData) => {
  try {
    const response = await axios.post("/api/v1/waste/update_waste_data", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error adding waste data:", error);
    throw error;
  }
};

const updateWasteCategoryDataAPI = async (formData) => {
  try {
    const response = await axios.post("/api/v1/waste-category/update_waste_category_data", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error adding waste data:", error);
    throw error;
  }
};

const updateCameraDataAPI = async (formData) => {
  try {
    const response = await axios.post("/api/v1/camera/update_camera_data", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error adding waste data:", error);
    throw error;
  }
};

const updateVideoDetailProcessDataAPI = async (formData) => {
  try {
    const response = await axios.post("/api/v1/details_process_video/update_details_wastes_data", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error adding waste data:", error);
    throw error;
  }
};

const updateModelCategoryDataAPI = async (formData) => {
  try {
    const response = await axios.post("/api/v1/model-category/update_model_category_data", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error adding waste data:", error);
    throw error;
  }
};

const updateVideoProcessDataAPI = async (formData) => {
  try {
    const response = await axios.post("/api/v1/process_video/update_process_video_data", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error adding waste data:", error);
    throw error;
  }
};

export { updateWasteDataAPI, updateWasteCategoryDataAPI, updateCameraDataAPI, updateVideoDetailProcessDataAPI, updateModelCategoryDataAPI, updateVideoProcessDataAPI}