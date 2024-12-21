import axios from 'axios'; 

const deleteWasteDataAPI = (id_waste) => {
  return axios.post("/api/v1/waste/delete_waste", { idWaste: id_waste });
};

export { deleteWasteDataAPI}