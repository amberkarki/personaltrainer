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
 

    
export default function EditCustomers(props) {
    const classes =useStyles();
  const [open, setOpen] = React.useState(false);
  
  const[customers, setCustomers]=React.useState({
    firstname:'',
    lastname:'',
    streetaddress:'',
    postcode:'',
    city:'',
    email:'',
    phone:'',
  });
 
  const handleClickOpen = () => {
      setCustomers({
          firstname:props.customers.firstname,
          lastname:props.customers.lastname,
          streetaddress:props.customers.streetaddress,
          postcode:props.customers.postcode,
          city:props.customers.city,
          email:props.customers.email,
          phone:props.customers.phone,

      })

      setOpen(true);
  };
 
  const handleClose = () => {
    
    props.updateCustomers(props.customers.links[1].href, customers);
    setCustomers({
        firstname:'',
        lastname:'',
        streetaddress:'',
        postcode:'',
        city:'',
        email:'',
        phone:'',

    })
    setOpen(false);
  };
  
  const handelInputChange = (event) =>{
    
    setCustomers({...customers, [event.target.name]: event.target.value
    })
  };
  const handleCancel = () => {
    setOpen(false);
  };
 

  
  return(
    
    <div className="container">
        <div className={classes.root}>
     <Button variant ="contained" color="primary"  onClick={handleClickOpen}>
       Update
     </Button>
     </div>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title"> Edit Customers</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="First Name"
            name="firstname"
            value={customers.firstname}
            onChange={(e) => handelInputChange(e)}
            fullWidth
          />
          <TextField
          autoFocus
          margin="dense"
          id="name"
          label="Last Name"
          name="lastname"
          value={customers.lastname}
          onChange={(e) => handelInputChange(e)}
          fullWidth
          />
          <TextField
          autoFocus
          margin="dense"
          id="name"
          label="Streetaddress"
          name="streetaddress"
          value={customers.streetaddress}
          onChange={(e) => handelInputChange(e)}
          fullWidth
          />
          <TextField
          autoFocus
          margin="dense"
          id="name"
          label="Postcode"
          name="postcode"
          value={customers.postcode}
          onChange={(e) => handelInputChange(e)}
          fullWidth
          />
          <TextField
          autoFocus
          margin="dense"
          id="name"
          label="City"
          name="city"
          value={customers.city}
          onChange={(e) => handelInputChange(e)}
          fullWidth
          />
          <TextField
          autoFocus
          margin="dense"
          id="name"
          label="Email"
          name="email"
          value={customers.email}
          onChange={(e) => handelInputChange(e)}
          fullWidth
          />
            <TextField
          autoFocus
          margin="dense"
          id="name"
          label="Phone"
          name="phone"
          value={customers.phone}
          onChange={(e) => handelInputChange(e)}
          fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCancel} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>    
    </div>
  );
}