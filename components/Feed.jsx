import { Container} from "@mui/material";
import {makeStyles } from "@mui/styles";
import Post from "./Post";
import Image from './i.jpg';
import theme from "./theme";
import Paper from '@mui/material/Paper';
const useStyles = makeStyles(()=>({
  container:{
    boxShadow: "5px 5px 8px 0 rgba(0, 0, 1, 0.3)",
    paddingTop: theme.spacing(14),
  },

}));
const Feed = () => {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      <Post title="Let's explore the concept of AI in agriculture !" img="https://blog.orsys.fr/les-carnets/wp-content/uploads/2020/01/Sujet2_blog@2x.jpg"/>
      <Post title="Automatic product recognition" img="https://checklens.ai/wp-content/uploads/2022/02/identify@2x-1.png"/>
    </Container>
    
  )
};

export default Feed;