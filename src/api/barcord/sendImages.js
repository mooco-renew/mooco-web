import axios from "axios";

export const handleSubmit = async (files) => {
  const formData = new FormData();

  for (const file of files) {
    formData.append('photos[]', file);
  }

  // FormData 내용 콘솔에 출력 (디버깅 목적)
  for (const pair of formData.entries()) {
    console.log(`entrys : ${pair[0]}: ${pair[1]}`);
  }

  try {
    // 서버에 POST 요청
    let response = await axios.post(
      `${import.meta.env.VITE_APP_SERVER_HOST}/web/barcode`,
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }
    );
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
