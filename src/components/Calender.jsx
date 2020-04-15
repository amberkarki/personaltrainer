import React from 'react';
import {Calendar,momentLocalizer} from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment);

export default function Calander() {
  const now = new Date();

  const events =[
    {
        id: 0,
        title: 'All Day Event very long title',
        allDay: true,
        start: new Date(2020, 4, 13),
        end: new Date(2020, 4, 14), 
    },
    {
        id: 1,
        title: 'Long Event',
        start: new Date(2015, 3, 7),
        end: new Date(2015, 3, 10),
    },

    {
        id: 2,
        title: 'DTS STARTS',
        start: new Date(2020, 4, 13, 0, 0, 0),
        end: new Date(2020, 4, 20, 0, 0, 0),
    },

    {
        id: 3,
        title: 'DTS ENDS',
        start: new Date(2016, 10, 6, 0, 0, 0),
        end: new Date(2016, 10, 13, 0, 0, 0),
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

