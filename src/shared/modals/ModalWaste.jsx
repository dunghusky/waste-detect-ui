import { Input, Modal } from "antd"
import PropTypes from "prop-types";

export const ModalWaste = ({isOpen, handleCloseModal, handleOkModal, data, isEditMode}) => {
    return(
        <>
        <Modal 
            title={isEditMode ? "Update Waste" :"Add New Waste"}
            open={isOpen} 
            onCancel={handleCloseModal} 
            onOk={handleOkModal}
            width={1000}
            okText={isEditMode ? "Update Waste" : "Add New Waste"}
        >
            <div className="grid grid-cols-12">
               <div className="col-span-4">
                 <label>Test</label>
                <Input value={data && data.id_wastes && data.id_wastes} className="w-full"/>
               </div>
            </div>
        </Modal>
        </>
    )
}

ModalWaste.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    handleCloseModal: PropTypes.func.isRequired,
    handleOkModal: PropTypes.func.isRequired,
    data: PropTypes.object.isRequired,
    isEditMode: PropTypes.bool.isRequired,
};