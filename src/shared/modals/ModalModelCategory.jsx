import { Input, Modal } from "antd"
import PropTypes from "prop-types";

export const ModalModelCategory = ({isOpen, handleCloseModal, handleOkModal, data, isEditMode, setData}) => {

    // useEffect(() => {
    //     if(data && data.id_category && data.category_name) setValue({value:data.id_category, label:data.category_name});

    // },[data])

    // const handleChange = (event, newValue) => {
    //     console.log("Danh mục được chọn:", newValue); // Kiểm tra giá trị danh mục
    //     setValue(newValue);
    //     setData((prev) => ({
    //         ...prev,
    //         id_category: newValue?.value || "", // Cập nhật id_category
    //         category_name: newValue?.label || "" // Cập nhật category_name
    //     }));
    // };

    return(
        <>
        <Modal 
            title={isEditMode ? "Update Model Category" :"Add New Model Category"}
            open={isOpen} 
            onCancel={handleCloseModal} 
            onOk={handleOkModal}
            width={1000}
            height={1000}
            okText={isEditMode ? "Update Model" : "Add New Model"}
        >
            <div className="grid grid-cols-12">
               <div className="col-span-4">
                 <label>Tên mô hình</label>
                <Input 
                    value={data && data.model_name && data.model_name}
                    className="w-full"
                    onChange={(e) => setData((prev) => ({ ...prev, model_name: e.target.value }))}/>
               </div>

               <div className="col-span-4">
                 <label>Link</label>
                <Input 
                    value={data && data.link && data.link} 
                    className="w-full"
                    onChange={(e) => setData((prev) => ({ ...prev, link: e.target.value }))}
                />
               </div>

               <div className="col-span-4">
                 <label>Ghi chú</label>
                <Input 
                    value={data && data.note && data.note} 
                    className="w-full"
                    onChange={(e) => setData((prev) => ({ ...prev, note: e.target.value }))}/>
               </div>
            </div>
        </Modal>
        </>
    )
}

ModalModelCategory.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    handleCloseModal: PropTypes.func.isRequired,
    handleOkModal: PropTypes.func.isRequired,
    data: PropTypes.object.isRequired,
    isEditMode: PropTypes.bool.isRequired,
    setData: PropTypes.func.isRequired,
};