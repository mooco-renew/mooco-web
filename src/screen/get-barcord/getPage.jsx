import { Body, Container } from '../../style/style'
import { useNavigate, useLocation } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { Button, Box, Stack, Text, Image } from '@chakra-ui/react'
import EventBarcord  from '/src/assets/barcord/event-barcord.svg';
import EventMooco  from '/src/assets/barcord/event-mooco.svg';
import EventEvent  from '/src/assets/barcord/event-event.svg';
import { FaDownload } from 'react-icons/fa';
import CustomGetPicture from '../../component/get-barcord/CustomGetPicture';
import html2canvas from 'html2canvas';
import { saveAs } from 'file-saver';

export default function GetPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const [defaultDate, setDefaultDate] = useState(new Date());

  const { name, title, startDate, endDate, images, barcord_url} = location.state ?? {};
  console.log('barcord-url : ', barcord_url);

   // 페이지 최상단으로 스크롤하는 부분
   useEffect(() => {
    window.scrollTo(0, 0);
  }, []); // 의존성 배열을 빈 배열로 설정하여 컴포넌트 마운트 시 1회만 실행

    // 날짜를 yyyy.mm.dd 형태로 변환하는 함수
    const formatDate = (date) => {
      if (!(date instanceof Date) || isNaN(date.getTime())) {
        // 유효하지 않은 date 처리
        return "Invalid date"; // 적절한 기본값 또는 오류 메시지 반환
      }
      const year = date.getFullYear();
      const month = ('0' + (date.getMonth() + 1)).slice(-2);
      const day = ('0' + date.getDate()).slice(-2);
      return `${year}.${month}.${day}`;
    };

    // 전체 화면 다운
    const captureAndDownloadScreenshot = () => {
      // 캡처하고 싶은 요소의 ref 또는 직접 선택
      const element = document.getElementById('captureAllArea'); // 예시로 'captureArea'라는 ID를 가진 요소를 선택
      html2canvas(element).then((canvas) => {
        // 캔버스를 이미지로 변환
        canvas.toBlob((blob) => {
          saveAs(blob, `${name}'s pull-screen.png`); // 이미지 파일로 저장
        });
      });
    };

      // 바코드 다운로드 함수
  const downloadImage = async () => {
    const element = document.getElementById('captureBarcodeArea'); // 예시로 'captureArea'라는 ID를 가진 요소를 선택
    html2canvas(element).then((canvas) => {
      // 캔버스를 이미지로 변환
      canvas.toBlob((blob) => {
        saveAs(blob, `${name}'s barcord.png`); // 이미지 파일로 저장
      });
    });
  };


  return (
    <Body
    >
      <Container>
      <Stack 
      direction='column'
      p={10}
      w='100%'
      maxW={768}
      bg='#151515'
      id='captureAllArea'
      >
       <img src={EventBarcord} />
        {/* 무코 사진 */}
       <Box h={2} /> 
       <Box w='100%' 
       borderRadius={15}
       id='captureBarcodeArea'
        >
        <Image 
        src={barcord_url}
        alt='barcord'
        w='100%' 
        borderRadius={15}
        />
       </Box>
       <Box h={1} /> 
        {/* 다운로드 버튼 */}
        <Stack direction='row' justifyContent='space-between'>
          <Box>
          <Button
        p={3}
        bg='#ffffff'
        color='#2a2929'
        borderRadius={10}
        display="flex" // 이 부분을 추가하여 Flex 컨테이너로 만듭니다.
        alignItems="center" // 아이콘과 텍스트를 세로 중앙으로 정렬합니다.
        justifyContent="center" // 아이콘과 텍스트를 가로 중앙으로 정렬합니다.
        onClick={() => navigate('/')}
      >
        <Text 
        as='b'
        fontSize='sm'
        >다시 만들기</Text> {/* 아이콘과 텍스트 사이의 마진을 추가합니다. */}
      </Button>
          </Box>
          <Box>
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
        >바코드</Text> {/* 아이콘과 텍스트 사이의 마진을 추가합니다. */}
      </Button>
      <Box w={3} />
      <Button
        p={3}
        bg='#2A2929'
        color='#ffffff'
        borderRadius={10}
        display="flex" // 이 부분을 추가하여 Flex 컨테이너로 만듭니다.
        alignItems="center" // 아이콘과 텍스트를 세로 중앙으로 정렬합니다.
        justifyContent="center" // 아이콘과 텍스트를 가로 중앙으로 정렬합니다.
        onClick={captureAndDownloadScreenshot}
      >
        <FaDownload />
        <Text 
        ml={2}
        as='b'
        fontSize='sm'
        >전체</Text> {/* 아이콘과 텍스트 사이의 마진을 추가합니다. */}
      </Button>
      </Box>
       </Box>
       </Stack>
       <Box>

       </Box>
        {/* 이벤트 제목, 날짜 */}
       <img src={EventMooco || ''} />
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
          <Stack direction='row'>
          <Text
        as='b'
        fontSize='lg'
        >
          {name || "undefined"}의
        </Text>
        <img src={EventEvent} />
        </Stack>
        </Box>
        <Box
        h={2}
        >
        </Box>
        <Text
        as='b'
        fontSize='3xl'
        >
          {title || "undifined"}
        </Text>
        <Text
        fontSize='md'
        color='rgba(255, 255, 255, 0.6)'
        whiteSpace='nowrap'
        >
          {formatDate(startDate) || formatDate(defaultDate)} ~ {formatDate(endDate) || formatDate(defaultDate)}
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
        >{images?.length || 0}장</Text> {/* 아이콘과 텍스트 사이의 마진을 추가합니다. */}
      </Box>
      </Box>
      <CustomGetPicture images={images}/>
        </Stack>
      </Container>
    </Body>
  )
}
