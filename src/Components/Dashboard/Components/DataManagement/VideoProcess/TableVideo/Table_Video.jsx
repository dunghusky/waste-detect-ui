import "../TableVideo/Table_Video.css";
import { DataGrid } from "@mui/x-data-grid";
import { wasteColumns, fetchWasteRows } from "./DataTWSource";
import { FaTrash } from "react-icons/fa";
import { HiPencilAlt } from "react-icons/hi";
// import { faTrashXmark } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect } from "react";
import {deleteVideoProcessDataAPI} from "../../../../../../Services/deleteData";
import { message } from 'antd';
import { ModalVideoProcess } from "../../../../../../shared/modals/ModalVideoProcess";

import {updateVideoProcessDataAPI} from "../../../../../../Services/updateData"

const Datatable = () => {
  const [data, setData] = useState([]);
  const [isOpenModalWaste, setIsOpenModalWaste] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const [waste, setWaste] = useState(null);
  const [dataBeforeWaste, setDataBeforeWaste] = useState(null)
  const [isDataEdit,setIsDataEdit] = useState(false);

  const handleDelete = async (id_video) => {
  try {
    // Gọi API để xóa dữ liệu
      console.log("maMoHinh", id_video);
      const response = await deleteVideoProcessDataAPI(id_video);

      // Kiểm tra nếu xóa thành công
      if (response.status === 200) {
        // Cập nhật danh sách hiển thị sau khi xóa thành công
        setData((prevData) => {
          const newData = prevData.filter((item) => item.id_video !== id_video);
          return newData.map((item, index) => ({
            ...item,
            stt: index + 1, // Cập nhật lại STT
          }));
        });

        message.success("Xóa thành công!");
      }
    } catch (error) {
      console.error("Failed to delete waste data:", error);
      message.error("Xóa thất bại!");
    }
  };

  const handleCloseModalAddNew = () => {
    setIsOpenModalWaste(!isOpenModalWaste)    
    setDefaultValue()
  }

  const fetchData = async () => {
    const rows = await fetchWasteRows();
    setData(
        rows.map((item, index) => ({
            ...item,
            id: item.maVideo || index + 1, // Đảm bảo ID duy nhất
          }))
      );
  };

  useEffect(() => {
      fetchData(); // Gọi fetchData khi component được mount
  }, []);

   const [paginationModel, setPaginationModel] = useState({
    pageSize: 9, // Số dòng mặc định mỗi trang
    page: 0, // Trang hiện tại
  });

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      align: "center", headerAlign: "center",
      renderCell: (params) => {
        return (
          <div className="cellAction flex items-center justify-center w-full">
            <div className="deleteButton "
            onClick={() => handleOpenModalEditWaste(params.row)}
            >
                <HiPencilAlt className="icon"/>
            </div>
            <div
              className="deleteButton"
              onClick={() => handleDelete(params.row.id_video)}
            >
              <FaTrash className="icon"/>
            </div>
          </div>
        );
      },
    },
  ];

  const handleOpenModalEditWaste = async (wasteData) => {
    setIsEditMode(true)
    console.log('Day la data:', wasteData);
    
    await setWaste(wasteData);
    await setDataBeforeWaste(wasteData);
    setIsOpenModalWaste(true);
  }

  const isCheckDataChange = () => {
   if(dataBeforeWaste && waste){
     if(dataBeforeWaste.note !== waste.note){
      console.log('Vao edit');
      
      return true
    }
          console.log('khong vao edit');
    return false
   }
  }

  const handleEditWaste = async () => {
      // Chuẩn bị dữ liệu gửi
      const formData = new FormData();
      formData.append("id_video", waste.id_video); // ID bắt buộc
      
      if (waste.note) formData.append("note", waste.note); // Ghi chú (nếu có)

      try {
          const response = await updateVideoProcessDataAPI(formData);

          if (response.status === 200) {
              message.success("Cập nhật thông tin rác thải thành công!");
              await fetchData(); // Gọi lại fetchData để đồng bộ danh sách
              setIsOpenModalWaste(false); // Đóng modal
          } else {
              message.error(response.data.message || "Cập nhật thất bại!");
          }
      } catch (error) {
          console.error("Lỗi khi chỉnh sửa rác thải:", error);
          message.error("Cập nhật rác thải thất bại!");
      }
  };

  const setDefaultValue = () => {
    setWaste(null)
    setIsEditMode(false)
  }

  const handleSubmitFormWaste = async() => {
    try{
      if(isEditMode) await handleEditWaste();
    }
    catch(e) {
      console.log(e);
    }
    finally{
      setDefaultValue()
    }
  }

  useEffect(() => {
    if(isEditMode){
      if(!isCheckDataChange())
          {
            setIsDataEdit(true)
          }
          else {
            setIsDataEdit(false)
      }
    }
  },[waste])

  return (
    <div className="datatable">
      <div className="datatableTitle">
        Danh mục video
      </div>
      <DataGrid
        className="datagrid"
        rows={data}
        columns={wasteColumns.concat(actionColumn)}
        getRowId={(row) => row.id_video} // Sử dụng id_waste làm id duy nhất
        paginationModel={paginationModel}
        onPaginationModelChange={(newModel) => setPaginationModel(newModel)}
        rowsPerPageOptions={[9, 25, 50]} // Các tùy chọn
        checkboxSelection
      />
      <ModalVideoProcess
          {...{isOpen: isOpenModalWaste,
          setIsOpen: setIsOpenModalWaste,
          handleCloseModal: handleCloseModalAddNew,
          handleOkModal: handleSubmitFormWaste,
          data: waste,
          isEditMode,
          setData: setWaste,
          isDataEdit
        }}
      />
    </div>
  );
};

export default Datatable;