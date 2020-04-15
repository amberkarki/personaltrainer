import React from 'react';
import {Calendar,momentLocalizer} from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment);

export default function Calander() {
  const now = new Date();

  const events =[
    {
      
    },];

  


  return(
    <div>
      <p>
         <h1 style={{textAlign:'center'}}> Training Event Calender </h1>
      </p>
      <div style={{ height: '250pt'}} className={'timesheet'}>
        < Calendar
         events={events}
         startAccessor="start"
         endAccessor="end"
         defaultDate={moment().toDate()}
         localizer={localizer}
                  />
      </div>
    </div>
  );

}

