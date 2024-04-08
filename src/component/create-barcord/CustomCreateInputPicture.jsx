import React, { useState, useRef } from 'react';
import { FaCamera, FaTimesCircle  } from 'react-icons/fa'; // react-icons에서 카메라 아이콘 가져오기
import "/src/component/create-barcord/CustomCreateValue.css";

export default function CustomCreateInputPicture({images, setImages, files, setFiles}) {
  const fileInputRef = useRef(null); // 파일 입력을 위한 ref 생성

  const handleImageChange = (e) => {
    const forImagesArray = Array.from(e.target.files);
    const newImages = forImagesArray.map((file) =>
      URL.createObjectURL(file)
    );
    setImages([...images, ...newImages]);
    setFiles([...files, ...e.target.files]);
  };

    // 이미지 삭제 함수
    const removeImage = (event, index) => {
      event.stopPropagation(); // 이벤트 전파 중단
      setImages(images.filter((_, imgIndex) => index !== imgIndex));
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
        accept="image/*" // 이미지 파일만 선택할 수 있도록 변경
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
             {/* 이미지 삭제 버튼 */}
             <button onClick={(event) => removeImage(event, index)} className='ImageRemoveButton'>
              <FaTimesCircle size="20%" className='CancleIconStyle' />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
