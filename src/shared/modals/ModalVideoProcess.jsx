import { Input, Modal } from "antd"
import PropTypes from "prop-types";

export const ModalVideoProcess = ({isOpen, handleCloseModal, handleOkModal, data, isEditMode, setData, isDataEdit}) => {
    return(
        <>
        <Modal 
            title={isEditMode ? "Update Video" :"Add New Video"}
            open={isOpen} 
            onCancel={handleCloseModal} 
            onOk={handleOkModal}
            width={1000}
            height={1000}
            okButtonProps={{disabled:isDataEdit}}
            okText={isEditMode ? "Update Video" : "Add New Video"}
        >
            <div className="grid grid-cols-12">
               <div className="col-span-4">
                 <label>Mô tả</label>
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

ModalVideoProcess.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    handleCloseModal: PropTypes.func.isRequired,
    handleOkModal: PropTypes.func.isRequired,
    data: PropTypes.object.isRequired,
    isEditMode: PropTypes.bool.isRequired,
    setData: PropTypes.func.isRequired,
    isDataEdit: PropTypes.bool.isRequired,
};