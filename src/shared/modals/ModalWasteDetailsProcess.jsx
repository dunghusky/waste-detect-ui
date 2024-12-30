import { Input, Modal } from "antd"
import PropTypes from "prop-types";

export const ModalWasteDetails = ({isOpen, handleCloseModal, handleOkModal, data, isEditMode, setData, isDataEdit}) => {
    return(
        <>
        <Modal 
            title={isEditMode ? "Update Details" :"Add New Details"}
            open={isOpen} 
            onCancel={handleCloseModal} 
            onOk={handleOkModal}
            width={1000}
            height={1000}
            okButtonProps={{disabled:isDataEdit}}
            okText={isEditMode ? "Update Details" : "Add New Details"}
        >
            <div className="grid grid-cols-12">
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

ModalWasteDetails.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    handleCloseModal: PropTypes.func.isRequired,
    handleOkModal: PropTypes.func.isRequired,
    data: PropTypes.object.isRequired,
    isEditMode: PropTypes.bool.isRequired,
    setData: PropTypes.func.isRequired,
    isDataEdit: PropTypes.bool.isRequired,
};