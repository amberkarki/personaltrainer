import React, { useState, useEffect } from 'react';
import ReactTable from 'react-table-v6'
import { makeStyles } from '@material-ui/core/styles';
import 'react-table-v6/react-table.css'
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import Icon from '@material-ui/core/Icon';
import Snackbar from '@material-ui/core/Snackbar';
import {CSVLink} from 'react-csv';

export default function Traininginfo () {


  const [training,setTraining]= useState([]);
  const [open, setOpen] = useState(false);
    
  React.useEffect(() => {
      fetchData();
    }, [])
  
    
  const fetchData =() =>{
          fetch('https://customerrest.herokuapp.com/gettrainings')
          .then(response => response.json())
          .then(responseData  =>{
               setTraining(responseData);            
  
          })
  
          .catch(err => console.error(err))
        };
        
        const handleClose = () => {
          setOpen(false);
        }

        const columns = [
   

          {
            Header: 'Activities',
            accessor: 'activity'
          },
          {
            Header: 'Duration/ Min',
            accessor: 'duration'
          },]

        {/*const display = training.map((activities) => 
        <tr key={activities.id}>
          <td>{activities.activity}</td>
          <td>{activities.duration}</td>
                  
        </tr>
     )*/}
  
      return (
         
        <div className="container"><br/>
        
    
     {/*<CSVLink style={{padding:20}} data={cars}>Download Customers List</CSVLink> */ }        
      <ReactTable  defaultPageSize={3}  data={training} columns={columns} style={{height:"250px", }} className = "striped-highligh" />
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