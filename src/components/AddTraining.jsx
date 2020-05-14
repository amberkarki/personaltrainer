import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));
export default function AddTraining(props) {
    const clasess = useStyles();

  const [open, setOpen] = React.useState(false);
  
  const[training, setTraining]=React.useState({
    date:new Date(),
    duration:'',
    activity:'',
   
  });
 
  const handleClickOpen = () => {
    setOpen(true);
  };
 
  const handleClose = () => {
    
    setOpen(false);
  };
  
  const handelInputChange = (event) =>{
    
    setTraining({...training, [event.target.name]: event.target.value
    })
  };

  const addTraning =()=> {
    if(training.date === '' || training.duration === '' || training.activity === '' )
    {
     return (alert(" Comepelt all the requried field to  Add a new car !!"))
    }
    else {
      const newTraining = {
        date:training.date,
        duration:training.duration,
        activity:training.activity,
        customer:props.customer._original.links[0].href,

      }
    props.saveTraining(newTraining);
                setTraining({
                              date:new Date(),
                              duration:'',
                              activity:'',
                        })
 
    
    handleClose();
  }
  }

  
 
  return(
    <div className="container">
        <div className={clasess.root}>
     <Button variant ="contained" color="primary"  onClick={handleClickOpen}>
       Add Training
     </Button>
     </div>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title"> New Training</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Date"
            name="date"
            type ="date"
            value={training.date}
            onChange={(e) => handelInputChange(e)}
            fullWidth
          />
          <TextField
          autoFocus
          margin="dense"
          id="name"
          label="Duration"
          name="duration"
          value={training.duration}
          onChange={(e) => handelInputChange(e)}
          fullWidth
          />
          <TextField
          autoFocus
          margin="dense"
          id="name"
          label="Activity"
          name='activity'
          value={training.activity}
          onChange={(e) => handelInputChange(e)}
          fullWidth
          />
          
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={addTraning} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>    
    </div>
  );
}