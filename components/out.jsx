import { CssBaseline } from "@mui/material";
import { Outlet } from "react-router-dom";
import Learnmore from "./Learnmore";
const out = () => {
  return <>
    <CssBaseline />
    <Learnmore/>
    <Outlet />
  </>;
};
export default out;