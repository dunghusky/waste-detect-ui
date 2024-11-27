import { useState} from "react";
// import Hls from "hls.js";
import { stopStreamAPI } from '../../../../../Services/userServices';

const Stream = () => {
  //Usetate
  const [loadingStart, setLoadingStart] = useState(false); // Trạng thái "Bắt đầu phân loại"
  const [loadingStop, setLoadingStop] = useState(false);  // Trạng thái "Dừng phân loại"
  const [error, setError] = useState(null); // Trạng thái lỗi
  const [streamUrl, setStreamUrl] = useState(null); // URL của video stream
  const fixedStreamUrl = "http://127.0.0.1:8000/api/v1/stream/video_feed";
  // const navigate = useNavigate();

  const handleStartStream = async () => {
    setLoadingStart(true);
    setError(null); // Reset lỗi trước khi bắt đầu

    try {
      setStreamUrl(fixedStreamUrl); // Sử dụng URL cố định
      console.log('Stream started successfully with fixed URL');
      // setStreamUrl("http://127.0.0.1:8000/api/v1/stream/video_feed"); // Cập nhật URL stream
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
  // const loginUser = async () => {
  //   try {
  //     const res = await loginAPI(loginUserName, loginPassword);
  //     console.log("API response:", res);

  //     if (res.data.status === 200) {
  //       message.success("Đăng nhập thành công!");
  //      // Đợi 2 giây rồi chuyển hướng đến Dashboard
  //       setTimeout(() => {
  //         navigate("/dashboard");
  //       }, 2000);
  //     } else {
  //       message.error(res.data.message);
  //     }
  //   } catch (e) {
  //     console.log("Login error:", e);
  //     message.error("Don't login now!");
  //   }
  // };

  return (
    <div className="w-[90%] h-[90%]">
      <div className="w-full h-full flex items-center justify-center bg-red-500">
        {streamUrl ? (
          <img
            className="w-[100%] h-full rounded-md"
            src={streamUrl}
            alt="Video Stream"
          />
        ) : (
          <p className="text-white">Video stream chưa được bắt đầu</p>
        )}
      </div>

      <div className="bottom flex gap-2 w-full justify-center items-center">
       <button type='button' className='btn flex' onClick={handleStartStream} disabled={loadingStart || loadingStop}> 
        <span>{loadingStart ? 'Đang xử lý...' : 'Bắt đầu phân loại'}</span>
       </button>
       <button type='button' className='btn flex'  onClick={handleStopStream} disabled={loadingStop || loadingStart || streamUrl === null}>
        <span>{loadingStop ? 'Đang xử lý...' : 'Dừng phân loại'}</span>
       </button>
       <button type='button' className='btn flex' >
        <span>Xem lại</span>
       </button>
      </div>
      {/* Hiển thị lỗi nếu có */}
      {error && <p className="text-red-500 mt-2">{error}</p>}
    </div>
  );
}

export default Stream;
