import axios from "axios";

export const handleSubmit = async ({images}) => {
    const formData = new FormData();

    for (const image of images) {
      const response = await fetch(image);
      const blob = await response.blob();
      const file = new File([blob], "image.jpg", { type: "image/jpeg" });
      formData.append("photos[]", file);
      console.log(file);
    }

    // FormData 내용 콘솔에 출력 (디버깅 목적)
    for (const pair of formData.entries()) {
      console.log(`${pair[0]}: ${pair[1]}`);
    }

    try {
      // 서버에 POST 요청
      const response = await axios.post(
        `${import.meta.env.VITE_APP_SERVER_HOST}/web/barcord`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
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