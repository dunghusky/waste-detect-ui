import { getModelCategoryDataAPI } from "../../../../../../Services/getData";

export const wasteColumns = [
  {
    field: "stt",
    headerName: "STT",
    width: 70,
    align: "center",
    headerAlign: "center",
    // renderCell: (params) => {
    //   return (
    //     <div className="flex items-center justify-center w-full">
    //        {params.rowIndex + 1} {/* Sử dụng rowIndex để lấy số thứ tự */}
    //     </div>
    //   );
    // },
  },
  {
    field: "model_name",
    headerName: "Tên mô hình",
    width: 200,
    align: "center",
    headerAlign: "center",
    // renderCell: (params) => {
    //   return (
    //     <div className="cellWithImg">
    //       <img className="cellImg" src={params.row.img} alt="avatar" />
    //       {params.row.category_name}
    //     </div>
    //   );
    // },
  },
  {
    field: "link",
    headerName: "Link",
    width: 320,
    align: "center",
    headerAlign: "center",
  },

  {
    field: "train",
    headerName: "Trainning",
    width: 250,
    align: "center",
    headerAlign: "center",
  },

  {
    field: "img",
    headerName: "Hình ảnh",
    width: 250,
    align: "center",
    headerAlign: "center",
  },

  {
    field: "date",
    headerName: "Ngày thêm",
    width: 250,
    align: "center",
    headerAlign: "center",
  },

  {
    field: "note",
    headerName: "Ghi chú",
    width: 250,
    align: "center",
    headerAlign: "center",
  },
];

// Hàm lấy dữ liệu từ API
export const fetchWasteRows = async () => {
  try {
    const response = await getModelCategoryDataAPI();
    if (response.status === 200) {
      return response.data.data.map((item, index) => ({
        stt: index + 1,
        id_model: item.maMoHinh,
        model_name: item.tenMoHinh,
        link: item.duongDan,
        note: item.ghiChu,
        img: item.img,
        date: item.ngayThem,
        train: item.ketQua,
      }));
    }
    return [];
  } catch (error) {
    console.error("Error fetching waste data:", error);
    return [];
  }
};