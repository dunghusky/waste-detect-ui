import "../../../../../Dashboard/Components/Data Management/Waste/Table Waste/Table_Waste.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useEffect, useState } from "react";
import { getWasteCategoryDataAPI } from "../../../../../../Services/getData";

const List = () => {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getWasteCategoryDataAPI();
        if (response.status === 200) {
          setRows(response.data.data); // Lấy mảng dữ liệu từ response
        }
      } catch (error) {
        console.error("Error fetching waste data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">STT</TableCell>
            <TableCell className="tableCell">Tên danh mục</TableCell>
            <TableCell className="tableCell">Mã danh mục quy chiếu</TableCell>
            <TableCell className="tableCell">Tổng số lượng đã xử lý</TableCell>
            <TableCell className="tableCell">Ghi chú</TableCell>
            <TableCell className="tableCell">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.STT}>
              <TableCell className="tableCell">{row.STT}</TableCell>
              <TableCell className="tableCell">
                <div className="cellWrapper">
                  <img src={row.hinhAnh} alt="" className="image" />
                  {row.tenDanhMuc}
                </div>
              </TableCell>
              <TableCell className="tableCell">{row.maDanhMucQuyChieu}</TableCell>
              <TableCell className="tableCell">{row.tongSoLuongDaXuLy}</TableCell>
              <TableCell className="tableCell">{row.ghiChu}</TableCell>
              <TableCell className="tableCell">
                <span className={`status ${row.status}`}>{row.status}</span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default List;