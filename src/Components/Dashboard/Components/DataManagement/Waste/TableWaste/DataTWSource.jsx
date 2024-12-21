import { getWasteDataAPI } from "../../../../../../Services/getData";

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
      field: "waste_name",
      headerName: "Tên rác thải",
      width: 300, align: "center", headerAlign: "center",
      renderCell: (params) => {
        return (
          <div className="cellWithImg">
            <img className="cellImg" src={params.row.img} alt="avatar" />
            {params.row.waste_name}
          </div>
        );
      },
    },
  {
    field: "id_wastes",
    headerName: "Mã rác thải quy chiếu",
    width: 300,
    align: "center", headerAlign: "center",
  },

  {
    field: "category",
    headerName: "Danh mục",
    width: 100,
    align: "center", headerAlign: "center",
  },

  {
    field: "details",
    headerName: "Tổng số lượng đã xử lý",
    width: 100,
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
    const response = await getWasteDataAPI();
    if (response.status === 200) {
      return response.data.data.map((item, index) => ({
        stt: index + 1,
        id_waste: item.maRacThai,
        waste_name: item.tenRacThai,
        img: item.hinhAnh,
        id_wastes: item.maRacThaiQuyChieu,
        category: item.danhMuc,
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