import React from "react";
// import axios from 'axios';
import * as XLSX from "xlsx";
import { RiFileExcel2Line } from "react-icons/ri";

const ExcelData = ({ data, fileName }) => {
  const handleDownload = async () => {
    const date = new Date();
    try {
      // const response = await axios.get('/api/data'); // replace with your MongoDB API endpoint
      // const data = response.data;
      const workbook = XLSX.utils.book_new();
      const sheet = XLSX.utils.json_to_sheet(data);
      XLSX.utils.book_append_sheet(workbook, sheet, "Data");
      XLSX.writeFile(workbook, `${fileName}~${date}.xlsx`);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <button
      onClick={handleDownload}
      aria-label="Download Excel Data"
      className="mr-4 text-2xl text-green-700 md:text-3xl"
    >
      <RiFileExcel2Line />
    </button>
  );
};

export default ExcelData;
