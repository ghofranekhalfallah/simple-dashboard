import {
    Button,
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    CardMedia,
    Typography,
  } from "@mui/material";
  import theme from "./theme";
  import {Link} from 'react-router-dom';
  import {makeStyles} from "@mui/styles";
  import Learnmore from "./Learnmore";
  const useStyles = makeStyles((theme) => ({
    card: {
      marginBottom:theme.spacing(4),
      boxShadow: "2px 5px 8px 0 rgba(0, 0, 1, 0.3)",
    },
    media: {
      boxShadow: "2px 5px 8px 0 rgba(0, 0, 1, 0.3)",
      height: 315,
      [theme.breakpoints.down("sm")]: {
        height: 50,
      },
    },
    Link :{

      color :"grey" ,
      textDecoration:"none",
      fontStyle: "normal",
      fontSize:"20px",
      borderRadius: "20%",
    },
  }));
  
  const Post = ({ img, title }) => {
    const classes = useStyles();
    return (
      <Card className={classes.card}>
        <CardMedia className={classes.media} image={img} title="my post" />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        </Typography>
      </CardContent>
      <CardActions>
        <Link size="small" className={classes.Link} to='./Learnmore' >Learn More</Link>
      </CardActions>
      </Card>
    );
  };
  
  export default Post;