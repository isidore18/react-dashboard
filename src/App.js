import React from "react";
import "./App.css";
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import DashBoardEmployees from "./Pages/DashboardEmployees/DashBoardEmployees";
import DashBoardFinance from "./Pages/DashboardFinance/DashBoardFinance";
import Sidebar from "./Components/Sidebar/Sidebar";
import DashboardContextProvider from "./context/DashboardContext";

export default function App() {
    return (
        <DashboardContextProvider >
        <Router>
            <Sidebar />
            <Routes>
                <Route path="/" element={<DashBoardFinance />} exact />
                <Route path="/dashboard-employees" element={<DashBoardEmployees />} exact />
            </Routes>
        </Router>
        </DashboardContextProvider>
    );
}
