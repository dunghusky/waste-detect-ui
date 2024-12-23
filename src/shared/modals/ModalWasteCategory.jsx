import { Input, message, Modal } from "antd"
import PropTypes from "prop-types";
import { MdDelete } from "react-icons/md";
import { useState} from "react";
// import MenuItem from '@mui/material/MenuItem';
// import * as React from 'react';
// import Select from '@mui/material/Select';
import { Autocomplete, TextField } from "@mui/material";

export const ModalWasteCategory = ({isOpen, handleCloseModal, handleOkModal, data, isEditMode, setData}) => {

    // const [options, setOptions] = useState([]);
    // const [value, setValue] = useState(null);

    // // Chuyển đổi data.category thành options
    // useEffect(() => {
    //     if (data && data.category) {
    //     const transformedOptions = data.category.map((item) => ({
    //         label: item, // Hoặc trường phù hợp trong item
    //         value: item, // Hoặc trường phù hợp trong item
    //     }));
    //     setOptions(transformedOptions);
    //     }
    // }, [data]);


    const allowdFileTypes = {
        "image/png": true,
        "image/jpeg": true,
        "image/jpg": true
    }

    const options = [
        { label: "None", value: "" },
        { label: "Twenty", value: 20 },
        { label: "Twenty one", value: 21 },
        { label: "Twenty one and a half", value: 22 },
    ];

    const [value, setValue] = useState(null);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    }

    // const [age, setAge] = React.useState('');

    // const handleChange = (event) => {
    //     setAge(event.target.value);
    // };

    // const onChange = (value) => {
    //     console.log(`selected ${value}`);
    // };

    // const onSearch = (value) => {
    //     console.log('search:', value);
    // };

    const onChangeUploadFile = (file) => {
        if(file){const isInvalidFileType = !allowdFileTypes[file.type];
        if(!isInvalidFileType){
            console.log("Check file upload", file)
            setData((prev) => {
                console.log(prev);
                const dataPrev = prev ? prev : {};
                return {...dataPrev, image: file}
            })
        }
        else{
            message.error("Please upload file in allowed formats!")
            return
        }
        }
    }

    const handleDeleteImage = () => {
        setData((prev) => {return{...prev, image: null}})
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
                <Input value={data && data.waste_name && data.waste_name} className="w-full"/>
               </div>
               <div className="col-span-4">
                 <label>Mã rác thải quy chiếu</label>
                <Input value={data && data.id_wastes && data.id_wastes} className="w-full"/>
               </div>
               <div className="col-span-4">
                 <label>Ghi chú</label>
                <Input value={data && data.note && data.note} className="w-full"/>
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
                {/* <Input value={data && data.id_wastes && data.id_wastes} className="w-full"/> */}
               </div>
               <div className="col-span-12 flex flex-col !justify-start !items-start">
                <p>Upload Image</p>
                <input type = "file" id = "upload" hidden 
                    onChange={(e) => onChangeUploadFile(e.target.files[0])}/>
                <div className="flex gap-2">
                    {data && data.imgega && 
                    <div className="relative group">
                        <MdDelete 
                        onClick={handleDeleteImage}
                        className="absolute right-1 top-1 group-hover:block hidden text-red-500 cursor-pointer"/>
                        <img src={URL.createObjectURL(data.imgega)} alt="File image waste" className="h-[120px] w-fit rounded-lg"/>
                    </div>}
                <label htmlFor = "upload" className="h-[120px] w-[120px] rounded-lg border border-dashed cursor-pointer flex items-center justify-center">Select File</label>
                </div>
               </div>
            </div>
        </Modal>
        </>
    )
}

ModalWasteCategory.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    handleCloseModal: PropTypes.func.isRequired,
    handleOkModal: PropTypes.func.isRequired,
    data: PropTypes.object.isRequired,
    isEditMode: PropTypes.bool.isRequired,
    setData: PropTypes.func.isRequired,
};