import { Body, Container } from '../../style/style'
import { useNavigate } from 'react-router-dom';
import { Button, Box, Stack, Text } from '@chakra-ui/react'

export default function CreateButtonPage({buttonRef, pictureRef, scrollToRef, title, startDate, endDate, images }) {
  const navigate = useNavigate();

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
        <Box mt={50} />
        <Button 
        colorScheme='whiteAlpha' 
        size='lg'
        onClick={() => navigate('/get-barcord', { state: {
          title: title,
          startDate: startDate,
          endDate: endDate,
          images: images
        }})}
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
