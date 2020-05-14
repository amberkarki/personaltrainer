import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Customers from './Customers';


const Formating = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(5),
    margin: 'auto',
    
    width:1000,
    color:'darkblue',
    
    
    
  },
  }));

export default function CardCustomers() {
  const classes = Formating();

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
               < Customers  />        
                  
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