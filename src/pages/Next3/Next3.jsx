import React from "react";
import "./Next3.css"; 
import page31 from "./page31.png"
const TravelCalendar = () => {
  return (
    <div className="travel-calendar-container">
      <div className="image-section">
        <img
          src= {page31}
          alt="Beautiful Lake and Mountain"
          className="background-image"
        />
      </div>
      <div className="calendar-section">
        <h2 className="calendar-title">Календарь путешествий</h2>
        <div className="calendar">
          <div className="calendar-header">
            <button className="calendar-nav">&lt;</button>
            <span className="calendar-month">Ноябрь 2021</span>
            <button className="calendar-nav">&gt;</button>
          </div>
          <div className="calendar-grid">
            <div className="calendar-day">ПН</div>
            <div className="calendar-day">ВТ</div>
            <div className="calendar-day">СР</div>
            <div className="calendar-day">ЧТ</div>
            <div className="calendar-day">ПТ</div>
            <div className="calendar-day">СБ</div>
            <div className="calendar-day">ВС</div>

            {Array.from({ length: 30 }, (_, i) => (
              <div key={i} className="calendar-date">
                {i + 1}
                <div className="calendar-time">06:00-20:00</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TravelCalendar;
