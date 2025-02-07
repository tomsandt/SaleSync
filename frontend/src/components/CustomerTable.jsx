import React from "react";
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

// Dummy data
const rows = [
    { id: 1, first_name: "Alice", last_name: "Smith", street: "Main St. 12", zip_code: "10115", city: "Berlin", email: "alice.smith@example.com", phone: "030-1234567" },
    { id: 2, first_name: "Bob", last_name: "Johnson", street: "Baker St. 5", zip_code: "10247", city: "Berlin", email: "bob.johnson@example.com", phone: "030-9876543" },
    { id: 3, first_name: "Charlie", last_name: "Müller", street: "Goethestr. 8", zip_code: "80331", city: "Munich", email: "charlie.mueller@example.com", phone: "089-2233445" },
    { id: 4, first_name: "David", last_name: "Schneider", street: "Hauptstr. 23", zip_code: "50667", city: "Cologne", email: "david.schneider@example.com", phone: "0221-5566778" },
    { id: 5, first_name: "Emma", last_name: "Fischer", street: "Neuer Markt 3", zip_code: "20095", city: "Hamburg", email: "emma.fischer@example.com", phone: "040-6677889" },
    { id: 6, first_name: "Frank", last_name: "Weber", street: "Leipziger Platz 7", zip_code: "04109", city: "Leipzig", email: "frank.weber@example.com", phone: "0341-7788991" },
    { id: 7, first_name: "Grace", last_name: "Klein", street: "Dorfstr. 4", zip_code: "70173", city: "Stuttgart", email: "grace.klein@example.com", phone: "0711-8899002" },
    { id: 8, first_name: "Henry", last_name: "Wolf", street: "Marktplatz 15", zip_code: "28195", city: "Bremen", email: "henry.wolf@example.com", phone: "0421-9900113" },
    { id: 9, first_name: "Isabella", last_name: "Schmidt", street: "Königstr. 22", zip_code: "44135", city: "Dortmund", email: "isabella.schmidt@example.com", phone: "0231-1122334" },
    { id: 10, first_name: "Jack", last_name: "Hoffmann", street: "Parkallee 9", zip_code: "68159", city: "Mannheim", email: "jack.hoffmann@example.com", phone: "0621-3344556" },
    { id: 11, first_name: "Katherine", last_name: "Bauer", street: "Bahnhofstr. 30", zip_code: "30159", city: "Hannover", email: "katherine.bauer@example.com", phone: "0511-5566778" },
    { id: 12, first_name: "Liam", last_name: "Becker", street: "Schlossallee 11", zip_code: "86150", city: "Augsburg", email: "liam.becker@example.com", phone: "0821-7788990" },
    { id: 13, first_name: "Mia", last_name: "Krüger", street: "Lindenstr. 45", zip_code: "60313", city: "Frankfurt", email: "mia.krueger@example.com", phone: "069-2233445" },
    { id: 14, first_name: "Noah", last_name: "Schulz", street: "Brückenweg 10", zip_code: "99084", city: "Erfurt", email: "noah.schulz@example.com", phone: "0361-5566778" },
    { id: 15, first_name: "Olivia", last_name: "Richter", street: "Seestr. 18", zip_code: "78462", city: "Konstanz", email: "olivia.richter@example.com", phone: "07531-6677889" }
]




const CustomerTable = () => {
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
            <Box sx={{ overflowX: "auto", height: "100%", paddingBottom: "8px" }}>
                <DataGrid
                    rows={rows}
                    columns={columns}
                    pageSizeOptions={[5]}
                    checkboxSelection
                    disableRowSelectionOnClick
                    sx={{
                        "& .MuiDataGrid-root": {
                            border: "none",
                        },
                        "& .MuiDataGrid-columnHeaders": {
                            position: "sticky",
                            top: 0,
                            zIndex: 1,
                            backgroundColor: "#f5f5f5",
                            fontSize: "16px",
                            fontWeight: "bold",
                            color: "#333",
                            borderBottom: "2px solid #e0e0e0",
                        },
                        "& .MuiDataGrid-virtualScroller": {
                            overflowY: "auto",
                            overflowX: "auto",
                        },
                        "& .MuiDataGrid-cell": {
                            color: "#555",
                            fontSize: "14px",
                            borderBottom: "1px solid #f0f0f0",
                        },
                        "& .MuiDataGrid-row:hover": {
                            backgroundColor: "#f9f9f9",
                        },
                        "& .MuiCheckbox-root": {
                            color: "#1E90FF",
                        },
                        "& .MuiDataGrid-footerContainer": {
                            position: "sticky",
                            bottom: 0,
                            zIndex: 1,
                            backgroundColor: "#f5f5f5",
                            borderTop: "1px solid #e0e0e0",
                        },
                        "& .MuiDataGrid-virtualScroller::-webkit-scrollbar": {
                            height: "8px",
                        },
                        "& .MuiDataGrid-virtualScroller::-webkit-scrollbar-thumb": {
                            backgroundColor: "#888",
                            borderRadius: "4px",
                        },
                    }}
                />
            </Box>
        </Box>
    );
};

export default CustomerTable;