import React, { useState, useEffect } from 'react';
import ReactTable from 'react-table-v6'
import { makeStyles } from '@material-ui/core/styles';
import 'react-table-v6/react-table.css'
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import Icon from '@material-ui/core/Icon';
import Snackbar from '@material-ui/core/Snackbar';
import {CSVLink} from 'react-csv';
//import Icon from '@material-ui/core';




//import Addcar from './Addcar';
//import Editcar from'./Editcar';

 export default function Customers() {

  const [customers, setCustomers] = useState([]);
  const [open, setOpen] = useState(false);
  //const [msg, setMsg] =useState('');
 
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

  
  const columns = [
   

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
      Header: 'City',
      accessor: 'city'
    },
    {
      Header: 'Email',
      accessor: 'email'
    },
    
      {
        Header: "Date",
        accessor: "date",
      },
      {
        Header: "Duration",
        accessor: "duration",

        Cell: row => (
          <div
            style={{
              width: '100%',
              height: '100%',
              backgroundColor: 'Yello',
              borderRadius: '2px'
            }}
          >
            <div
              style={{
                width: `${row.value}%`,
                height: '100%',
                backgroundColor: row.value > 60 && row.value < 100 ? 'green'
                  : row.value > 33 && row.value < 61 ? 'grey'
                    : row.value > 100 ? 'red'
                      : '#ff2e00',
                borderRadius: '2px',
                transition: 'all .2s ease-out'
              }}
            ><div style={{ fontSize: "25px" }}>{row.value}</div></div>
          </div>
        )
      },

      {
        Header: "Activity",
        accessor: "activity",
      },

  ]
  const column = [
   

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
     
  ]
 
  return(
    <div className="container"><br/>
    <h3>Customers Infromation</h3>
    
     {/*<CSVLink style={{padding:20}} data={cars}>Download Customers List</CSVLink> */ }        
      <ReactTable  defaultPageSize={5} filterable={true} data={customers} columns={column} style={{height:"400px"}} />
      <Snackbar 
        open={open}
        autoHideDuration={3000}
        onClose={handleClose}
        //message={msg}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left'
        }}
      />
    </div>
  );
}