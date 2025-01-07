import { useState} from "react";
// import Hls from "hls.js";
import { stopStreamAPI } from '../../../../../Services/userServices';
import { useNavigate } from 'react-router-dom'
import '../Stream/Stream.css'
// import { BsArrowLeftShort } from "react-icons/bs";

const Stream = () => {
  //Usetate
  const [loadingStart, setLoadingStart] = useState(false); // Trạng thái "Bắt đầu phân loại"
  const [loadingStop, setLoadingStop] = useState(false);  // Trạng thái "Dừng phân loại"
  const [error, setError] = useState(null); // Trạng thái lỗi
  const [streamUrl, setStreamUrl] = useState(null); // URL của video stream
  const navigate = useNavigate();
  const fixedStreamUrl ="https://waste-detect.mekongai.com/api/v1/stream/video_feed"; //"http://127.0.0.1:8000"; http://52.88.216.148:8000//
  // const navigate = useNavigate();

  const handleStartStream = async () => {
    setLoadingStart(true);
    setError(null); // Reset lỗi trước khi bắt đầu

    try {
      setStreamUrl(fixedStreamUrl); // Sử dụng URL cố định
      console.log('Stream started successfully with fixed URL');
    } catch (err) {
      console.error('Error starting stream:', err);
      setError('Không thể bắt đầu phân loại.');
    } finally {
      setLoadingStart(false); // Kết thúc trạng thái loading cho nút "Bắt đầu"
    }
  };

  const handleStopStream = async () => {
    setLoadingStop(true);
    setError(null); // Reset lỗi trước khi bắt đầu

    try {
      await stopStreamAPI(); // Gọi API dừng stream
      console.log('Stream stopped successfully');
      setStreamUrl(null); // Xóa URL stream => Dừng hiển thị <img>
    } catch (err) {
        console.error('Error stopping stream:', err);
        setError('Không thể dừng phân loại.');
      } finally {
        setLoadingStop(false); // Kết thúc trạng thái loading cho nút "Dừng"
      }
  };

  const handleViewVideo = () => {
    // Chuyển hướng đến trang "/dashboard/realtime"
    setTimeout(() => {
        navigate("/dashboard/video");
    }, 2000);
  };

  return (
    <div className="w-[100%] h-[95%]">
      <div className="w-full h-full flex items-center justify-center bg-gray-200">
        {streamUrl ? (
          <img
            className="w-[100%] h-full rounded-md"
            src={streamUrl}
            alt="Video Stream"
          />
        ) : (
          <p className="text-green-500">Video stream chưa được bắt đầu</p>
        )}
      </div>

      <div className="mt-5 flex gap-8 w-full justify-center items-center">
       <button type='button' className='btnstream flex' onClick={handleStartStream} disabled={loadingStart || loadingStop}> 
        {/* <BsArrowLeftShort className='icon'/>   */}
        <span>{loadingStart ? 'Đang xử lý...' : 'Bắt đầu phân loại'}</span>
       </button>
       <button type='button' className='btnstream flex'  onClick={handleStopStream} disabled={loadingStop || loadingStart || streamUrl === null}>
        <span>{loadingStop ? 'Đang xử lý...' : 'Dừng phân loại'}</span>
       </button>
       <button type='button' className='btnstream flex' onClick={handleViewVideo}>
        <span>Xem lại</span>
       </button>
      </div>
      {/* Hiển thị lỗi nếu có */}
      {error && <p className="text-red-500 mt-2">{error}</p>}
    </div>
  );
}

export default Stream;
