import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { fade, makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';

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
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
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
            |  Home  |
          </Typography>
          <Typography className={classes.title} variant="h8" noWrap>
            |  Customers Info  |
          </Typography>
          <Typography className={classes.title} variant="h8" noWrap>
           |  Add New Customers  |
          </Typography>
          <Typography className={classes.title} variant="h8" noWrap>
           |  Add New Event  |
          </Typography>
          <Typography className={classes.title} variant="h8" noWrap>
           |  Traning Info  |
          </Typography>
          <Typography className={classes.title} variant="h8" noWrap>
            |  Calender  |
          </Typography>

          <Typography className={classes.title} variant="h6" noWrap>
            |  Signout  |
          </Typography>
                 


        </Toolbar>
      </AppBar>
    </div>
  );
}
