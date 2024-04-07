import { Body, Container } from '../../style/style'
import { useNavigate } from 'react-router-dom';
import { Button, Box, Stack, Text } from '@chakra-ui/react'
import { useEffect, useState } from 'react';
import Spinner from 'react-spinner-material';

export default function CreateButtonPage({buttonRef, pictureRef, scrollToRef, name, title, startDate, endDate, images }) {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    return () => {
      setErrorMessage(false);
    }
  }, []);

  const handleNextStep = () => {
    if(title != "" && images.length >= 30 && images.length <= 120){
      setLoading(true); 

        setTimeout(() => { // setTimeout은 비동기 작업을 시뮬레이션하기 위해 사용
        navigate('/get-barcord', { state: {
          name: name,
          title: title,
          startDate: startDate,
          endDate: endDate,
          images: images
        }});
        setLoading(false); // 로딩 상태 해제
      }, 2000); // 로딩 시뮬레이션을 위한 2초 지연
  } else {
    setErrorMessage(true);
  }
  }

  return (
    <Body>
      <Container>
      {loading ? (
        // 로딩 중에 표시할 컴포넌트
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
          <Spinner size={120} spinnerColor={"#333"} spinnerWidth={2} visible={loading} />
        </div>
      ) : (
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
         )}
      </Container>
    </Body>
  )
}
