import { CssBaseline } from "@mui/material";
import { Outlet } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Learnmore from "./components/Learnmore";
const Layout = () => {
  return <>
    <CssBaseline />
    <Dashboard/>
    <Outlet />
  </>;
};
export default Layout;