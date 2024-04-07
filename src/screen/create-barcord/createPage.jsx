import { useNavigate } from 'react-router-dom';
import React, { useEffect, useRef, useState } from 'react';
import CreateInputPage from './\bcreateInput';
import CreateInputPicturePage from './createInputImages';
import CreateButtonPage from './createButton';

export default function CreatePage() {
  const navigate = useNavigate();
  const inputRef = useRef(null); // datepicker
  const pictureRef = useRef(null); // CustomCreateInputPicture 섹션을 위한 ref
  const buttonRef = useRef(null); // Button 섹션을 위한 ref

  const [title, setTitle] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const [images, setImages] = useState([]);

  // title 변경용 input
  const handleChange = (event) => setTitle(event.target.value);

    // 특정 섹션으로 스크롤하는 함수
    const scrollToRef = (ref) => {
      ref.current?.scrollIntoView({ behavior: 'smooth', block: 'start', inline: "nearest" });
    };

  return (
   <div style={{ overflow: 'hidden' }}>
    <CreateInputPage 
    startDate={startDate} 
    setStartDate={setStartDate} 
    endDate={endDate}
    setEndDate={setEndDate}
    title={title}
    handleChange={handleChange}
    inputRef={inputRef}
    pictureRef={pictureRef}
    scrollToRef={scrollToRef}
    />
    <CreateInputPicturePage 
    images={images}
    setImages={setImages}
    inputRef={inputRef}
    pictureRef={pictureRef}
    buttonRef={buttonRef}
    scrollToRef={scrollToRef}
    />
    <CreateButtonPage 
    buttonRef={buttonRef}
    pictureRef={pictureRef}
    scrollToRef={scrollToRef}
    title={title}
    startDate={startDate}
    endDate={endDate}
    images={images}
    />
   </div>
  )
}
