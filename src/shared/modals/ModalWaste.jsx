import { Input, message, Modal } from "antd"
import PropTypes from "prop-types";
import { MdDelete } from "react-icons/md";
import { useState, useEffect} from "react";
import { Autocomplete, TextField } from "@mui/material";

import { fetchWasteRows } from "../../Components/Dashboard/Components/DataManagement/WasteCategory/TableWasteCategory/DataTWSource";

export const ModalWaste = ({isOpen, handleCloseModal, handleOkModal, data, isEditMode, setData}) => {
    const [options, setOptions] = useState([]); // Khai báo options state
    const [value, setValue] = useState(null); // Khai báo value state

    useEffect(() => {
        if(data && data.id_category && data.category_name) setValue({value:data.id_category, label:data.category_name});

    },[data])

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const wasteRows = await fetchWasteRows();
                const categories = wasteRows.map((waste) => ({
                        value: waste.id_category,
                        label: waste.category_name,
                    }));
                    setOptions(categories);
                } catch (error) {
                    console.error("Error fetching categories:", error);
                }
            };

        fetchCategories();
    }, []);

    const allowdFileTypes = {
        "image/png": true,
        "image/jpeg": true,
        "image/jpg": true
    }

    const handleChange = (event, newValue) => {
        console.log("Danh mục được chọn:", newValue); // Kiểm tra giá trị danh mục
        setValue(newValue);
        setData((prev) => ({
            ...prev,
            id_category: newValue?.value || "", // Cập nhật id_category
            category_name: newValue?.label || "" // Cập nhật category_name
        }));
    };

    const onChangeUploadFile = (file) => {
        if(file){const isInvalidFileType = !allowdFileTypes[file.type];
        if(!isInvalidFileType){
            console.log("Check file upload", file)
            setData((prev) => {
                console.log(prev);
                const dataPrev = prev ? prev : {};
                return {...dataPrev, img: file}
            })
        }
        else{
            message.error("Please upload file in allowed formats!")
            return
        }
        }
    }

    const handleDeleteImage = () => {
        console.log("Vào");
        
        setData((prev) => {return{...prev, img: null}})
    }    

    const isURL = (value) => {
        try {
            new URL(value); 
            return true;
        } catch {
            return false;
        }
    };

    const imgSrc = () => {
        console.log("Vào đây");
        
        if(data && data.img){
            console.log('Vào đây');
            
           return isURL(data.img)
            ? data.img
            : URL.createObjectURL(data.img); 
        }
    }

    return(
        <>
        <Modal 
            title={isEditMode ? "Update Waste" :"Add New Waste"}
            open={isOpen} 
            onCancel={handleCloseModal} 
            onOk={handleOkModal}
            width={1000}
            height={1000}
            okText={isEditMode ? "Update Waste" : "Add New Waste"}
        >
            <div className="grid grid-cols-12">
               <div className="col-span-4">
                 <label>Tên rác thải</label>
                <Input 
                    value={data && data.waste_name && data.waste_name}
                    className="w-full"
                    onChange={(e) => setData((prev) => ({ ...prev, waste_name: e.target.value }))}/>
               </div>

               <div className="col-span-4">
                 <label>Mã rác thải quy chiếu</label>
                <Input 
                    value={data && data.id_wastes && data.id_wastes} 
                    className="w-full"
                    onChange={(e) => setData((prev) => ({ ...prev, id_wastes: e.target.value }))}
                />
               </div>

               <div className="col-span-4">
                 <label>Ghi chú</label>
                <Input 
                    value={data && data.note && data.note} 
                    className="w-full"
                    onChange={(e) => setData((prev) => ({ ...prev, note: e.target.value }))}/>
               </div>

               <div className="col-span-4">
                 <label>Danh mục</label>
                 <Autocomplete
                    className="w-full"
                    options={options}
                    getOptionLabel={(option) => option.label || ""}
                    value={value}
                    onChange={handleChange}
                    renderInput={(params) => (
                        <TextField {...params}  variant="outlined" /> //label="Age"
                    )}
                    />
               </div>
               <div className="col-span-12 flex flex-col !justify-start !items-start">
                <p>Upload Image</p>
                <input type = "file" id = "upload" hidden 
                    onChange={(e) => onChangeUploadFile(e.target.files[0])}/>
                <div className="flex gap-2">
                    {data && data.img && 
                    <div className="relative group">
                        <MdDelete 
                        onClick={handleDeleteImage}
                        className="absolute right-1 top-1 group-hover:block hidden text-red-500 cursor-pointer"/>
                        {isEditMode ?<img src={imgSrc()} alt="File image waste" className="h-[120px] w-fit rounded-lg"/>: <img src={URL.createObjectURL(data.img)} alt="File image waste" className="h-[120px] w-fit rounded-lg"/>}
                    </div>}
                <label htmlFor = "upload" className="h-[120px] w-[120px] rounded-lg border border-dashed cursor-pointer flex items-center justify-center">Select File</label>
                </div>
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
    setData: PropTypes.func.isRequired,
};