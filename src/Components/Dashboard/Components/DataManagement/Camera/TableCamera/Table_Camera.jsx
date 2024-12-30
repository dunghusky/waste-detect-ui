import "../TableCamera/Table_Camera.css";
import { DataGrid } from "@mui/x-data-grid";
import { wasteColumns, fetchWasteRows } from "./DataTWSource";
import { FaTrash } from "react-icons/fa";
import { HiPencilAlt } from "react-icons/hi";
// import { faTrashXmark } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect } from "react";
import {deleteCameraDataAPI} from "../../../../../../Services/deleteData";
import { Button, message } from 'antd';
import { ModalCamera } from "../../../../../../shared/modals/ModalCamera";

import {addCameraDataAPI} from "../../../../../../Services/addData"
import {updateCameraDataAPI} from "../../../../../../Services/updateData"

const Datatable = () => {
  const [data, setData] = useState([]);
  const [isOpenModalWaste, setIsOpenModalWaste] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const [waste, setWaste] = useState(null);
  const [dataBeforeWaste, setDataBeforeWaste] = useState(null)
  const [isDataEdit,setIsDataEdit] = useState(false);

  const handleDelete = async (id_camera) => {
  try {
    // Gọi API để xóa dữ liệu
      console.log("maMoHinh", id_camera);
      const response = await deleteCameraDataAPI(id_camera);

      // Kiểm tra nếu xóa thành công
      if (response.status === 200) {
        // Cập nhật danh sách hiển thị sau khi xóa thành công
        setData((prevData) => {
          const newData = prevData.filter((item) => item.id_camera !== id_camera);
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

  const fetchData = async () => {
    const rows = await fetchWasteRows();
    setData(
        rows.map((item, index) => ({
            ...item,
            id: item.maCamera || index + 1, // Đảm bảo ID duy nhất
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
                <HiPencilAlt />
            </div>
            <div
              className="deleteButton"
              onClick={() => handleDelete(params.row.id_camera)}
            >
              <FaTrash />
            </div>
          </div>
        );
      },
    },
  ];

  const handleOpenModalAddNew = () => {
    setIsOpenModalWaste(!isOpenModalWaste)    
  }  

  const handleCloseModalAddNew = () => {
    setIsOpenModalWaste(!isOpenModalWaste)    
    setDefaultValue()
  }

  const handleAddNewWaste = async () => {
    console.log("Dữ liệu gửi từ ModalWaste:", waste);
    if (!waste || !waste.camera_name) {
      message.error("Vui lòng nhập đầy đủ các trường bắt buộc!");
      return;
    }

    const formData = new FormData();
    formData.append("cameraName", waste.camera_name); // Từ giao diện
    if (waste.note) formData.append("note", waste.note); // Không bắt buộc
    if (waste.status) formData.append("isStatus", waste.status);   // Không bắt buộc
    if (waste.address) formData.append("address", waste.address);   // Không bắt buộc

    console.log("Dữ liệu formData:", Array.from(formData.entries()));

    try {
      // Gọi API thêm mới
      const response = await addCameraDataAPI(formData);

      if (response.status === 200) {
        message.success("Thêm mới danh mục thành công!");
        // Cập nhật danh sách hiển thị sau khi thêm thành công
        // Cập nhật danh sách hiển thị
        await fetchData(); 
        setIsOpenModalWaste(false); // Đóng modal
      }
    } catch (error) {
      console.error("Lỗi khi thêm mới mô hình:", error);
      message.error("Thêm mới mô hình thất bại!");
    }
  };

  const handleOpenModalEditWaste = async (wasteData) => {
    setIsEditMode(true)
    console.log('Day la data:', wasteData);
    
    await setWaste(wasteData);
    await setDataBeforeWaste(wasteData);
    setIsOpenModalWaste(true);
  }

  const isCheckDataChange = () => {
   if(dataBeforeWaste && waste){
     if(dataBeforeWaste.camera_name !== waste.camera_name || dataBeforeWaste.note !== waste.note || dataBeforeWaste.address !== waste.address || dataBeforeWaste.status !== waste.status){
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
      formData.append("id_camera", waste.id_camera); // ID bắt buộc
      if (waste.camera_name) formData.append("cameraName", waste.camera_name); // Tên rác thải
      if (waste.status) formData.append("isStatus", waste.status); // Mã quy chiếu (nếu có)
      if (waste.address) formData.append("address", waste.address); // Mã quy chiếu (nếu có)
      if (waste.note) formData.append("note", waste.note); // Ghi chú (nếu có)

      try {
          const response = await updateCameraDataAPI(formData);

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
      else await handleAddNewWaste()
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
        Danh mục camera
        <Button onClick={handleOpenModalAddNew} className="link">
          Thêm mới
        </Button>
      </div>
      <DataGrid
        className="datagrid"
        rows={data}
        columns={wasteColumns.concat(actionColumn)}
        getRowId={(row) => row.id_camera} // Sử dụng id_waste làm id duy nhất
        paginationModel={paginationModel}
        onPaginationModelChange={(newModel) => setPaginationModel(newModel)}
        rowsPerPageOptions={[9, 25, 50]} // Các tùy chọn
        checkboxSelection
      />
      <ModalCamera
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