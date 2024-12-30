import { getCameraDataAPI } from "../../../../../../Services/getData";

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
      field: "camera_name",
      headerName: "Tên Camera",
      width: 200, align: "center", headerAlign: "center",
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
    field: "address",
    headerName: "Địa điểm",
    width: 250,
    align: "center", headerAlign: "center",
  },

  {
    field: "status",
    headerName: "Trạng thái",
    width: 140,
    align: "center", headerAlign: "center",
  },

  {
    field: "note",
    headerName: "Mô tả",
    width: 180,
    align: "center", headerAlign: "center",
  },
];

// Hàm lấy dữ liệu từ API
export const fetchWasteRows = async () => {
  try {
    const response = await getCameraDataAPI();
    if (response.status === 200) {
      return response.data.data.map((item, index) => ({
        stt: index + 1,
        id_camera: item.maCamera,
        camera_name: item.tenCamera,
        address: item.diaDiem,
        status: item.trangThaiHoatDong,
        note: item.moTa,
      }));
    }
    return [];
  } catch (error) {
    console.error("Error fetching waste data:", error);
    return [];
  }
};