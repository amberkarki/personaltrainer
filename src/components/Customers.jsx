import React, { useState, useEffect } from 'react';
import ReactTable from 'react-table-v6'
import { makeStyles } from '@material-ui/core/styles';
import 'react-table-v6/react-table.css'
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import Snackbar from '@material-ui/core/Snackbar';
import {CSVLink} from 'react-csv';
import EditCustomers from './EditCustomers';
import AddCustomers from './AddCustomers';
import AddTraining from './AddTraining';



const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(5),
      
      
    },
  },
}));


 export default function Customers(props) {
  const classes = useStyles();

  const [customers, setCustomers] = useState([]);
  const [open, setOpen] = useState(false);
  const [msg, setMsg] =useState('');

 
  useEffect(() => {
    getCustomers();
  }, [])


 
  const getCustomers = () => {
    fetch ('https://customerrest.herokuapp.com/api/customers')
    .then(response => response.json())
    .then(data => setCustomers(data.content))
   
    .catch(err => console.error(err))
  };

 
  
  const handleClose = () => {
    setOpen(false);
  }



  const deleteCustomer = (link) => {
      if (window.confirm('Are you sure? " You want to Delete !!!')) {
        fetch(link, {method: 'DELETE'})
        .then(_ => getCustomers())
        .then(_ => {
          setMsg(' Confirmation ! Customer Deleted')
          setOpen(true)})
        .catch(err => console.error(err))
      }
  }

 
  const saveCustomers = (customer)=>{
          fetch ('https://customerrest.herokuapp.com/api/customers', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            
            },
            body: JSON.stringify(customer)
          })
          .then(_ =>getCustomers())
          .then(_ =>{setMsg("Confirmation ! New Customer Added ");
          setOpen(true);
        })
          .catch(err => console.error(err))

  };

  
  const updateCustomers =(link, customer) => {
    console.log(link)
    fetch(link, 
      {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      
      },
      body: JSON.stringify(customer)
    })
    .then(_=> getCustomers())
    .then(_ =>{
      setMsg('Confirmation ! Customers information is  Updated')
      setOpen(true)
    })
    .catch(err => console.error(err))
   

  };


  const saveTraining = (training)=>{
    fetch ('https://customerrest.herokuapp.com/api/trainings', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      
      },
      body: JSON.stringify(training)
    })
    .then(_ =>{setMsg("New Training  Added ");
    setOpen(true);
  })
    .catch(err => console.error(err))

  };


  
  const column = [
    {
      Header:"id",
      accessor:"links[0].href",
      show:false,
      
    },
    {
      filterable:false,
      sortable:false,
      width:148,
      accessor: 'links[0].href',
      Cell: ({value, row}) => <AddTraining saveTraining={saveTraining} customer = {row} link={value} useStyles={useStyles} />,
      
    },
    
    {
      Header: 'First Name',
      accessor: 'firstname'
    },
    {
      Header: 'Last Name',
      accessor: 'lastname'
    },
    {
      Header: 'Street Address',
      accessor: 'streetaddress'
    },
   
    {
      Header: 'Postcode',
      accessor: 'postcode'
    },
    {
      Header: 'City',
      accessor: 'city'
    },
   
    {
      Header: 'Email',
      accessor: 'email'
    },
    
      {
        Header: "phone",
        accessor: "phone",
      },
      {
        filterable:false,
        sortable:false,
        width:115,
        accessor: 'links[0].href',
        Cell: row => <EditCustomers updateCustomers={updateCustomers} customers = {row.original} useStyles={useStyles} />,
        
      },
       
      {
      filterable:false,
      sortable:false,
      width:115,
      accessor: 'links[0].href',
      Cell: row => (<Button size="medium" className ={classes.button} startIcon={<DeleteIcon />} 
      color="secondary" variant="contained"  onClick={() => deleteCustomer(row.original.links[0].href)}>Delete</Button>),
      
    },
     
  ]
 
  return(
    <div className="container"><br/>
    <div className={classes.root}>
     
     <AddCustomers saveCustomers = {saveCustomers} />
    
     
     <p style={{backgroundColor:'lightsilver', marginLeft:'100px'}}> <h2>Customers List</h2> <CSVLink style={{padding:5}} data={customers}>Download Customers List</CSVLink>
     
     
      </p>
      </div >
    
           
      <ReactTable  defaultPageSize={5} filterable={true} data={customers} columns={column} style={{height:"400px",}} />
      <Snackbar 
             
            open={open}
            autoHideDuration={3000}
            onClose={handleClose}
            message={msg}
            anchorOrigin={{
            vertical: 'Top',
            horizontal: 'left',
            
        }}
      />
    </div>
  );
}