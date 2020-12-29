import React from 'react';



import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import CardHeader from '@material-ui/core/CardHeader';

import Avatar from '@material-ui/core/Avatar';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';

import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';
import TextField from '@material-ui/core/TextField';

import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import PropTypes from 'prop-types';

import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';

import Chip from '@material-ui/core/Chip';

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import CreateIcon from '@material-ui/icons/Create';
import GroupAddIcon from '@material-ui/icons/GroupAdd';


import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';




const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
    },
    button: {
      marginTop: theme.spacing(1),
      marginRight: theme.spacing(1),
    },
    actionsContainer: {
      marginBottom: theme.spacing(2),
    },
    resetContainer: {
      padding: theme.spacing(3),
    },

    roottab: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
        display: 'flex',
        height: 224,
      },
    tabs: {
        borderRight: `1px solid ${theme.palette.divider}`,
      },
  }));





function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`vertical-tabpanel-${index}`}
        aria-labelledby={`vertical-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
  };
  
  function a11yProps(index) {
    return {
      id: `vertical-tab-${index}`,
      'aria-controls': `vertical-tabpanel-${index}`,
    };
  }


export default function About() {

    const classes = useStyles();
    
    // FOR TAB WORK ie ABOUT ME
    const [value, setValue] = React.useState(0);
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

  return (
    <div>
           <div style={{padding:'10px 20px 0px 20px',background:'lavender'}}>
               <Typography  variant="h6" component="h5" style={{padding:'10px',height:'30px'}}>About</Typography>
            </div>
            <Divider />

            <div className={classes.roottab}>
                <Tabs   orientation="vertical"   variant="scrollable"
                  value={value}    onChange={handleChange}
                  aria-label="Vertical tabs example" className={classes.tabs}
                >
                  <Tab label="Overview" {...a11yProps(0)} />
                  <Tab label="Education" {...a11yProps(1)} />
                  <Tab label="Word and experience" {...a11yProps(2)} />
                  <Tab label="COntact info" {...a11yProps(3)} />
                </Tabs>
                <TabPanel value={value} index={0} style={{height:'100%',overflow:'scroll',width:'100%',overflowX:'hidden'}}>
                    <List className={classes.root}>
                        <ListItem><ListItemAvatar>  <Avatar>    {/* <ImageIcon /> */}  </Avatar></ListItemAvatar>
                          <ListItemText 
                          primary="Undergraduate Computer Engineering" 
                          secondary="ZHCET,AMU" />
                        </ListItem>
                        <ListItem><ListItemAvatar>  <Avatar>    {/* <WorkIcon /> */}  </Avatar>
                          </ListItemAvatar>
                          <ListItemText primary="Work" secondary="Jan 7, 2014" />
                        </ListItem>
                    </List>
                </TabPanel>

                <TabPanel value={value} index={1} style={{height:'100%',overflow:'scroll',width:'100%',overflowX:'hidden'}}>
                    <List className={classes.root}>
                        <ListItem><ListItemAvatar>  <Avatar>    {/* <ImageIcon /> */}  </Avatar></ListItemAvatar>
                          <ListItemText 
                          primary="Undergraduate Computer Engineering" 
                          secondary="ZHCET,AMU" />
                        </ListItem>
                        <ListItem><ListItemAvatar>  <Avatar>    {/* <WorkIcon /> */}  </Avatar>
                          </ListItemAvatar>
                          <ListItemText 
                          primary="Senior Secondary School" 
                          secondary="AMU" />
                        </ListItem>
                        <ListItem>
                            <ListItemAvatar><Avatar> {/* <BeachAccessIcon /> */}  </Avatar></ListItemAvatar>
                          <ListItemText 
                          primary="Primary Education" 
                          secondary="Midas School of Learning" />
                        </ListItem>
                    </List>
                </TabPanel>
                        
                <TabPanel value={value} index={2} style={{height:'100%',overflow:'scroll',width:'100%',overflowX:'hidden'}}>
                    <List className={classes.root}>
                        <ListItem><ListItemAvatar>  <Avatar>    {/* <ImageIcon /> */}  </Avatar></ListItemAvatar>
                          <ListItemText primary="Photos" secondary="Jan 9, 2014" />
                        </ListItem>
                        <ListItem><ListItemAvatar>  <Avatar>    {/* <WorkIcon /> */}  </Avatar>
                          </ListItemAvatar>
                          <ListItemText primary="Work" secondary="Jan 7, 2014" />
                        </ListItem>
                        <ListItem>
                            <ListItemAvatar><Avatar> {/* <BeachAccessIcon /> */}  </Avatar></ListItemAvatar>
                          <ListItemText primary="Vacation" secondary="July 20, 2014" />
                        </ListItem>
                    </List>
                </TabPanel>


                <TabPanel value={value} index={3} style={{height:'100%',overflow:'scroll',width:'100%',overflowX:'hidden'}}>
                    <List className={classes.root}>
                        <ListItem><ListItemAvatar>  <Avatar>    {/* <ImageIcon /> */}  </Avatar></ListItemAvatar>
                          <ListItemText 
                          primary="Website" 
                          secondary="Jan 9, 2014" />
                        </ListItem>
                        <ListItem><ListItemAvatar>  <Avatar>    {/* <WorkIcon /> */}  </Avatar>
                          </ListItemAvatar>
                          <ListItemText 
                          primary="Instagram" 
                          secondary="Jan 7, 2014" />
                        </ListItem>
                    </List>
                </TabPanel>
        </div>
    </div>
    
  );
}