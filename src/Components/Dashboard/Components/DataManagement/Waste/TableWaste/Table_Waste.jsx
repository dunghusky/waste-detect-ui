import "../TableWaste/Table_Waste.css";
import { DataGrid } from "@mui/x-data-grid";
import { wasteColumns, fetchWasteRows } from "./DataTWSource";
import { FaTrash } from "react-icons/fa";
import { HiPencilAlt } from "react-icons/hi";
import { GoPlus } from "react-icons/go";
// import { faTrashXmark } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect } from "react";
import {deleteWasteDataAPI} from "../../../../../../Services/deleteData";
import { Button, message } from 'antd';
import { ModalWaste } from "../../../../../../shared/modals/ModalWaste";

import {addWasteDataAPI} from "../../../../../../Services/addData"
import {updateWasteDataAPI} from "../../../../../../Services/updateData"


const Datatable = () => {
  const [data, setData] = useState([]);
  const [isOpenModalWaste, setIsOpenModalWaste] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const [waste, setWaste] = useState(null);
  const [dataBeforeWaste, setDataBeforeWaste] = useState(null)
  const [isDataEdit,setIsDataEdit] = useState(false);

  const handleDelete = async (id_waste) => {
  try {
    // Gọi API để xóa dữ liệu
      const response = await deleteWasteDataAPI(id_waste);

      // Kiểm tra nếu xóa thành công
      if (response.status === 200) {
        // Cập nhật danh sách hiển thị sau khi xóa thành công
        setData((prevData) => {
          const newData = prevData.filter((item) => item.id_waste !== id_waste);
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
            id: item.maRacThai || index + 1, // Đảm bảo ID duy nhất
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
          <div className="cellAction flex items-center justify-center w-full ">
            <div className="deleteButton"
            onClick={() => handleOpenModalEditWaste(params.row)}
            >
                <HiPencilAlt className='icon' />
            </div>
            <div
              className="deleteButton"
              onClick={() => handleDelete(params.row.id_waste)}
            >
              <FaTrash className='icon' />
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
    if (!waste || !waste.waste_name || !waste.id_wastes || !waste.category_name) {
      message.error("Vui lòng nhập đầy đủ các trường bắt buộc!");
      return;
    }

    const formData = new FormData();
    formData.append("wasteName", waste.waste_name); // Từ giao diện
    formData.append("wasteId", waste.id_wastes);   // Từ giao diện
    formData.append("categoryName", waste.category_name); // Hoặc `category_name`
    if (waste.note) formData.append("note", waste.note); // Không bắt buộc
    if (waste.img) formData.append("img", waste.img);   // Không bắt buộc

    console.log("Dữ liệu formData:", Array.from(formData.entries()));

    try {
      // Gọi API thêm mới
      const response = await addWasteDataAPI(formData);

      if (response.status === 200) {
        message.success("Thêm mới rác thải thành công!");
        // Cập nhật danh sách hiển thị sau khi thêm thành công
        // Cập nhật danh sách hiển thị
        await fetchData(); 
        setIsOpenModalWaste(false); // Đóng modal
      }
    } catch (error) {
      console.error("Lỗi khi thêm mới rác thải:", error);
      message.error("Thêm mới rác thải thất bại!");
    }
  };

  const handleOpenModalEditWaste = async (wasteData) => {
    setIsEditMode(true)
    console.log('Day la data:', wasteData);
    
    await setWaste(wasteData);
    await setDataBeforeWaste(wasteData);
    setIsOpenModalWaste(true);
  }

  const isCheckImageChange= () => {    
    if(typeof(dataBeforeWaste.img) !== typeof(waste.img)){
      return true
    }
  }

  const isCheckDataChange = () => {
   if(dataBeforeWaste && waste){
     if(dataBeforeWaste.img !== waste.img || dataBeforeWaste.category_name !== waste.category_name || dataBeforeWaste.note !== waste.note || dataBeforeWaste.id_wastes !== waste.id_wastes || dataBeforeWaste.waste_name !== waste.waste_name){
      console.log('Vao edit');
      
      return true
    }
          console.log('khong vao edit');
    return false
   }
  }

  const handleEditWaste = async () => {
      let imageWasteChange = null; // Hình ảnh chỉ gửi nếu có thay đổi
      if (isCheckImageChange()) {
          imageWasteChange = waste.img ? waste.img : null; // Kiểm tra và lấy hình ảnh mới
      }

      // Kiểm tra dữ liệu cơ bản
      if (!waste || !waste.id_waste) {
          message.error("Không tìm thấy ID rác thải để chỉnh sửa!");
          return;
      }

      // Chuẩn bị dữ liệu gửi
      const formData = new FormData();
      formData.append("id_waste", waste.id_waste); // ID bắt buộc
      if (waste.waste_name) formData.append("wasteName", waste.waste_name); // Tên rác thải
      if (waste.id_wastes) formData.append("wasteId", waste.id_wastes); // Mã quy chiếu (nếu có)
      if (waste.category_name) formData.append("categoryName", waste.category_name); // Tên danh mục (nếu có)
      if (waste.note) formData.append("note", waste.note); // Ghi chú (nếu có)
      if (imageWasteChange) formData.append("img", imageWasteChange); // Hình ảnh mới (nếu có)

      try {
          const response = await updateWasteDataAPI(formData);

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
        Danh mục rác thải
        <Button onClick={handleOpenModalAddNew} className="btn flex">
          <span>Thêm mới</span>
          <GoPlus className='icon'/>
        </Button>
      </div>
      <DataGrid
        className="datagrid"
        rows={data}
        columns={wasteColumns.concat(actionColumn)}
        getRowId={(row) => row.id || row.maRacThai} // Sử dụng id_waste làm id duy nhất
        paginationModel={paginationModel}
        onPaginationModelChange={(newModel) => setPaginationModel(newModel)}
        rowsPerPageOptions={[9, 25, 50]} // Các tùy chọn
        checkboxSelection
      />
      <ModalWaste 
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