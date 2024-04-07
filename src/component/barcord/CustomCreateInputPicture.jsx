import React, { useState, useRef } from 'react';
import { FaCamera } from 'react-icons/fa'; // react-icons에서 카메라 아이콘 가져오기
import "/src/component/barcord/CustomCreateValue.css";

export default function CustomCreateInputPicture({images, setImages}) {
  const fileInputRef = useRef(null); // 파일 입력을 위한 ref 생성

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    const newImages = files.map((file) =>
      URL.createObjectURL(file)
    );
    setImages([...images, ...newImages]);
  };

  // 파일 입력 활성화 함수
  const activateFileInput = () => {
    fileInputRef.current.click();
  };

  return (
    <div>
      <input
        type="file"
        multiple
        onChange={handleImageChange}
        ref={fileInputRef}
        style={{ display: 'none' }} // 파일 입력 숨기기
      />
      <div className='GridImagesWrap'>
        {/* 파일 선택 버튼 */}
        <div className='CameraIconWrap' onClick={activateFileInput}>
          <FaCamera size="20%" className='CameraIconStyle'/>
        </div>
        {/* 이미지 목록 */}
        {images.map((image, index) => (
          <div key={index} className='InputImageWrap'>
            <img src={image} alt={`img-${index}`} className='InputImageStyle' />
          </div>
        ))}
      </div>
    </div>
  );
}
