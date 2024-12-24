import "../TableWasteCategory/Table_WasteCategory.css";
import { DataGrid } from "@mui/x-data-grid";
import { wasteColumns, fetchWasteRows } from "./DataTWSource";
import { FaTrash } from "react-icons/fa";
import { HiPencilAlt } from "react-icons/hi";
// import { faTrashXmark } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect } from "react";
import {deleteWasteCategoryDataAPI} from "../../../../../../Services/deleteData";
import { Button, message } from 'antd';
import { ModalWasteCategory } from "../../../../../../shared/modals/ModalWasteCategory";

import {addWasteCategoryDataAPI} from "../../../../../../Services/addData"
import {updateWasteCategoryDataAPI} from "../../../../../../Services/updateData"

const Datatable = () => {
  const [data, setData] = useState([]);
  const [isOpenModalWaste, setIsOpenModalWaste] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const [waste, setWaste] = useState(null);

  const handleDelete = async (id_category) => {
  try {
    // Gọi API để xóa dữ liệu
      console.log("maDanhMuc", id_category);
      const response = await deleteWasteCategoryDataAPI(id_category);

      // Kiểm tra nếu xóa thành công
      if (response.status === 200) {
        // Cập nhật danh sách hiển thị sau khi xóa thành công
        setData((prevData) => {
          const newData = prevData.filter((item) => item.id_category !== id_category);
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
            id: item.maDanhMuc || index + 1, // Đảm bảo ID duy nhất
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
              onClick={() => handleDelete(params.row.id_category)}
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
    if (!waste || !waste.category_name || !waste.id_categorys) {
      message.error("Vui lòng nhập đầy đủ các trường bắt buộc!");
      return;
    }

    const formData = new FormData();
    formData.append("categoryName", waste.category_name); // Từ giao diện
    formData.append("categoryId", waste.id_categorys);   // Từ giao diện
    if (waste.note) formData.append("note", waste.note); // Không bắt buộc
    if (waste.img) formData.append("img", waste.img);   // Không bắt buộc

    console.log("Dữ liệu formData:", Array.from(formData.entries()));

    try {
      // Gọi API thêm mới
      const response = await addWasteCategoryDataAPI(formData);

      if (response.status === 200) {
        message.success("Thêm mới danh mục thành công!");
        // Cập nhật danh sách hiển thị sau khi thêm thành công
        // Cập nhật danh sách hiển thị
        await fetchData(); 
        setIsOpenModalWaste(false); // Đóng modal
      }
    } catch (error) {
      console.error("Lỗi khi thêm mới danh mục:", error);
      message.error("Thêm mới danh mục thất bại!");
    }
  };

  const handleOpenModalEditWaste = async (wasteData) => {
    setIsEditMode(true)
    console.log('Day la data:', wasteData);
    
    await setWaste(wasteData);
    setIsOpenModalWaste(true);
  }

  const handleEditWaste = async () => {
    //hàm gọi api edit rác
    console.log("Dữ liệu gửi để chỉnh sửa:", waste);

    if (!waste || !waste.id_category) {
        message.error("Không tìm thấy mã danh mục để chỉnh sửa!");
        return;
    }

    const dataWaste = {
        maDanhMuc: waste.id_category, // Mã rác thải
        tenDanhMuc: waste.category_name || "", // Tên rác thải
        maDanhMucQuyChieu: waste.id_categorys || "", // Mã quy chiếu
        ghiChu: waste.note || "", // Ghi chú (nếu có)
        hinhAnh: waste.img || "", // Hình ảnh (nếu có)
    };

    try {
        const response = await updateWasteCategoryDataAPI(dataWaste);

        if (response.status === 200) {
            message.success("Cập nhật thông tin danh mục thành công!");
            await fetchData(); // Gọi lại fetchData để đồng bộ danh sách
            setIsOpenModalWaste(false); // Đóng modal
        } else {
            message.error(response.data.message || "Cập nhật thất bại!");
        }
    } catch (error) {
        console.error("Lỗi khi chỉnh sửa danh mục:", error);
        message.error("Cập nhật danh mục thất bại!");
    }
  }

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

  return (
    <div className="datatable">
      <div className="datatableTitle">
        Danh mục phân loại rác
        <Button onClick={handleOpenModalAddNew} className="link">
          Thêm mới
        </Button>
      </div>
      <DataGrid
        className="datagrid"
        rows={data}
        columns={wasteColumns.concat(actionColumn)}
        getRowId={(row) => row.id_category} // Sử dụng id_waste làm id duy nhất
        paginationModel={paginationModel}
        onPaginationModelChange={(newModel) => setPaginationModel(newModel)}
        rowsPerPageOptions={[9, 25, 50]} // Các tùy chọn
        checkboxSelection
      />
      <ModalWasteCategory
          {...{isOpen: isOpenModalWaste,
          setIsOpen: setIsOpenModalWaste,
          handleCloseModal: handleCloseModalAddNew,
          handleOkModal: handleSubmitFormWaste,
          data: waste,
          isEditMode,
          setData: setWaste
        }}
      />
    </div>
  );
};

export default Datatable;