import React from "react";
import CustomerTable from "../components/CustomerTable";
import Sidebar from "../components/Sidebar";
import { Box, Typography, Button, Breadcrumbs, Link } from "@mui/material";

const Customer = () => (
    <Box sx={{ display: "flex", width: "100vw", height: "100vh", overflow: "hidden" }}>
        <Sidebar />
        <Box component="main" sx={{ flexGrow: 1, display: "flex", flexDirection: "column", alignItems: "center", bgcolor: "#F5F5F5", overflow: "hidden", p: 3 }}>

            <Box sx={{ width: "90%", maxWidth: "1250px", display: "flex", justifyContent: "flex-start", mb: 1 }}>
                <Breadcrumbs sx={{ fontSize: 14, "& a": { textDecoration: "none", color: "#1E90FF" } }}>
                    <Link href="/">Dashboard</Link>
                    <Typography color="text.primary">Customer</Typography>
                </Breadcrumbs>
            </Box>

            <Box sx={{ width: "90%", maxWidth: "1250px", display: "flex", justifyContent: "space-between", alignItems: "center", mb: 2 }}>
                <Typography variant="h4" sx={{ fontWeight: "bold" }}>Customer</Typography>
                <Button variant="contained" sx={{ textTransform: "none", bgcolor: "#1E90FF", "&:hover": { bgcolor: "#1C86EE" } }}>
                    Add Customer
                </Button>
            </Box>

            <Box sx={{ width: "90%", maxWidth: "1300px", flexGrow: 1, minHeight: "calc(100% - 180px)", display: "flex", justifyContent: "center", overflow: "hidden" }}>
                <CustomerTable />
            </Box>

        </Box>
    </Box>
);

export default Customer;
