import {makeStyles} from "@mui/styles";
import {Grid} from "@mui/material";
import React from "react";
import { BrowserRouter , Route, Routes} from "react-router-dom";
import Leftbar from "./components/Leftbar";
import Feed from "./components/Feed";
import Navbar from "./components/Navbar";
import Rightbar from "./components/Rightbar";
import Dashboard from "./components/Dashboard";
import Forgetpassword from "./components/Forgetpassword";
import Camera from "./components/Camera";
import Home from "./components/Home";
import Learnmore from "./components/Learnmore";
import  Loginsignup from "./components/Loginsignup";
import Layout from "./Layout";
import out  from   "./components/out";
const useStyles = makeStyles((theme) => ({
}));
    const App=()=> {
      return (
        <>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Layout />}>
              <Route path="/Home" element={<Home />} />
            <Route path="Camera" element={<Camera />} />
            <Route path="Loginsignup" element={<Loginsignup/>} />
            <Route path="Learnmore" element={<Learnmore/>} />
            <Route path="Forgetpassword" element={<Forgetpassword/>} />
            </Route>
            </Routes>
          </BrowserRouter>
        </> 
      );}
    export default App ;