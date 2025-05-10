// components/Calendar.js
'use client';

import { useState } from 'react';
import Calendar from 'react-calendar';


export default function CustomCalendar() {
  const [value, setValue] = useState(new Date());

  return (
    <div className="p-4 bg-[#191919] rounded shadow max-w-sm mx-auto">
      <Calendar
        onChange={setValue}
        value={value}
        className="REACT-CALENDAR"
      />
      <p className="mt-4 text-center text-[text-[#ffffff71]">
        Selected date: {value.toDateString()}
      </p>
    </div>
  );
}


