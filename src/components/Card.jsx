import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
//import ButtonBase from '@material-ui/core/ButtonBase';
import Counter from'./Counter';
import Trainings from './Trainings';
import Charts from './Charts';
import Traininginfo from './Traininginfo';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
   marginLeft:200,
   marginRight:200,
    maxWidth: 'auto',
    color:'#e6ffee',
    background:'#002080'
   
    
    
  },
  }));

export default function Card() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div>
      <Paper className={classes.paper}> 
               <Grid container spacing={3}>    
         
          <Grid item xs={12} sm container>
         
            <Grid item xs container direction="row" spacing={3} justify="center"
            alignItems="center" >
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1">
                  || Today's Customers || 
                  <Counter />   
                  || Stay Feet and Healthy ||            
                  
                    </Typography>
                  
                               
              </Grid>
              
            </Grid>
            
            <Grid item xs container direction="row" spacing={3} justify="center"
            alignItems="center" >
              <Grid item xs>
              <Typography gutterBottom variant="subtitle1">
                  || Currently We are Serving ||
                 <Trainings/> || Activities to our Customers ||
                 
                </Typography>
                
              </Grid>
              
            </Grid>
            <Grid item xs container direction="row" spacing={5} justify="center"
            alignItems="center" >
              <Grid item xs>
              <Typography gutterBottom variant="subtitle1">
                  || Activities Charts ||
                  <Charts/>

                 
                </Typography>
                
              </Grid>
              
            </Grid>
            <Grid item xs container direction="row" spacing={5} justify="center"
            alignItems="center" >
              <Grid item xs>
              <Typography gutterBottom variant="subtitle1">
                  <Traininginfo/>

                 
                </Typography>
                
              </Grid>
              
            </Grid>

                     
            
            
          </Grid>
        </Grid>
      </Paper>
      </div>

           
    </div>
  );
}