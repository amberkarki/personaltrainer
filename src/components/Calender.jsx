import React from 'react';
import moment from 'moment';
import {Calendar,momentLocalizer} from 'react-big-calendar';
import "react-big-calendar/lib/css/react-big-calendar.css";



const localizer = momentLocalizer(moment)


export default function Calendars() {
 // const [traing, setTrainings]=React.useState([]);
  const [events, setCalEvents]=React.useState([]);

  React.useEffect(() => {
    getTrainings();
  }, [])

  
 
  
  const getTrainings = () =>{
    
    fetch('https://customerrest.herokuapp.com/gettrainings') // fetching the data 
          .then(response => response.json())
          .then(responseData  =>{
            console.log(responseData)
            
          let calEvents=[]
          for(let i=0;i<responseData.length;i++)
          {
            calEvents.push({
              start:moment.utc(responseData[i].date)._d, // date date formating 
              end:moment.utc(responseData[i].date).add(responseData[i].duration, 'm')._d, // date and time formating 
              title:responseData[i].activity +"/"+ responseData[i].customer.firstname ,

            })
          }
          setCalEvents(calEvents);
          })
  
          .catch(err => console.error(err))
        };
      return (

        <div>
      <p>
         <h1 style={{textAlign:'center'}}> Training Events Calendar </h1>
      </p>
    
        <Calendar
        localizer={localizer}
        defaultDate={ new Date()}
          events={events} // data 
          startAccessor="start"
          endAccessor="end"
          defaultView="month"
         
          views={{
            month: true,
            week: true,
            agenda: true,

          }}
          drilldownView="agenda"
          step={20}
          showMultiDayTimes
         style={{ height: "450px", margin: "60px 40px" }}
          
        />
      </div>
     
    )
  }



