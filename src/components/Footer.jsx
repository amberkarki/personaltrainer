import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: 'auto',
    color:'#e6ffee',
    height:60,
  
    background:'#060657'
    
    
  },
  }));

export default function Footers () {
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
                              
                                  <p style={{textAlign:'center'}}>  
                                  Study Purpose &copy; Amber karki  | 
                 <a  href = "https://www.linkedin.com/in/amberkarki/" target="_blank" rel='noreferrer noopener'> Linkind </a>   |   
                 <a href="https://github.com/amberkarki" target="_blank" rel='noreferrer noopener'>GitHub </a>   |
                 <a href='mailto:amberkarki@gmail.com'> E-mail  |</a></p>

                
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