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


export default function AddCustomers(props) {

  const clasess = useStyles();

  const [open, setOpen] = React.useState(false);
  
  const[customer, setCustomer]=React.useState({
      firstname:'',
      lastname:'',
      streetaddress:'',
      postcode:'',
      city:'',
      email:'',
      phone:'',
  });
 
        const handleClickOpen = () => {
          setOpen(true);
        };
 
    const handleClose = () => {
      
      setOpen(false);
    };
  
      const handelInputChange = (event) =>{
        
        setCustomer({...customer, [event.target.name]: event.target.value
        })
      };

  const addCustomers =()=> {
          if(customer.firstname === '' || customer.lastname === '' || customer.streetaddress === '' || customer.postcode === '' || customer.city === '' || customer.email ==='' || customer.phome === '')
          {
<<<<<<< HEAD
          return (alert("Complete all the required field to Add a new Customer !!! "))
=======
          return (alert(" Complete all the requried field to  Add a new Customer !!"))
>>>>>>> 30a887bdf55ffd0553a2b80f54bc99916022acc1
          }
    else {
          props.saveCustomers(customer);
                setCustomer({
                      firstname:'',
                      lastname:'',
                      streetaddress:'',
                      postcode:'',
                      city:'',
                      email:'',
                      phone:'',

                })

    
    handleClose();
  }
  }

  
 
  return(
    <div className="container">
        <div className={clasess.root}>
              <Button variant ="contained" color="primary"  onClick={handleClickOpen}>
                Add New Customer
              </Button>
     </div>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
              <DialogTitle id="form-dialog-title"> New Customer</DialogTitle>
              <DialogContent>
                <TextField
                  autoFocus
                  margin="dense"
                  id="name"
                  label="First Name"
                  name="firstname"
                  value={customer.firstname}
                  onChange={(e) => handelInputChange(e)}
                  fullWidth
                />
                <TextField
                  autoFocus
                  margin="dense"
                  id="name"
                  label="Last Name"
                  name="lastname"
                  value={customer.lastname}
                  onChange={(e) => handelInputChange(e)}
                  fullWidth
                />
                <TextField
                  autoFocus
                  margin="dense"
                  id="name"
                  label="Streetaddress"
                  name="streetaddress"
                  value={customer.streetaddress}
                  onChange={(e) => handelInputChange(e)}
                  fullWidth
                />
                <TextField
                  autoFocus
                  margin="dense"
                  id="name"
                  label="Postcode"
                  name="postcode"
                  value={customer.postcode}
                  onChange={(e) => handelInputChange(e)}
                  fullWidth
                />
                <TextField
                  autoFocus
                  margin="dense"
                  id="name"
                  label="City"
                  name="city"
                  value={customer.city}
                  onChange={(e) => handelInputChange(e)}
                  fullWidth
                />
                <TextField
                  autoFocus
                  margin="dense"
                  id="name"
                  label="Email"
                  name="email"
                  value={customer.email}
                  onChange={(e) => handelInputChange(e)}
                  fullWidth
                />
                  <TextField
                  autoFocus
                  margin="dense"
                  id="name"
                  label="Phone"
                  name="phone"
                  value={customer.phone}
                  onChange={(e) => handelInputChange(e)}
                  fullWidth
                />
              </DialogContent>
              <DialogActions>
                  <Button onClick={handleClose} color="primary">
                    Cancel
                  </Button>
                  <Button onClick={addCustomers} color="primary">
                    Save
                  </Button>
              </DialogActions>
            </Dialog>    
    </div>
  );
}
