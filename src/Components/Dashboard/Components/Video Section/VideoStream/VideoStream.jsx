import { useState, useEffect } from "react";
import { getVideoStreamAPI } from '../../../../../Services/userServices';

const VideoStream = () => {
    const [ videoUrl, setVideoUrl ] = useState(""); // Trạng thái lưu trữ URL video
    const [error, setError ] = useState(""); // Trạng thái lưu trữ lỗi

    useEffect(() => {
      const fetchVideoUrl = async () => {
        try {
          const response = await getVideoStreamAPI();
          if (response.status === 200) {
            setVideoUrl(response.data.video_url);
          }else{
            setError(response.data.message);
          }
      } catch (error) {
        setError("Có lỗi xảy ra khi lấy video: " + error.message);
      }
    };

    fetchVideoUrl();
  }, []);

  return (
    <div className="w-[100%] h-[95%]">
      <div className="w-full h-full flex items-center justify-center  bg-gray-200">
        {videoUrl ? (
          <video className="w-[100%] h-full rounded-md" src={videoUrl} autoPlay controls />
        ) : (
          <p className="text-green-500">{error || "Đang tải video, vui lòng đợi..."}</p>
        )}
      </div>
    </div>
  );
}

export default VideoStream;
