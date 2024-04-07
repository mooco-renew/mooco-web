import { Body, Container } from '../../style/style'
import { useNavigate, useLocation } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { Button, Box, Stack, Text, Image } from '@chakra-ui/react'
import EventBarcord  from '/src/assets/barcord/event-barcord.svg';
import EventMooco  from '/src/assets/barcord/event-mooco.svg';
import EventEvent  from '/src/assets/barcord/event-event.svg';
import { FaDownload } from 'react-icons/fa';
import CustomGetPicture from '../../component/get-barcord/CustomGetPicture';
import { saveAs } from 'file-saver';

export default function GetPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const { title, startDate, endDate, images} = location.state;

   // 페이지 최상단으로 스크롤하는 부분
   useEffect(() => {
    window.scrollTo(0, 0);
  }, []); // 의존성 배열을 빈 배열로 설정하여 컴포넌트 마운트 시 1회만 실행

    // 날짜를 yyyy.mm.dd 형태로 변환하는 함수
    const formatDate = (date) => {
      const year = date.getFullYear();
      // getMonth()는 0부터 시작하기 때문에 1을 더해주어야 함
      const month = ('0' + (date.getMonth() + 1)).slice(-2);
      const day = ('0' + date.getDate()).slice(-2);
      return `${year}.${month}.${day}`;
    };    

      // 바코드 다운로드 함수
  const downloadImage = async () => {
    try {
      const imageSrc = '/src/assets/barcord/sample-barcord.jpg'; // 이미지 소스
      const response = await fetch(imageSrc);
      const blob = await response.blob(); // 이미지를 blob으로 변환
      saveAs(blob, `${title}'s barcord.jpg`); // 파일로 저장, 파일 이름을 "sample-barcord.jpg"로 지정
    } catch (error) {
      console.error("다운로드 중 오류 발생:", error);
    }
  };


  return (
    <Body id="captureArea">
      <Container>
      <Stack 
      direction='column'
      p={50}
      w='100%'
      >
       <img src={EventBarcord} />
        {/* 무코 사진 */}
       <Box h={2} /> 
       <Box w='100%' borderRadius={15} >
        <Image 
        src='/src/assets/barcord/sample-barcord.jpg' 
        alt='barcord'
        w='100%' 
        borderRadius={15}
        />
       </Box>
       <Box h={1} /> 
        {/* 다운로드 버튼 */}
       <Box
        display="flex"
        alignItems='flex-end'
        justifyContent='flex-end'
             >
       <Button
        p={3}
        bg='#2A2929'
        color='#ffffff'
        borderRadius={10}
        display="flex" // 이 부분을 추가하여 Flex 컨테이너로 만듭니다.
        alignItems="center" // 아이콘과 텍스트를 세로 중앙으로 정렬합니다.
        justifyContent="center" // 아이콘과 텍스트를 가로 중앙으로 정렬합니다.
        onClick={downloadImage}
      >
        <FaDownload />
        <Text 
        ml={2}
        as='b'
        fontSize='sm'
        >다운로드</Text> {/* 아이콘과 텍스트 사이의 마진을 추가합니다. */}
      </Button>
       </Box>
       <Box>

       </Box>
        {/* 이벤트 제목, 날짜 */}
       <img src={EventMooco} />
       <Box
       textAlign='end'
       p={3}
       paddingTop={3}
       paddingBottom={3}
       paddingRight={5}
       bg='#2A2929'
       color='#ffffff'
       borderTopLeftRadius={50}
       borderTopRightRadius={10}
       borderBottomLeftRadius={50}
       borderBottomRightRadius={10}
       >
        <Box
         display="flex"
         alignItems='flex-end'
         justifyContent='flex-end'
        >
        <img src={EventEvent} />
        </Box>
        <Box
        h={5}
        >
        </Box>
        <Text
        as='b'
        fontSize='3xl'
        >
          {title}
        </Text>
        <Text
        fontSize='md'
        color='rgba(255, 255, 255, 0.6)'
        whiteSpace='nowrap'
        >
          {formatDate(startDate)} ~ {formatDate(endDate)}
        </Text>
       </Box>
       <Box h={2} />
       {/* 사진 장 수 표시 */}
       <Box
        display="flex"
        alignItems='flex-end'
        justifyContent='flex-end'
             >
       <Box
        p={2}
        border='2px solid #ffffff'
        borderRadius={10}
        display="flex" // 이 부분을 추가하여 Flex 컨테이너로 만듭니다.
        justifyContent="center" // 아이콘과 텍스트를 가로 중앙으로 정렬합니다.
      >
        <Text 
        color='#ffffff'
        fontSize='sm'
        >{images.length}장</Text> {/* 아이콘과 텍스트 사이의 마진을 추가합니다. */}
      </Box>
      </Box>
      <CustomGetPicture images={images}/>
        </Stack>
      </Container>
    </Body>
  )
}
