import {
  alpha,
  AppBar,
  Box,
  InputBase,
  Toolbar,
  Typography,
} from "@mui/material";
import { Cancel, Mail, Notifications, Search } from "@mui/icons-material";
import {makeStyles} from "@mui/styles" ;
import { useState } from "react";
import Image from './logo.PNG';
import Upload from "./Upload";
import Camera from "./Camera";
import Home from "./Home";
import {Link} from 'react-router-dom';
import  Loginsignup from "./Loginsignup";
const useStyles = makeStyles((theme) => ({
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
     backgroundColor: theme.palette.primary.main,
  },
  logoLg: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  logoSm: {
    display: "block",
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  search: {
    display: "flex",
    alignItems: "center",
    backgroundColor: theme.palette.primary.main,
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.5),
    },
    borderRadius: theme.shape.borderRadius,
    width: "65%",
    [theme.breakpoints.down("sm")]: {
      display: (props) => (props.open ? "flex" : "none"),
      width: "70%",
    },
  },
  input: {
    color: "white",
    marginLeft: theme.spacing(2),
  },
  cancel: {
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  searchButton: {
    marginRight: theme.spacing(1),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  icons: {
    alignItems: "right",
    display: (props) => (props.open ? "none" : "flex"),
  },
  badge: {
    marginRight: theme.spacing(1),
  },
  logo :{
    height :"70px",
    width :"100%",
    borderRadius: "80%",
  },
  Link :{
    color :"grey" ,
    textDecoration:"none",
    fontStyle: "normal",
    fontSize:"20px",
  },
}));

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const classes = useStyles({ open });
  return (
    <AppBar position="fixed">
      <Toolbar className={classes.toolbar}>
        <div>
        <img  className={classes.logo} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1DBf8nIBPZ_ItRneLJWbwDZj1RdGrnZxS-w&usqp=CAU"/>
        </div>
        <Typography variant="h6" className={classes.logoSm}>
          
        </Typography>
        <div className={classes.search}>
          <Search />
          <InputBase placeholder="Search...." className={classes.input} />
          <Cancel className={classes.cancel} onClick={() => setOpen(false)} />
        </div>
        <div className={classes.icons}>
          <Search
            className={classes.searchButton}
            onClick={() => setOpen(true)}/>
          </div>
          <div>
          <Link className={classes.Link} to='./Home'>Home</Link></div>
          <div>
          <Link className={classes.Link} to='./Loginsignup'>Login</Link></div>
          <div>
          <Link className={classes.Link} to='./Camera'>Camera</Link></div>
      </Toolbar>
    </AppBar>
  );
};
export default Navbar;
