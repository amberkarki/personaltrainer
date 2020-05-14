import React, { useState, useEffect } from 'react';
import ReactTable from 'react-table-v6'
import 'react-table-v6/react-table.css'
import Snackbar from '@material-ui/core/Snackbar';

export default function Traininginfo () {


  const [training,setTraining]= useState([]);
  const [open, setOpen] = useState(false);
    
  useEffect(() => {
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

  
      return (
         
        <div className="container"><br/>
        
    
    
      <ReactTable  defaultPageSize={3}  data={training} columns={columns} style={{height:"250px", }} className = "striped-highligh" />
      <Snackbar 
        open={open}
        autoHideDuration={3000}
        onClose={handleClose}
        
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left'
        }}
      />
    </div>
  );
         
       
  }