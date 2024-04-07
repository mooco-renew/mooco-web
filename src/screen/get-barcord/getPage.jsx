import { Body, Container } from '../../style/style'
import { useNavigate, useLocation } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { Button, Box, Stack, Text, Image } from '@chakra-ui/react'
import EventBarcord  from '/src/assets/barcord/event-barcord.svg';
import EventMooco  from '/src/assets/barcord/event-mooco.svg';
import EventEvent  from '/src/assets/barcord/event-event.svg';
import { FaDownload } from 'react-icons/fa';
import CustomGetPicture from '../../component/get-barcord/CustomGetPicture';

export default function GetPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const { title, startDate, endDate, images} = location.state;
  console.log(images);

    // 날짜를 yyyy.mm.dd 형태로 변환하는 함수
    const formatDate = (date) => {
      const year = date.getFullYear();
      // getMonth()는 0부터 시작하기 때문에 1을 더해주어야 함
      const month = ('0' + (date.getMonth() + 1)).slice(-2);
      const day = ('0' + date.getDate()).slice(-2);
      return `${year}.${month}.${day}`;
    };

  return (
    <Body>
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
       <Box
        p={3}
        bg='#2A2929'
        color='#ffffff'
        borderRadius={10}
        display="flex" // 이 부분을 추가하여 Flex 컨테이너로 만듭니다.
        alignItems="center" // 아이콘과 텍스트를 세로 중앙으로 정렬합니다.
        justifyContent="center" // 아이콘과 텍스트를 가로 중앙으로 정렬합니다.
      >
        <FaDownload />
        <Text 
        ml={2}
        as='b'
        fontSize='sm'
        >다운로드</Text> {/* 아이콘과 텍스트 사이의 마진을 추가합니다. */}
      </Box>
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
        >
          {formatDate(startDate)} ~ {formatDate(endDate)}
        </Text>
       </Box>
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
      <Box h={2} />
      <Box h={2} />
      <CustomGetPicture images={images}/>
        </Stack>
      </Container>
    </Body>
  )
}
