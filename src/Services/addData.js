import axios from 'axios'; 

const addWasteDataAPI = async (formData) => {
  try {
    const response = await axios.post("/api/v1/waste/add_waste", formData, {
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

const addWasteCategoryDataAPI = async (formData) => {
    try {
        const response = await axios.post("/api/v1/waste-category/add_waste_category", formData, {
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

const addCameraDataAPI = async (formData) => {
    try {
        const response = await axios.post("/api/v1/camera/add_camera", formData, {
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

const addModelCategoryDataAPI = async (formData) => {
    try {
        const response = await axios.post("/api/v1/model-category/add_model_category", formData, {
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

export { addWasteDataAPI, addWasteCategoryDataAPI, addCameraDataAPI, addModelCategoryDataAPI };