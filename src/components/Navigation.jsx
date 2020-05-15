import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {makeStyles } from '@material-ui/core/styles';
import{  Link} from 'react-router-dom';
import Card from '../components/Card';

const Formating = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },

  }));

export default function SearchAppBar() {
  const classes = Formating();

  return (
    <div className={classes.root}>
      <AppBar position="static">
              <Toolbar>                  
                  <Typography className={classes.title} variant="h6" noWrap>
                      <Link className="nav-link" to = "/"> |  Home  | </Link>
                  </Typography>
                  
                  <Typography className={classes.title} variant="h6" noWrap>
                      <Link className="nav-link" to = "/customers">  |  Customers Info  |  </Link>
                  </Typography>
                  
                  <Typography className={classes.title} variant="h6" noWrap>
                      <Link className="nav-link" to = "/traininglist">  |  Training Info  |  </Link>
                  </Typography>

                  <Typography className={classes.title} variant="h6" noWrap>
                      <Link className="nav-link" to = "/customerstraining">  | Customers/ Training  |  </Link>
                  </Typography>

                  <Typography className={classes.title} variant="h6" noWrap>
                      <Link className="nav-link" to = "/calender">  |   Calendar  |  </Link>
                  </Typography>

<<<<<<< HEAD
                  
=======
>>>>>>> 30a887bdf55ffd0553a2b80f54bc99916022acc1
             </Toolbar>
      </AppBar> <br />
      <Card /> 

    </div>
  );
}
