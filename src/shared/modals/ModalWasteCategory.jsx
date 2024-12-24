import { Input, message, Modal } from "antd"
import PropTypes from "prop-types";
import { MdDelete } from "react-icons/md";

export const ModalWasteCategory = ({isOpen, handleCloseModal, handleOkModal, data, isEditMode, setData}) => {

    // useEffect(() => {
    //     if(data && data.id_category && data.category_name) setValue({value:data.id_category, label:data.category_name});

    // },[data])

    const allowdFileTypes = {
        "image/png": true,
        "image/jpeg": true,
        "image/jpg": true
    }

    // const handleChange = (event, newValue) => {
    //     console.log("Danh mục được chọn:", newValue); // Kiểm tra giá trị danh mục
    //     setValue(newValue);
    //     setData((prev) => ({
    //         ...prev,
    //         id_category: newValue?.value || "", // Cập nhật id_category
    //         category_name: newValue?.label || "" // Cập nhật category_name
    //     }));
    // };

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
            title={isEditMode ? "Update Waste Category" :"Add New Waste Category"}
            open={isOpen} 
            onCancel={handleCloseModal} 
            onOk={handleOkModal}
            width={1000}
            height={1000}
            okText={isEditMode ? "Update Category" : "Add New Category"}
        >
            <div className="grid grid-cols-12">
               <div className="col-span-4">
                 <label>Tên danh mục</label>
                <Input 
                    value={data && data.category_name && data.category_name}
                    className="w-full"
                    onChange={(e) => setData((prev) => ({ ...prev, category_name: e.target.value }))}/>
               </div>

               <div className="col-span-4">
                 <label>Mã danh mục quy chiếu</label>
                <Input 
                    value={data && data.id_categorys && data.id_categorys} 
                    className="w-full"
                    onChange={(e) => setData((prev) => ({ ...prev, id_categorys: e.target.value }))}
                />
               </div>

               <div className="col-span-4">
                 <label>Ghi chú</label>
                <Input 
                    value={data && data.note && data.note} 
                    className="w-full"
                    onChange={(e) => setData((prev) => ({ ...prev, note: e.target.value }))}/>
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

ModalWasteCategory.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    handleCloseModal: PropTypes.func.isRequired,
    handleOkModal: PropTypes.func.isRequired,
    data: PropTypes.object.isRequired,
    isEditMode: PropTypes.bool.isRequired,
    setData: PropTypes.func.isRequired,
};