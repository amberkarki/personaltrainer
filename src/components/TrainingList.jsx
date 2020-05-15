import React, { useState, useEffect } from 'react';
import ReactTable from 'react-table-v6'
import { makeStyles } from '@material-ui/core/styles';
import 'react-table-v6/react-table.css'
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import Icon from '@material-ui/core/Icon';
import Snackbar from '@material-ui/core/Snackbar';
import {CSVLink} from 'react-csv';
import moment from'moment';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));


export default function TrainingList (props) {
  const classes = useStyles();


  const [training,setTraining]= useState([]);
  
  const [open, setOpen] = useState(false);
  const [msg, setMsg] =useState('');
    
  React.useEffect(() => {
    getTrainings();
    }, [])
  
    
         
        const handleClose = () => {
          setOpen(false);
        }

        
        const getTrainings = () =>{
          fetch('https://customerrest.herokuapp.com/gettrainings')
                .then(response => response.json())
                .then(responseData  =>{
                setTraining(responseData);            
        
                })
        
                .catch(err => console.error(err))
              };
              
              
        const saveTraining = (training)=>{
          fetch ('https://customerrest.herokuapp.com/gettrainings', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            
            },
            body: JSON.stringify(training)
          })
          .then(_=>getTrainings())
          .then(_ =>{setMsg("New Traning  Added ");
          setOpen(true);
        })
          .catch(err => console.error(err))
      
        };

        const deleteTraning = (link) => {
          link='https://customerrest.herokuapp.com/api/trainings/'+link // delete with the link
        
          if (window.confirm('Are you sure? "You  Really want to Delete !!!')) {
            fetch(link, 
            {method: 'DELETE'})
            .then(_=> getTrainings())// 
            .then(_=> {
              setMsg(' Confirmation ! "Training  Deleted" ')
              setOpen(true)})
            .catch(err => console.error(err))
          }
        }



        const columns = [

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
            Header: 'Activities',
            accessor: 'activity'
          },
          {
            Header: 'Duration/ Min',
            accessor: 'duration'
          },
          
          {
            Header:"",
            width:115,
            filterable:false,
          accessor: 'id',
          Cell: ({value}) => 
          (<Button size="small" className ={classes.button} startIcon={<DeleteIcon />} onClick={() => deleteTraning(value)}
          color="secondary" variant="contained" >Delete</Button>),
          
        },
        
        
        ]

        return (
         
          
        <div className="container"><br/>
        
        <div className={classes.root}>
     
      
      
      <Button variant="contained" color="primary" href='#'>
      <CSVLink style={{padding:20}} data={training}>Download Training List</CSVLink>
      </Button>
      </div>
      <p style={{backgroundColor:'lightsilver'}}> <h2>Training List</h2> </p>
      <ReactTable  defaultPageSize={5} filterable={true} data={training} columns={columns} style={{height:"400px", }} className = "striped-highligh" />
      <Snackbar 
        open={open}
        autoHideDuration={3000}
        onClose={handleClose}
        message={msg}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left'
        }}
      />
    </div>
  );
         
       
  }