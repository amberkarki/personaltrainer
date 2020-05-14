import React, { useState, useEffect } from 'react';
import ReactTable from 'react-table-v6'
import { makeStyles } from '@material-ui/core/styles';
import 'react-table-v6/react-table.css'
import Button from '@material-ui/core/Button';
import {CSVLink} from 'react-csv';
import moment from 'moment';



const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));


 export default function Customers() {
  const classes = useStyles();

 
  const [customers, setCustomers] = useState([]);
   //const [open, setOpen] = useState(false);
  //const [msg, setMsg] =useState('');
 
  useEffect(() => {
    getCustomers();
  }, [])
 
  const getCustomers = () => {
    fetch ('https://customerrest.herokuapp.com/gettrainings')
    .then(response => response.json())
    
    .then((responseData) =>{ 
      
        setCustomers(responseData)
        
      })

  
   
    .catch(err => console.error(err))
  };
 
  
 

  const columns = [
   

    {
      Header: 'First Name',
      accessor: 'customer.firstname'
    },
    {
      Header: 'Last Name',
      accessor: 'customer.lastname'
    },
    
    {
      Header: 'Date',
      accessor: 'date',
      filterable:false,
          Cell: row => {
          return <div>
          {moment (row.original.date).format('DD MM YYYY, H:mm')}
          </div>;}
    },
      {
        Header: "Duration/ Min",
        accessor: "duration",
        filterable:true,
       

          },

      {
        Header: "Activity",
        accessor: "activity",
      },

  ]


  return(
    <div className="container"><br/>
    <div className={classes.root}>
     
                
          <Button variant="contained" color="primary" href='#'>
                <CSVLink style={{padding:20}} data={customers}>Download List</CSVLink>
          
          </Button>
          </div>
                   <p style={{backgroundColor:'lightsilver'}}> <h2>Customers/ Training List</h2> </p>
          
                
            <ReactTable  defaultPageSize={5} filterable={true} data={customers} columns={columns} style={{height:"400px"}} />
          
    </div>
  );
}