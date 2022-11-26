import { createTheme } from "@mui/material";
import {green, purple } from "@mui/material/colors";

const theme = createTheme({
  palette:{
    primary: {
      main: green[300],
    },
    secondary: {
      main: '#66bb6a',
      contrastText: '#81c784',
    },
  },
});
export default theme ;