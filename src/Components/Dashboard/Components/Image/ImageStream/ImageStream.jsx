import { Select, Slider } from "antd";
import TextArea from "antd/es/input/TextArea";
import { useState } from "react";
import { MdFileUpload } from "react-icons/md";
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
  // const [inputValueJson, setInputValueJson] = useState("abc");
  // const [imageOutput, setImageOutput] = useState(
  //   "../../../../../../public/img/anh.jpg"
  // );
  const [imageInput, setImageInput] = useState();
  const [isLoadingUploadImage, setIsLoadingUploadImage] = useState(false);

  const handleUploadImage = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setImageInput(e.target.files[0]);
      //gọi api ở đây
      handleGetAPIUploadImage(e.target.files[0]);
    }
  };

  const handleGetAPIUploadImage = (fileUpload) => {
    setIsLoadingUploadImage(true);
    try {
      setImageInput("");
      //nếu trả về thì set loading thành false
    } catch (e) {
      setIsLoadingUploadImage(false);
      console.log(e);
    }
  };

  const optionSelect = [
    { value: "a", label: "a" },
    { value: "a", label: "a" },
    { value: "a", label: "a" },
  ];

  const onChangeConfidence = (newValue) => {
    setInputValueCoonfidence(+newValue);
  };
  const onChangeOverlap = (newValue) => {
    setInputValueOverlap(+newValue);
  };

  return (
    <div className="w-[100%] h-[95%] px-6 py-4">
      <div className="w-full rounded-md border border-slate-200 py-2 px-10 bg-white">
        <Select options={optionSelect} value={"a"} className="w-full" />
      </div>
      <div className="flex gap-3 justify-center items-center w-full mt-5 h-full">
        <div className="w-[25%] p-4 rounded-lg border border-slate-200 shadow-sm bg-white h-full">
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
            <img
              src={URL.createObjectURL(imageInput)}
              className="rounded-md h-[100px] w-fit"
              alt="input-image"
            />
          )}
        </div>
        <div className="w-[50%] p-5 rounded-lg border border-slate-200 shadow-sm bg-white h-full flex items-center justify-center">
          {isLoadingUploadImage
            ? "Loading..."
            : imageOutput && (
                <img
                  src={imageOutput}
                  className="h-full w-fit rounded-md"
                  alt="output-image"
                />
              )}
        </div>
        <div className="w-[25%] p-4 rounded-lg border border-slate-200 shadow-sm bg-white h-full flex flex-col gap-4">
          <div className="border border-slate-200 rounded-lg shadow-sm p-4 w-full">
            <label>Coonfidence Threshold: {inputValueCoonfidence}%</label>
            <div className="flex items-center gap-2 text-xs mb-2">
              <lebel>0%</lebel>
              <Slider
                min={1}
                max={100}
                className="w-full"
                onChange={onChangeConfidence}
                value={inputValueCoonfidence}
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
