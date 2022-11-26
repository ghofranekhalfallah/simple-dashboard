import {makeStyles} from "@mui/styles";
import {Grid} from "@mui/material";
import React from "react";
import Description1 from "./pages/Description1" ;
import Description from "./pages/Description" ;
const useStyles = makeStyles((theme) => ({
}));
    const Learnmore=()=> {
        const classes = useStyles();
      return (
    <div>
      <Grid container>
      <Grid item-a >
        <Description/>
      </Grid>
      <Grid item-b >
        <Description1/>
      </Grid>
      </Grid>
    </div>
      );
    }
    export default Learnmore;