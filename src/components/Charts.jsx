import React from 'react';

import {
    BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
  } from 'recharts';


export default function Charts() {


  const [training,setTraining]=React.useState([]);
    
  React.useEffect(() => {
  
      fetchData();
    },[setTraining])

  
    
  const fetchData =() =>{
          fetch('https://customerrest.herokuapp.com/gettrainings')
          .then(response => response.json())
          .then(responseData  =>{
               setTraining(responseData);            
  
          })
  
          .catch(err => console.error(err))
        };
        
      const z = training.map((i)=>{
        return{duration:i.duration, activity:i.activity}

      })
  
      return (
         
              
          <BarChart width={200} height={120} data={z}>
          <Bar dataKey="duration" fill=" #a366ff" />
          
          
          
        </BarChart>
          
          
      );
    
  }