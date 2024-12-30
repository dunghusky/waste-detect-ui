import { Input, Modal } from "antd"
import PropTypes from "prop-types";

export const ModalCamera = ({isOpen, handleCloseModal, handleOkModal, data, isEditMode, setData, isDataEdit}) => {
    return(
        <>
        <Modal 
            title={isEditMode ? "Update Camera" :"Add New Camera"}
            open={isOpen} 
            onCancel={handleCloseModal} 
            onOk={handleOkModal}
            width={1000}
            height={1000}
            okButtonProps={{disabled:isDataEdit}}
            okText={isEditMode ? "Update Camera" : "Add New Camera"}
        >
            <div className="grid grid-cols-12">
               <div className="col-span-4">
                 <label>Tên camera</label>
                <Input 
                    value={data && data.camera_name && data.camera_name}
                    className="w-full"
                    onChange={(e) => setData((prev) => ({ ...prev, camera_name: e.target.value }))}/>
               </div>

               <div className="col-span-4">
                 <label>Địa điểm</label>
                <Input 
                    value={data && data.address && data.address} 
                    className="w-full"
                    onChange={(e) => setData((prev) => ({ ...prev, address: e.target.value }))}
                />
               </div>

               <div className="col-span-4">
                 <label>Mô tả</label>
                <Input 
                    value={data && data.note && data.note} 
                    className="w-full"
                    onChange={(e) => setData((prev) => ({ ...prev, note: e.target.value }))}/>
               </div>

               <div className="col-span-4">
                 <label>Trạng thái</label>
                <Input 
                    value={data && data.status && data.status} 
                    className="w-full"
                    onChange={(e) => setData((prev) => ({ ...prev, status: e.target.value }))}/>
               </div>
            </div>
        </Modal>
        </>
    )
}

ModalCamera.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    handleCloseModal: PropTypes.func.isRequired,
    handleOkModal: PropTypes.func.isRequired,
    data: PropTypes.object.isRequired,
    isEditMode: PropTypes.bool.isRequired,
    setData: PropTypes.func.isRequired,
    isDataEdit: PropTypes.bool.isRequired,
};