import { getWasteDataAPI } from "../../../../../../Services/getData";

export const wasteColumns = [
  { field: "id", headerName: "STT", width: 70, align: "center", headerAlign: "center",
    renderCell: (params) => {
      return (
        <div className="flex items-center justify-center w-full">
          {params.id}
        </div>
      );
    },
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
    field: "id_waste",
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
      return response.data.data.map((item) => ({
        id: item.STT,
        waste_name: item.tenRacThai,
        img: item.hinhAnh,
        id_waste: item.maRacThaiQuyChieu,
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