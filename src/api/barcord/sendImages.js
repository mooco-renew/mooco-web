import axios from "axios";

export const handleSubmit = async ({images}) => {
    const formData = new FormData();

    for (const image of images) {
      const response = await fetch(image);
      const blob = await response.blob();
      const file = new File([blob], "image.jpg", { type: "image/jpeg" });
      formData.append("imageList[]", file);

      // 파일의 세부 정보 출력
      console.log(`File: ${file.name}, Type: ${file.type}, Size: ${file.size}`);
    }

    // FormData 내용 콘솔에 출력 (디버깅 목적)
    for (const pair of formData.entries()) {
      console.log(`${pair[0]}: ${pair[1]}`);
    }

    try {
      // 서버에 POST 요청
      const response = await axios.post(
        `${import.meta.env.VITE_APP_SERVER_HOST}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (response.data.success === 200) {
        console.log('이미지 불러오기 성공!', response.data);
        return response.data;
      } else {
        console.log('이미지 불러오기 실패!', response.data);
        return response.data;
      }
    } catch (error) {
        console.log('통신 에러!', error);
    }
  };