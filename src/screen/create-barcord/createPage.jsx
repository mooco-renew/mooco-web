import { useNavigate } from 'react-router-dom';
import React, { useEffect, useRef, useState } from 'react';
import CreateInputPage from './\bcreateInput';
import { Text, Box } from '@chakra-ui/react'
import CreateInputPicturePage from './createInputImages';
import CreateButtonPage from './createButton';
import Spinner from 'react-spinner-material';

export default function CreatePage() {
  const navigate = useNavigate();

  // 스크롤 조절용
  const startRef = useRef(null); // 인풋 
  const middleRef = useRef(null); // 사진 
  const endRef = useRef(null); // 버튼

  const [allowScrollToMiddle, setAllowScrollToMiddle] = useState(false);
const [allowScrollToEnd, setAllowScrollToEnd] = useState(false);

/*
useEffect(() => {
  window.addEventListener('scroll', handleScroll);
  return () => {
    window.removeEventListener('scroll', handleScroll);
  };
}, [allowScrollToMiddle, allowScrollToEnd]);

const allowScrollToMiddleHandler = () => {
  setAllowScrollToMiddle(true);
};

const allowScrollToEndHandler = () => {
  setAllowScrollToEnd(true);
};
*/
  const [loading, setLoading] = useState(false); // 로딩
  const [files, setFiles] = useState([]); // 기본 파일
  const [title, setTitle] = useState("");
  const [name, setName] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [images, setImages] = useState([]); // 파일 이미지 url
  
  // title 변경용 input
  const handleTitleChange = (event) => setTitle(event.target.value);

  // name 변경용 input
  const handleNameChange = (event) => setName(event.target.value);

    // 특정 섹션으로 스크롤하는 함수
    const scrollToRef = (ref) => {
      ref.current?.scrollIntoView({ behavior: 'smooth', block: 'start', inline: "nearest" });
    };

    const handleScroll = () => {
      const middleTop = middleRef.current ? middleRef.current.getBoundingClientRect().top : 0;
      const endTop = endRef.current ? endRef.current.getBoundingClientRect().top : 0;
    
      if (!allowScrollToMiddle && middleTop <= window.innerHeight) {
        window.scrollTo(0, middleRef.current.offsetTop - window.innerHeight);
      } else if (allowScrollToMiddle && !allowScrollToEnd && endTop <= window.innerHeight) {
        window.scrollTo(0, endRef.current.offsetTop - window.innerHeight);
      }
    };

  return (
   <div style={{ backgroundColor: '#151515'}}>
    {loading ? 
    (
            // 로딩 중에 표시할 컴포넌트
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <Spinner size={120} spinnerColor={"#333"} spinnerWidth={2} visible={loading} />
            <Box h={1}/>
            <Text 
        fontSize='sm'
        color='rgba(255, 255, 255, 0.5)'
        textAlign='center'
        >약 30초 ~ 1분 정도 소요됩니다.</Text>
          </div>
    ) 
    :
    (
      <div >
        <div ref={startRef}>
         <CreateInputPage 
    startDate={startDate} 
    setStartDate={setStartDate} 
    endDate={endDate}
    setEndDate={setEndDate}
    title={title}
    name={name}
    handleTitleChange={handleTitleChange}
    handleNameChange={handleNameChange}
    scrollToRef={scrollToRef}
    />
    </div>
    <div ref={middleRef}>
    <CreateInputPicturePage 
    images={images}
    setImages={setImages}
    scrollToRef={scrollToRef}
    files={files}
    setFiles={setFiles}
    />
    </div>
    <div ref={endRef}>
    <CreateButtonPage 
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
      </div>
    )
    }
   </div>
  )
}
