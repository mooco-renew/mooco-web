import { useNavigate } from 'react-router-dom';
import React, { useEffect, useRef, useState } from 'react';
import CreateInputPage from './\bcreateInput';
import CreateInputPicturePage from './createInputImages';
import CreateButtonPage from './createButton';
import Spinner from 'react-spinner-material';

export default function CreatePage() {
  const navigate = useNavigate();
  const inputRef = useRef(null); // datepicker
  const pictureRef = useRef(null); // CustomCreateInputPicture 섹션을 위한 ref
  const buttonRef = useRef(null); // Button 섹션을 위한 ref
  const [loading, setLoading] = useState(false);
  const [files, setFiles] = useState([]);

  const [title, setTitle] = useState("");
  const [name, setName] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const [images, setImages] = useState([]);
  
  // title 변경용 input
  const handleTitleChange = (event) => setTitle(event.target.value);

  // name 변경용 input
  const handleNameChange = (event) => setName(event.target.value);

    // 특정 섹션으로 스크롤하는 함수
    const scrollToRef = (ref) => {
      ref.current?.scrollIntoView({ behavior: 'smooth', block: 'start', inline: "nearest" });
    };

  return (
   <div style={{ backgroundColor: '#151515'}}>
    {loading ? 
    (
            // 로딩 중에 표시할 컴포넌트
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <Spinner size={120} spinnerColor={"#333"} spinnerWidth={2} visible={loading} />
          </div>
    ) 
    :
    (
      <div >
         <CreateInputPage 
    startDate={startDate} 
    setStartDate={setStartDate} 
    endDate={endDate}
    setEndDate={setEndDate}
    title={title}
    name={name}
    handleTitleChange={handleTitleChange}
    handleNameChange={handleNameChange}
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
    files={files}
    setFiles={setFiles}
    />
    <CreateButtonPage 
    buttonRef={buttonRef}
    pictureRef={pictureRef}
    scrollToRef={scrollToRef}
    name={name}
    title={title}
    startDate={startDate}
    endDate={endDate}
    images={images}
    setLoading={setLoading}
    files={files}
    />
      </div>
    )
    }
   </div>
  )
}
