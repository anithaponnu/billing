import  { useEffect, useRef, useState } from 'react';

import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';




export function DateOfBirthPicker() {

  const [selectedDate, setSelectedDate] = useState(null);

  // Calculate max date (18 years ago from today)
  const today = new Date();
  const maxDate = new Date(today.getFullYear() - 18, today.getMonth(), today.getDate());


 


  return (
    <>

    <div id="datepicker">
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DatePicker
        value={selectedDate}
        onChange={(newValue) => setSelectedDate(newValue)}
        maxDate={maxDate}
        disableFuture
      />
    </LocalizationProvider>
    </div>
    


  
    </>
    
  );
}

