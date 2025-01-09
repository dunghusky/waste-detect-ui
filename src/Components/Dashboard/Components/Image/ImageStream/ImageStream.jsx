import { message, Slider } from "antd";
import { useState, useEffect } from "react";
import TextArea from "antd/es/input/TextArea";
import { MdFileUpload } from "react-icons/md";
import { Autocomplete, TextField } from "@mui/material";
import axios from "axios";
import { fetchWasteRows } from "../../DataManagement/Model/TableModel/DataTWSource";
import { MdDelete } from "react-icons/md";

// const JsonViewer = ({ jsonString }) => {
//   // Chuyển chuỗi JSON thành đối tượng JSON
//   const jsonData = JSON.parse(jsonString);

//   return (
//     <pre
//       style={{
//         fontSize: "16px",
//         color: "#333",
//         background: "#f4f4f4",
//         padding: "10px",
//         borderRadius: "5px",
//         overflowX: "auto",
//         boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
//       }}
//     >
//       {JSON.stringify(jsonData, null, 2)}
//     </pre>
//   );
// };

const ImageStream = () => {
  const [inputValueCoonfidence, setInputValueCoonfidence] = useState(50);
  const [inputValueOverlap, setInputValueOverlap] = useState(50);
  const [inputValueJson, setInputValueJson] = useState("abc");
  const [imageOutput, setImageOutput] = useState(null);
  const [imageInput, setImageInput] = useState();
  const [isLoadingUploadImage, setIsLoadingUploadImage] = useState(false);
  const [models, setModels] = useState([]); // Trạng thái lưu danh sách mô hình
  const [selectedModel, setSelectedModel] = useState(null); // Trạng thái lưu mô hình được chọn

  useEffect(() => {
    // Lấy dữ liệu mô hình từ API
    const loadModels = async () => {
      try {
        const data = await fetchWasteRows();
        const formattedData = data.map((item) => ({
          value: item.id_model,
          label: item.model_name,
          link: item.link,
        }));
        setModels(formattedData);
      } catch (error) {
        console.error("Error fetching models:", error);
      }
    };

    loadModels();
  }, []);

  const handleUploadImage = (e) => {
    if (!selectedModel) {
      message.error("Vui lòng chọn mô hình!");
      return;
    }
    console.log("Vào upload máy", e);

    if (e.target.files && e.target.files.length > 0) {
      setImageInput(e.target.files[0]);
      setIsLoadingUploadImage(true);
      handleGetAPIUploadImage(e.target.files[0], selectedModel);
    }
  };

  // const handleGetAPIUploadImage = (fileUpload) => {
  //   if (!selectedModel || !imageInput) {
  //     alert("Vui lòng chọn mô hình và tải ảnh!");
  //     return;
  //   }

  //   setIsLoadingUploadImage(true);
  //   try {
  //     setImageInput("");
  //     //nếu trả về thì set loading thành false
  //   } catch (e) {
  //     setIsLoadingUploadImage(false);
  //     console.log(e);
  //   }
  // };

  const handleGetAPIUploadImage = async (fileUpload, selectedModel) => {
    if (!fileUpload) {
      message.error("Vui lòng chọn mô hình và tải ảnh!");
      return;
    }

    const formData = new FormData();
    formData.append("img", fileUpload); // Ảnh đầu vào
    formData.append("conf", inputValueCoonfidence / 100); // Giá trị Confidence (0-1)
    formData.append("iou", inputValueOverlap / 100); // Giá trị IOU (0-1)
    formData.append("path_model", selectedModel.link); // Đường dẫn model

    try {
      const response = await axios.post(
        "/api/v1/image/image_detect",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log("Data res:", response);
      if (response.status === 200) {
        setImageOutput(response.data.data);
      }
    } catch (error) {
      console.error("Error uploading image:", error);
      alert("Xảy ra lỗi khi xử lý ảnh!");
    } finally {
      setIsLoadingUploadImage(false);
    }
  };

  const onChangeConfidence = (newValue) => {
    setInputValueCoonfidence(+newValue);
  };
  const onChangeOverlap = (newValue) => {
    setInputValueOverlap(+newValue);
  };

  const handleDeleteImage = () => {
    setImageInput("");
    setImageOutput("");
    setInputValueCoonfidence(50);
    setInputValueOverlap(50);
  };

  const handleMouseUp = () => {
    console.log("On mouse up");
    handleGetAPIUploadImage(imageInput, selectedModel);
  };

  const handleSetSelect = (newValue) => {
    if (newValue) {
      setSelectedModel(newValue);
      handleGetAPIUploadImage(imageInput, newValue);
    }
  };

  return (
    <div className="w-[100%] h-[95%] px-6 py-4">
      <div className="w-full rounded-md border border-slate-200 py-2 px-10 bg-white">
        <Autocomplete
          className="w-full"
          options={models}
          getOptionLabel={(option) => option.label || ""}
          value={selectedModel}
          onChange={(event, newValue) => handleSetSelect(newValue)}
          renderInput={(params) => (
            <TextField {...params} variant="outlined" /> //label="Age"
          )}
        />
      </div>
      <div className="flex gap-3 justify-center items-center w-full mt-5 h-full">
        <div className="w-[25%] p-4 rounded-lg border border-slate-200 shadow-sm bg-white h-full flex flex-col items-center gap-2">
          <p className="font-medium mb-2">Upload Image or Video File</p>
          <div className="border border-dashed bg-white border-slate-200 rounded-md p-8 flex flex-col items-center justify-center">
            <p className="font-normal text-xs mb-2">Drop file here or</p>
            <div>
              <input
                type="file"
                id="upload-image"
                className="hidden"
                onChange={(e) => handleUploadImage(e)}
              />
              <label
                htmlFor="upload-image"
                className="border border-slate-200 rounded-md px-4 py-2 bg-white flex items-center gap-2 text-xs hover:text-sky-500 cursor-pointer hover:shadow-md"
              >
                <MdFileUpload />
                Upload File
              </label>
            </div>
          </div>
          {imageInput && (
            <div className="group relative w-fit h-fit mt-4">
              <img
                src={URL.createObjectURL(imageInput)}
                className="rounded-md h-[100px] w-fit"
                alt="input-image"
              />
              <MdDelete
                className="group-hover:block hidden text-red-500 cursor-pointer absolute right-2 top-2"
                onClick={handleDeleteImage}
              />
            </div>
          )}
        </div>
        <div className="w-[50%] p-5 rounded-lg border border-slate-200 shadow-sm bg-white h-full flex items-center justify-center">
          {isLoadingUploadImage
            ? "Loading..."
            : imageOutput && (
                <img
                  src={imageOutput}
                  className="h-fit w-fit max-h-full rounded-md"
                  alt="output-image"
                />
              )}
        </div>
        <div className="w-[25%] p-4 rounded-lg border border-slate-200 shadow-sm bg-white h-full flex flex-col gap-4">
          <div className="border border-slate-200 rounded-lg shadow-sm p-4 w-full">
            <label>Confidence Threshold: {inputValueCoonfidence}%</label>
            <div className="flex items-center gap-2 text-xs mb-2">
              <lebel>0%</lebel>
              <Slider
                min={1}
                max={100}
                className="w-full"
                onChange={onChangeConfidence}
                value={inputValueCoonfidence}
                onChangeComplete={handleMouseUp}
              />
              <lebel>100%</lebel>
            </div>
            <label>Overlap Threshold: {inputValueOverlap}%</label>
            <div className="flex items-center gap-2 text-xs">
              <lebel>0%</lebel>
              <Slider
                min={1}
                max={100}
                className="w-full"
                onChange={onChangeOverlap}
                value={inputValueOverlap}
                onChangeComplete={handleMouseUp}
              />
              <lebel>100%</lebel>
            </div>
          </div>
          <div className="border border-slate-200 rounded-lg shadow-sm p-4 flex-1 w-full">
            <TextArea rows={2} value={inputValueJson} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageStream;
