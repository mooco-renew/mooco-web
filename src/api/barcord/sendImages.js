import axios from "axios";

export const handleSubmit = async (images) => {
    const formData = new FormData();
    console.log('출력 파일 :', images);

    images.forEach((file) => {
      formData.append('photos[]', file); // 'images[]'는 서버에서 해당 파일 데이터를 배열로 참조할 키입니다.
    });
    
    console.log('data : ', formData);

    try {
      // 서버에 POST 요청
      const response = await axios.post(
        `${import.meta.env.VITE_APP_SERVER_HOST}/web/barcode`,
        formData);
      console.log('server-host : ', import.meta.env.VITE_APP_SERVER_HOST);

      if (response.data.success === true) {
        console.log('이미지 불러오기 성공!', response.data);
        return response.data;
      } else {
        console.log('이미지 불러오기 실패!', response.data);
        return response.data;
      }
    } catch (error) {
        console.log('통신 에러!', error);
        return error;
    }
  };