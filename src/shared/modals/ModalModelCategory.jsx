import { Input, message, Modal } from "antd";
import PropTypes from "prop-types";
import { MdDelete } from "react-icons/md";

export const ModalModelCategory = ({
  isOpen,
  handleCloseModal,
  handleOkModal,
  data,
  isEditMode,
  setData,
  isDataEdit,
}) => {
  const allowdFileTypes = {
    "image/png": true,
    "image/jpeg": true,
    "image/jpg": true,
    "text/csv": true, // Thêm MIME type cho file CSV
    "application/vnd.ms-excel": true,
    "text/plain": true
  };
  const onChangeUploadFile = (file, fileType) => {
    if (file) {
      const isInvalidFileType = !allowdFileTypes[file.type];
      if (!isInvalidFileType) {
        setData((prev) => {
          console.log(prev);
          const dataPrev = prev ? prev : {};
          return { ...dataPrev, [fileType]: file };
        });
      } else {
        message.error("Please upload file in allowed formats!");
        return;
      }
    }
  };

  const handleDeleteFile = (fileType) => {
    setData((prev) => {
      return { ...prev, [fileType]: null };
    });
  };

  const isURL = (value) => {
    try {
      new URL(value);
      return true;
    } catch {
      return false;
    }
  };

  const imgSrc = () => {
    if (data && data.img) {
      return isURL(data.img) ? data.img : URL.createObjectURL(data.img);
    }
  };
  return (
    <>
      <Modal
        title={isEditMode ? "Update Model Category" : "Add New Model Category"}
        open={isOpen}
        onCancel={handleCloseModal}
        onOk={handleOkModal}
        width={1000}
        height={1000}
        okButtonProps={{ disabled: isDataEdit }}
        okText={isEditMode ? "Update Model" : "Add New Model"}
      >
        <div className="grid grid-cols-12">
          <div className="col-span-4">
            <label>Tên mô hình</label>
            <Input
              value={data && data.model_name && data.model_name}
              className="w-full"
              onChange={(e) =>
                setData((prev) => ({ ...prev, model_name: e.target.value }))
              }
            />
          </div>

          <div className="col-span-4">
            <label>Link</label>
            <Input
              value={data && data.link && data.link}
              className="w-full"
              onChange={(e) =>
                setData((prev) => ({ ...prev, link: e.target.value }))
              }
            />
          </div>
          
          <div className="col-span-4">
            <label>Ghi chú</label>
            <Input
              value={data && data.note && data.note}
              className="w-full"
              onChange={(e) =>
                setData((prev) => ({ ...prev, note: e.target.value }))
              }
            />
          </div>

          {/* Date Picker */}
          <div className="col-span-4 mt-4">
            <label>Ngày</label>
            <Input
              type="date"
              className="w-full"
              onChange={(e) =>
                setData((prev) => ({ ...prev, date: e.target.value }))
              }
              value={data && data.date}
            />
          </div>

          <div className="col-span-12 flex gap-4">
            {/* Upload Image */}
            <div className="flex flex-col !justify-start !items-start">
              <p>Upload Image</p>
              <input
                type="file"
                id="upload-img"
                hidden
                onChange={(e) => onChangeUploadFile(e.target.files[0], "img")}
              />
              <div className="flex gap-2">
                {data && data.img && (
                  <div className="relative group">
                    <MdDelete
                      onClick={() => handleDeleteFile("img")}
                      className="absolute right-1 top-1 group-hover:block hidden text-red-500 cursor-pointer"
                    />
                    <img
                      src={imgSrc()}
                      alt="File image waste"
                      className="h-[120px] w-fit rounded-lg"
                    />
                  </div>
                )}
                <label
                  htmlFor="upload-img"
                  className="h-[120px] w-[120px] rounded-lg border border-dashed cursor-pointer flex items-center justify-center"
                >
                  Select Image
                </label>
              </div>
            </div>

            {/* Upload CSV */}
            <div className="flex flex-col !justify-start !items-start">
              <p>Upload CSV</p>
              <input
                type="file"
                id="upload-csv"
                hidden
                onChange={(e) => onChangeUploadFile(e.target.files[0], "csv")}
              />
              <div className="flex gap-2">
                {data && data.csv && (
                  <div className="relative group">
                    <MdDelete
                      onClick={() => handleDeleteFile("csv")}
                      className="absolute right-1 top-1 group-hover:block hidden text-red-500 cursor-pointer"
                    />
                    <p className="text-gray-700">{data.csv.name}</p>
                  </div>
                )}
                <label
                  htmlFor="upload-csv"
                  className="h-[120px] w-[120px] rounded-lg border border-dashed cursor-pointer flex items-center justify-center"
                >
                  Select CSV
                </label>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

ModalModelCategory.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  handleCloseModal: PropTypes.func.isRequired,
  handleOkModal: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired,
  isEditMode: PropTypes.bool.isRequired,
  setData: PropTypes.func.isRequired,
  isDataEdit: PropTypes.bool.isRequired,
};
