import React, { useState, useRef } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { BsCalendarWeek } from "react-icons/bs";
import "/src/component/create-barcord/CustomCreateValue.css";

export default function CustomCreateDatePicker({value, setValue}) {
  const datePickerRef = useRef(null);

  const openDatePicker = () => {
    datePickerRef.current.setOpen(true); // DatePicker 열기
  };

  return (
    <div className='DatePickerWrap'>
    <DatePicker
    ref={datePickerRef}
    className='DatePickerStyle'
    dateFormat='yyyy.MM.dd' // 날짜 형태
    shouldCloseOnSelect // 날짜를 선택하면 datepicker가 자동으로 닫힘
    selected={value}
    onChange={(date) => setValue(date)}
    startDate={value}
    selectsStart
  />
    <div className='WeekIconWrap' onClick={openDatePicker}>
  <BsCalendarWeek className='WeekIconStyle'/>
  </div>
  </div>
  );
}