import { Body, Container } from '../../style/style'
import { useNavigate } from 'react-router-dom';
import { Button, Box, Stack, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react';

export default function CreateButtonPage({buttonRef, pictureRef, scrollToRef, title, startDate, endDate, images }) {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState(false);

  const handleNextStep = () => {
    if(title != "" && images.length > 0) {
    navigate('/get-barcord', { state: {
      title: title,
      startDate: startDate,
      endDate: endDate,
      images: images
    }})
  } else {
    setErrorMessage(true);
  }
  }

  return (
    <Body>
      <Container>
      <Stack 
      direction='column'
      p={50}
      ref={buttonRef}
      >
         <Text 
        fontSize='xl'
        color='#ffffff'
        textAlign='center'
        as='b'
        >완료 되었나요?</Text>
        {errorMessage && <Stack>
          <Box mt={10} />
          <Text 
        fontSize='xl'
        color='tomato'
        textAlign='center'
        as='b'
        >다음 내용을 확인해주세요! </Text>
        <Text
        color='#ffffff'
        >1. 제목이 빈 값이 아니어야 해요.</Text>
        <Text
        color='#ffffff'
        >2. 이미지는 30장에서 120장 사이여야 해요.</Text>
          </Stack>}
        <Box mt={50} />
        <Button 
        colorScheme='whiteAlpha' 
        size='lg'
        onClick={() => handleNextStep()}
        >
          바코드 생성하기
        </Button>
        <Box mt={2} />
        <Button 
        colorScheme='blackAlpha' 
        size='lg'
        onClick={() => scrollToRef(pictureRef)}
        >
          이전으로
        </Button>
        </ Stack>
      </Container>
    </Body>
  )
}