import React, { useEffect, useState } from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { Box } from "@mui/material";
import axios from "axios";
import ExcelData from "./ExcelData";
// import { AiOutlineDownload } from "react-icons/ai";
import { BiRefresh } from "react-icons/bi";
// import * as XLSX from "xlsx";
import logo from "../../../assets/others/logo.webp";
import ModalView from "./ModalView";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

const TodayApp = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [data, setData] = useState([]);
  const [showMyModal, setShowMyModal] = useState(false);
  const [val, setVal] = useState({});
  const [sub, setSub] = useState(false);

  const statusOptions = ["Pending", "Approved", "Rejected"];

  useEffect(() => {
    async function fetchData() {
      try {
        // const token = localStorage.getItem("token");
        // if (!token) {
        //   window.location.href = "/login";
        //   return;
        // }
        setLoading(true);
        const res = await axios.get(
          "https://saboo-careers.onrender.com/getCareers"
        );

        // const res = await axios.get(
        //   'https://saboo-careers.onrender.com/getCareers', {
        //     headers: { Authorization: `Bearer ${token}` },
        //   }
        // );

        setData(res.data.data);

        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    }
    fetchData();
  }, [sub]);

  const handleStatusChange = (row, newStatus) => {
    // const updatedRow = { ...row, status: newStatus };
    // Send the updated status to the backend using Axios call

    // .put(`/your-endpoint/${updatedRow.id}`, updatedRow)
    // const token = localStorage.getItem('token');

    // console.log(updatedRow.id);
    axios
      .put(
        `https://saboo-careers.onrender.com/updateCareers/${row.id}`,
        // `http://localhost:3001/updateclient/${row.id}`,
        { status: newStatus }
        // {
        //   headers: { Authorization: `Bearer ${token}` },
        // }
      )
      .then((response) => {
        setSub(!sub);
      })
      .catch((error) => {
        // Handle errors
        console.error(error);
      });
  };
  const columns = [
    { field: "no", headerName: "Sr. No.", width: "60", sortable: false },

    { field: "date", headerName: "Date", flex: 0.6 },
    { field: "firstName", headerName: "First Name" },
    { field: "lastName", headerName: "Last Name" },
    {
      field: "email",
      headerName: "Email",
      // width: '300',
      // flex: 1.5,
      flex: 1,
    },
    { field: "phone", headerName: "Phone", width: "120" },
    { field: "jobTitle", headerName: "Job", flex: 1 },
    { field: "lastCompany", headerName: "Company", flex: 1 },
    {
      field: "resumeLink",
      headerName: "Resume Link",
      flex: 1.5,
      renderCell: (params) => (
        <div
          style={{
            maxWidth: "100%",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          <a href={params.value} target="_blank" rel="noopener noreferrer"
          aria-label="Resume Link"
          >
            {params.value}
          </a>
        </div>
      ),
    },

    // { field: "selectRole", headerName: "Role" },

    {
      field: "status",
      headerName: "Status",
      renderCell: (params) => (
        <Select
          value={params.row.status}
          aria-labelledby="Status"
          onChange={(e) => handleStatusChange(params.row, e.target.value)}
          style={{
            backgroundColor:
              params.row.status === "Pending"
                ? "#f5d889"
                : params.row.status === "Approved"
                ? "#8db598"
                : "#eb8888",
            // color: 'black',
            fontSize: "0.7rem",
            width: "5.5rem",
            height: "2rem",
            marginLeft: "-.25rem",
            marginTop: "1px",
            marginBottom: "2px",
            // border:"0px"
          }}
        >
          {statusOptions.map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </Select>
      ),
    },
    {
      field: "view",
      headerName: "View",
      sortable: false,
      width: 100,
      renderCell: (params) => (
        <button
          onClick={() => {
            setVal(params.row);
            setShowMyModal(true);
          }}
          aria-label="View Details"
          className="flex justify-center"
        >
          View
        </button>
      ),
    },
    // {
    //   field: "Download",
    //   flex: 0.5,
    //   headerName: "Download",
    //   sortable: false,
    //   renderCell: (params) => (
    //     <button
    //       onClick={() => handleDownload(params.row)}
    //       className="flex justify-center"
    //     >
    //       <AiOutlineDownload className="w-full mx-auto text-lg" />
    //     </button>
    //   ),
    // },
  ];

  const handleOnClose = () => setShowMyModal(false);

  // const handleDownload = (row) => {
  //   const data2 = [row];
  //   const excel = async () => {
  //     const date = new Date();
  //     try {
  //       // const response = await axios.get('/api/data'); // replace with your MongoDB API endpoint
  //       // const data = response.data;
  //       const workbook = XLSX.utils.book_new();
  //       const sheet = XLSX.utils.json_to_sheet(data2);
  //       XLSX.utils.book_append_sheet(workbook, sheet, "Data");
  //       XLSX.writeFile(workbook, `${row.firstName}~${date}.xlsx`);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   excel();
  // };

  const rows = data.map((item, index) => ({
    id: item._id,
    no: index + 1,
    ...item,
  }));

  return (
    <div>
      <div className="flex items-center justify-between h-16 my-2 overflow-hidden bg-black rounded-md shadow-lg shadow-gray-400 md:mr-4">
        <div>
          <img src={logo} alt="logo" className="pl-4 mx-auto h-9 " />
        </div>
        <div className="mx-auto my-auto font-sans text-xl tracking-widest text-center text-white uppercase">
          APPLICATIONS
        </div>
        {data.length > 0 && (
          <div className="items-center hidden md:visible md:flex">
            <BiRefresh
              className="mr-3 text-4xl text-white duration-500 cursor-pointer hover:rotate-180"
              onClick={() => setSub(true)}
            />
            {/* <button
        onClick={handleOpen}
        className='mx-2 rounded bg-gradient-to-tr  from-[#5c67f5] to-[#cb67ac] px-3 py-1  text-white'
      >
        Add Order
      </button> */}

            <ExcelData data={data} fileName="Total Application" />
            {/* <PdfData fileName='Homepage Enquiries' bdy={bdy} wid={widths} /> */}
          </div>
        )}
      </div>
      <div className="overflow-hidden font-sans ">
        <Box
          m="0 20px 0 0"
          height="90vh"
          sx={{
            "& .MuiDataGrid-root": {
              border: "none",
            },
            "& .MuiDataGrid-cell": {
              border: "0.1px solid",
              borderColor: "lightgray",
              paddingBottom: "5px",
              paddingTop: "5px",
            },
            "& .name-column--cell": {
              // color: colors.greenAccent[300],
            },
            "& .MuiDataGrid-columnHeaders": {
              background: "white",
              border: "0.2px solid lightgray", // Add a border with light gray color
              borderColor: "lightgray", // Set the color of the border
              color: "black",
            },
            // "& .MuiDataGrid-sortIcon": {
            //   color: "white !important", // Change the color of sorting arrows
            // },
            // "& .MuiDataGrid-menuIcon": {
            //   color: "white !important", // Change the color of menu options dots
            // },
            "& .MuiDataGrid-virtualScroller": {
              // backgroundColor: colors.primary[400],
            },
            "& .MuiDataGrid-footerContainer": {
              marginRight: "100px",
            },
            "& .MuiCheckbox-root": {
              // color: `${colors.greenAccent[200]} !important`,
            },
          }}
        >
          {loading ? (
            <div>Loading</div>
          ) : error ? (
            "Error ~ Something went wrong :)"
          ) : (
            <DataGrid
              // checkboxSelection
              getRowHeight={() => "auto"}
              rows={rows}
              columns={columns}
              components={{
                Toolbar: (props) => (
                  <div
                    className="custom-toolbar"
                    style={{
                      color: "black", // Set the text color to black
                    }}
                  >
                    <GridToolbar {...props} />
                  </div>
                ),
              }}
            />
          )}
        </Box>
      </div>
      <ModalView onClose={handleOnClose} visible={showMyModal} values={val} />
    </div>
  );
};

export default TodayApp;
