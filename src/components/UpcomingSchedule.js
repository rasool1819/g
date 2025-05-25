import React from 'react';
import { appointments } from '../data/appointmentsData';

const UpcomingSchedule = () => (
  <div className="upcoming-schedule">
    <h3>The Upcoming Schedule</h3>
    <div className="schedule-day">
      <h4>On Thursday</h4>
      <div className="schedule-appointments">
        {appointments.filter(apt => apt.day === 'Thursday').map(apt => (
          <div key={apt.id} className="schedule-card">
            <span className="appointment-icon">{apt.icon}</span>
            <div className="appointment-details">
              <h5>{apt.title}</h5>
              <p>{apt.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    <div className="schedule-day">
      <h4>On Saturday</h4>
      <div className="schedule-appointments">
        {appointments.filter(apt => apt.day === 'Saturday').map(apt => (
          <div key={apt.id} className="schedule-card">
            <span className="appointment-icon">{apt.icon}</span>
            <div className="appointment-details">
              <h5>{apt.title}</h5>
              <p>{apt.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default UpcomingSchedule;