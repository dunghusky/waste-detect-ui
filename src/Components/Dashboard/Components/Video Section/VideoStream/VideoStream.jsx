// import { useState} from "react";
// // import Hls from "hls.js";
// import { stopStreamAPI } from '../../../../../Services/userServices';

const VideoStream = () => {
//   //Usetate
//   const [loadingStart, setLoadingStart] = useState(false); // Trạng thái "Bắt đầu phân loại"
//   const [loadingStop, setLoadingStop] = useState(false);  // Trạng thái "Dừng phân loại"
//   const [error, setError] = useState(null); // Trạng thái lỗi
//   const [streamUrl, setStreamUrl] = useState(null); // URL của video stream
//   const fixedStreamUrl = "http://127.0.0.1:8000/api/v1/stream/video_feed";
//   // const navigate = useNavigate();

//   const handleStartStream = async () => {
//     setLoadingStart(true);
//     setError(null); // Reset lỗi trước khi bắt đầu

//     try {
//       setStreamUrl(fixedStreamUrl); // Sử dụng URL cố định
//       console.log('Stream started successfully with fixed URL');
//       // setStreamUrl("http://127.0.0.1:8000/api/v1/stream/video_feed"); // Cập nhật URL stream
//     } catch (err) {
//       console.error('Error starting stream:', err);
//       setError('Không thể bắt đầu phân loại.');
//     } finally {
//       setLoadingStart(false); // Kết thúc trạng thái loading cho nút "Bắt đầu"
//     }
//   };

//   const handleStopStream = async () => {
//     setLoadingStop(true);
//     setError(null); // Reset lỗi trước khi bắt đầu

//     try {
//     await stopStreamAPI(); // Gọi API dừng stream
//     console.log('Stream stopped successfully');
//     setStreamUrl(null); // Xóa URL stream => Dừng hiển thị <img>
//     } catch (err) {
//       console.error('Error stopping stream:', err);
//       setError('Không thể dừng phân loại.');
//     } finally {
//       setLoadingStop(false); // Kết thúc trạng thái loading cho nút "Dừng"
//     }
//   };

  return (
    <div className="w-[100%] h-[95%]">
      <div className="w-full h-full flex items-center justify-center bg-red-500">
        <video className="w-[100%] h-full rounded-md" src="" autoPlay loop muted></video>
      </div>
    </div>
  );
}

export default VideoStream;
