import { getVideoDetailProcessDataAPI } from "../../../../../../Services/getData";

export const wasteColumns = [
  { field: "stt", headerName: "STT", width: 70, align: "center", headerAlign: "center",
   },
    {
      field: "video_name",
      headerName: "Tên video",
      width: 250, align: "center", headerAlign: "center",
    },
    {
      field: "waste_name",
      headerName: "Tên rác thải",
      width: 250, align: "center", headerAlign: "center",
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
      field: "details",
      headerName: "Số lượng xử lý",
      width: 140,
      align: "center", headerAlign: "center",
    },

    {
      field: "note",
      headerName: "Ghi chú",
      width: 180,
      align: "center", headerAlign: "center",
    },
];

// Hàm lấy dữ liệu từ API
export const fetchWasteRows = async () => {
  try {
    const response = await getVideoDetailProcessDataAPI();
    if (response.status === 200) {
      return response.data.data.map((item, index) => ({
        stt: index + 1,
        id_video: item.maVideo,
        id_waste: item.maRacThai,
        video_name: item.tenVideo,
        waste_name: item.tenRacThai,
        details: item.soLuongXuLy,
        note: item.ghiChu,
      }));
    }
    return [];
  } catch (error) {
    console.error("Error fetching waste data:", error);
    return [];
  }
};