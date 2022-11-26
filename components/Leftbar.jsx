import { Container ,Typography , Button } from "@mui/material";
import {makeStyles} from "@mui/styles";
import {grey } from "@mui/material/colors";
import {Home,  Login, ContactPage, Camera,ExitToApp, Upload} from "@mui/icons-material";
import theme from "./theme";
import {NavLink } from 'react-router-dom';
import  Loginsignup from "./Loginsignup";
import { AppBar, Box, Toolbar } from '@mui/material';
import React, { component } from 'react';
import {useAlert} from "react-alert" ;
const useStyles = makeStyles((theme) => ({
  container: {
    background: 'transparent', 
    boxShadow: "7px 5px 8px 0 rgba(0, 0, 1, 0.3)",
    height: "100vh",
    color: "white",
    paddingTop: theme.spacing(16),
    backgroundColor: theme.palette.primary.main,
    position: "sticky",
    top: 0,
    [theme.breakpoints.up("sm")]: {
      backgroundColor: "white",
      color: "#555",
      border: "2px solid #ece7e7",
    },
  },
  item: {
    display: "flex",
    alignItems: "center",
    boxShadow: "2px 5px 8px 0 rgba(0, 0, 1, 0.3)",
    marginBottom: theme.spacing(8),
    [theme.breakpoints.up("sm")]: {
      marginBottom:theme.spacing(3),
      cursor: "pointer",
    },
  },
  icon: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      fontSize: "35px",
    },
  },
  text: {
    fontWeight: 500,
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  link:{
    color :"grey" ,
    textDecoration:"none",
    fontStyle: "normal",
    fontSize:"20px",
  }
}));
 
const Leftbar = () => {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
       <div className={classes.item}>
        <Home className={classes.icon}/>
        <NavLink  className={classes.link} to='/Home' >Home </NavLink></div>
          <div className={classes.item}>
        <Camera className={classes.icon}/>
        <NavLink className={classes.link} to='/Camera' >Camera </NavLink></div>
          <div className={classes.item}>
        <Login className={classes.icon}/>
        <NavLink className={classes.link} to='/Loginsignup' >Login</NavLink></div>
    </Container>
  );
};
export default Leftbar;