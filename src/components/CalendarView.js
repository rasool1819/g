import React from 'react';
import { calendarData } from '../data/calendarData';

const CalendarView = () => (
  <div className="calendar-section">
    <div className="calendar-header">
      <h3>{calendarData.month}</h3>
      <div className="calendar-nav">
        <button>‹</button>
        <button>›</button>
      </div>
    </div>
    <div className="calendar-grid">
      {calendarData.days.map(day => (
        <div key={day.date} className="calendar-day">
          <div className="day-header">
            <span className="day-name">{day.day}</span>
            <span className="day-number">{day.date}</span>
          </div>
          <div className="day-appointments">
            {day.appointments.map((time, index) => (
              <div key={index} className="appointment-time">{time}</div>
            ))}
          </div>
        </div>
      ))}
    </div>
    <div className="appointment-cards">
      <div className="appointment-card dentist">
        <div className="card-icon">🦷</div>
        <div className="card-content">
          <h4>Dentist</h4>
          <p>09:00-11:00</p>
          <p>Dr Cameron Williamson</p>
        </div>
      </div>
      <div className="appointment-card physio">
        <div className="card-icon">🏃</div>
        <div className="card-content">
          <h4>Physiotherapy Appointment</h4>
          <p>11:00-12:00</p>
          <p>Dr Kevin Djores</p>
        </div>
      </div>
    </div>
  </div>
);

export default CalendarView;