import "../../../../../Dashboard/Components/DataManagement/Camera/TableCamera/Table_Camera.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useEffect, useState } from "react";
import { getCameraDataAPI } from "../../../../../../Services/getData";

const List = () => {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getCameraDataAPI();
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
            <TableCell className="tableCell">Tên Camera</TableCell>
            <TableCell className="tableCell">Địa điểm</TableCell>
            <TableCell className="tableCell">Trạng thái hoạt động</TableCell>
            <TableCell className="tableCell">Mô tả</TableCell>
            <TableCell className="tableCell">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.STT}>
              <TableCell className="tableCell">{row.STT}</TableCell>
              <TableCell className="tableCell">
                <div className="cellWrapper">
                  {/* <img src={row.hinhAnh} alt="" className="image" /> */}
                  {row.tenCamera}
                </div>
              </TableCell>
              <TableCell className="tableCell">{row.diaDiem}</TableCell>
              <TableCell className="tableCell">{row.trangThaiHoatDong}</TableCell>
              <TableCell className="tableCell">{row.moTa}</TableCell>
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