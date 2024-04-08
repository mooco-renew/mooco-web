import { Body, Container } from '../../style/style'
import { useNavigate } from 'react-router-dom';
import { Button, Box, Stack, Text } from '@chakra-ui/react'
import { useEffect, useState } from 'react';
import { handleSubmit } from '../../api/barcord/sendImages';

export default function CreateButtonPage({scrollToRef, name, title, startDate, endDate, images, setLoading, files }) {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState(false);

  useEffect(() => {
    return () => {
      setErrorMessage(false);
    }
  }, []);

  const handleNextStep = async () => {
    if(title != "" && images.length >= 30 && images.length <= 120){
      setLoading(true); 
      let data = await handleSubmit(files);
      if(data.success == true) {
        navigate('/get-barcord', { state: {
          name: name,
          title: title,
          startDate: startDate,
          endDate: endDate,
          images: images,
          barcord_url: data.data.barcodeUrl
        }});
        setLoading(false); // 로딩 상태 해제
      } else if(data.success == false) {
        alert(data.error.message);
        navigate('/');
      } else {
        alert("server error");
        navigate('/');
      }
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
        {/* 
          <Box mt={2} />
        <Button 
        colorScheme='blackAlpha' 
        size='lg'
        onClick={() => scrollToRef(pictureRef)}
        >
          이전으로
        </Button>
        */}
        </ Stack>
      </Container>
    </Body>
  )
}
