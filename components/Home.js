import { Container ,Typography , Button } from "@mui/material";
import {makeStyles} from "@mui/styles";
import theme from "./theme";
import {NavLink} from 'react-router-dom';
import  Loginsignup from "./Loginsignup";
import { AppBar, Box, Toolbar } from '@mui/material';
import Feed from "./Feed";
const useStyles = makeStyles((theme) => ({
  
}));

const Home = () => {
  const classes = useStyles();
  return (
   <div><Feed/></div>
  );
};

export default Home;