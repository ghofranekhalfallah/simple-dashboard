import {makeStyles} from "@mui/styles";
import {Grid} from "@mui/material";
import Leftbar from "./Leftbar";
import Feed from "./Feed";
import Post from "./Post";
import Navbar from "./Navbar";
import theme from "./theme";
import Paper from '@mui/material/Paper';
import Image from './i.jpg';
import Rightbar from "./Rightbar";

const useStyles = makeStyles(()=>({
  paperContainer: {
  backgroundImage: `url(${Image})`,
},
}));

const Dashboard = () => {
  const classes = useStyles();
  return (
    <div>
    <Navbar/>
    <Grid container >
      <Grid item sm={2} >
        <Paper className={classes.paperContainer}>
        <Leftbar/>
        </Paper>
      </Grid>
      <Grid item sm={7}>
        <Feed/>
      </Grid>
    </Grid>
    </div>
  );
};

export default Dashboard;
