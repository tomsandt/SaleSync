import React, {useEffect, useState} from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Box, Paper } from "@mui/material";

const columns = [
    { field: "id", headerName: "ID", width: 100 },
    { field: "first_name", headerName: "first_name", width: 200 },
    { field: "last_name", headerName: "last_name", width: 250 },
    { field: "street", headerName: "street", width: 150 },
    { field: "zip_code", headerName: "zip_code", width: 150 },
    { field: "city", headerName: "city", width: 150 },
    { field: "email", headerName: "email", width: 150 },
    { field: "phone", headerName: "phone", width: 150 },

];

const CustomerTable = () => {
    const [rows, setRows] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetchData('https://...');
                if (!response.ok) throw new Error("API-Error");
                const data = await response.json();

                setRows(data);
            } catch (error) {
                console.error("Error: ", error);
            }
        };
        fetchData();
    }, []);

    return (
        <Box
            sx={{
                width: "100%",
                height: "100%",
                overflow: "hidden",
                borderRadius: "12px",
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                backgroundColor: "#fff",
            }}
        >
            <DataGrid
                rows={rows}
                columns={columns}
                pageSizeOptions={[5]}
                checkboxSelection
                sx={{
                    "& .MuiDataGrid-columnHeaders": {
                        position: "sticky",
                        top: 0,
                        zIndex: 1,
                        backgroundColor: "#f5f5f5",
                        fontSize: "16px",
                        fontWeight: "bold",
                        borderBottom: "2px solid #e0e0e0",
                    },
                    "& .MuiDataGrid-cell": {
                        fontSize: "14px",
                        borderBottom: "1px solid #f0f0f0",
                    },
                    "& .MuiDataGrid-row:hover": {
                        backgroundColor: "#f9f9f9",
                    },
                    "& .MuiCheckbox-root": {
                        color: "#1E90FF",
                    },
                }}
            />
        </Box>
    );
};

export default CustomerTable;