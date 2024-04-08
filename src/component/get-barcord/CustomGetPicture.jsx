import React, { useState, useRef } from 'react';
import { FaCamera } from 'react-icons/fa'; // react-icons에서 카메라 아이콘 가져오기
import "/src/component/get-barcord/CustomGetValue.css";

export default function CustomGetPicture({images}) {
  return (
    <div>
      <div className='GetGridImagesWrap'>
        {/* 이미지 목록 */}
        {images?.map((image, index) => (
          <div key={index} className='GetImageWrap'>
            <img src={image} alt={`img-${index}`} className='GetImageStyle' />
          </div>
        ))}
      </div>
    </div>
  );
}
