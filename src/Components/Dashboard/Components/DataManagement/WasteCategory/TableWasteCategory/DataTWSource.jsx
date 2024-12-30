import { getWasteCategoryDataAPI } from "../../../../../../Services/getData";

export const wasteColumns = [
  { field: "stt", headerName: "STT", width: 70, align: "center", headerAlign: "center",
    // renderCell: (params) => {
    //   return (
    //     <div className="flex items-center justify-center w-full">
    //        {params.rowIndex + 1} {/* Sử dụng rowIndex để lấy số thứ tự */}
    //     </div>
    //   );
    // },
   },
    {
      field: "category_name",
      headerName: "Tên danh mục",
      width: 200, align: "center", headerAlign: "center",
      renderCell: (params) => {
        return (
          <div className="cellWithImg">
            <img className="cellImg" src={params.row.img} alt="avatar" />
            {params.row.category_name}
          </div>
        );
      },
    },
  {
    field: "id_categorys",
    headerName: "Mã danh mục quy chiếu",
    width: 250,
    align: "center", headerAlign: "center",
  },

  {
    field: "details",
    headerName: "Tổng số lượng đã xử lý",
    width: 190,
    align: "center", headerAlign: "center",
  },

  {
    field: "note",
    headerName: "Ghi chú",
    width: 140,
    align: "center", headerAlign: "center",
  },
];

// Hàm lấy dữ liệu từ API
export const fetchWasteRows = async () => {
  try {
    const response = await getWasteCategoryDataAPI();
    if (response.status === 200) {
      return response.data.data.map((item, index) => ({
        stt: index + 1,
        id_category: item.maDanhMuc,
        category_name: item.tenDanhMuc,
        img: item.hinhAnh,
        id_categorys: item.maDanhMucQuyChieu,
        details: item.tongSoLuongDaXuLy,
        note: item.ghiChu,
      }));
    }
    return [];
  } catch (error) {
    console.error("Error fetching waste data:", error);
    return [];
  }
};