import React, { useState, useRef } from 'react';
import { FaCamera, FaTimesCircle  } from 'react-icons/fa'; // react-icons에서 카메라 아이콘 가져오기
import "/src/component/create-barcord/CustomCreateValue.css";
import Resizer from 'react-image-file-resizer';

export default function CustomCreateInputPicture({images, setImages, files, setFiles}) {
  const fileInputRef = useRef(null); // 파일 입력을 위한 ref 생성
  const DISK_IMG_MAX_LENGTH = 120;
  const IMG_MAX_SIZE = 10000000;

  const handleImageChange = async (e) => {
    const filesArray = Array.from(e.target.files);
    
    if (filesArray.length + images.length > DISK_IMG_MAX_LENGTH) {
      window.alert(`${DISK_IMG_MAX_LENGTH}개까지 이미지를 업로드할 수 있습니다.`);
      return;
    }
  
    for (let file of filesArray) {
      if (file.size > IMG_MAX_SIZE) {
        window.alert(`${Math.round(IMG_MAX_SIZE / 1000000)}MB 보다 작은 이미지만 업로드할 수 있습니다.`);
      } else {
        try {
          // 이미지 파일의 크기를 조정
          const resizedImage = await new Promise((res, rej) => {
            Resizer.imageFileResizer(file, 1500, 1500, "JPEG", 80, 0, (uri) => {
              res(uri);
            }, "file");
          });
  
          // 리사이징된 이미지를 미리보기로 상태 업데이트
          const newImageURL = URL.createObjectURL(resizedImage);
          setImages((prevImages) => [...prevImages, newImageURL]);
          setFiles((prevFiles) => [...prevFiles, resizedImage]);
        } catch (error) {
          window.alert("이미지를 불러오는 데 실패했습니다.");
          console.error(error);
        }
      }
    }
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
