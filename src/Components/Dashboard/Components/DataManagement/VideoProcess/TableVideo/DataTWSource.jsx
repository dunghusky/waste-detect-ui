import { getVideoProcessDataAPI } from "../../../../../../Services/getData";

export const wasteColumns = [
  { field: "stt", headerName: "STT", width: 50, align: "center", headerAlign: "center",
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
      width: 70, align: "center", headerAlign: "center",
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
      field: "camera_name",
      headerName: "Tên Camera",
      width: 100, align: "center", headerAlign: "center",
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
    field: "video_name",
    headerName: "Tên Video",
    width: 100,
    align: "center", headerAlign: "center",
  },

  {
    field: "time",
    headerName: "Thời lượng",
    width: 80,
    align: "center", headerAlign: "center",
  },

  {
    field: "date_start",
    headerName: "Ngày bắt đầu",
    width: 120,
    align: "center", headerAlign: "center",
  },

  {
    field: "date_end",
    headerName: "Ngày kết thúc",
    width: 120,
    align: "center", headerAlign: "center",
  },

  {
    field: "link",
    headerName: "Link",
    width: 140,
    align: "center", headerAlign: "center",
  },

  {
    field: "note",
    headerName: "Mô tả",
    width: 100,
    align: "center", headerAlign: "center",
  },
];

// Hàm lấy dữ liệu từ API
export const fetchWasteRows = async () => {
  try {
    const response = await getVideoProcessDataAPI();
    if (response.status === 200) {
      return response.data.data.map((item, index) => ({
        stt: index + 1,
        id_video: item.maVideo,
        id_camera: item.maCamera,
        id_model: item.maMoHinh,
        video_name: item.tenVideo,
        time: item.thoiLuong,
        date_start: item.ngayBatDauQuay,
        date_end: item.ngayKetThuc,
        link: item.duongDan,
        camera_name: item.tenCamera,
        model_name:item.tenMoHinh,
        note: item.moTa,
      }));
    }
    return [];
  } catch (error) {
    console.error("Error fetching waste data:", error);
    return [];
  }
};