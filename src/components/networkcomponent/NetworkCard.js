import React from 'react';
// import './style.css'
import { makeStyles } from '@material-ui/core/styles';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles({
//   root: {
//     maxWidth: 345,
//   },
  media: {
    height: 80,
  },
});

export default function NetworkCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}  variant="outlined" style={{margin:'10px',paddingBottom:'30px',marginTop:'30px'}}>
        <CardActionArea >
          <CardMedia
            className={classes.media}
            image="https://cdn.pixabay.com/photo/2015/03/30/12/37/jellyfish-698521_960_720.jpg"
          />
        </CardActionArea>
        <div id="networkimg">
            <Avatar  alt="Remy Sharp" src="https://cdn.pixabay.com/photo/2015/01/08/18/29/entrepreneur-593358_960_720.jpg" 
            style={{height:'100px',width:'100px',marginTop:'-50px'}}/>
        </div>
        <CardContent style={{textAlign:'center'}}>
          <Typography gutterBottom variant="h6" component="h5">Meraj Ahmed</Typography>
          <Typography variant="body2" color="textMuted" component="p">Computer Engineering</Typography>
        </CardContent>
        <CardActions style={{textAlign:'center'}}>
              <Button variant="outlined" color="primary" size="large">Connect</Button>
        </CardActions>
    </Card>
  );
}