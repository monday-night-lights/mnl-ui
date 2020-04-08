import React from 'react';

const Calendar = () => (
  <>
    <div className="calendar-content">
      <h1>Calendar</h1>
      <iframe className="calendar-embed"
        src="https://calendar.google.com/calendar/embed?height=600&amp;wkst=2&amp;bgcolor=%23ffffff&amp;ctz=America%2FNew_York&amp;src=dDYzbHI2cDN2ZTg0Z29jbjc5amphZ2xnN29AZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;color=%23616161&amp;showNav=1&amp;showTitle=1&amp;showDate=1&amp;showPrint=0&amp;showTabs=1&amp;showCalendars=0&amp;showTz=1&amp;mode=AGENDA"
         scrolling="no"></iframe>
    </div>
  </>
);

export default Calendar;
