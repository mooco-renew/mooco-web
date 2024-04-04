import { useNavigate } from 'react-router-dom';
import { Container } from '../../style/style';
import Mooco  from '/src/assets/main/mooco.svg';
import { Body } from '/src/style/style';
import { Button, Box, Stack } from '@chakra-ui/react'


export default function MainPage() {
  const navigate = useNavigate();

  return (
    <Body>
      <Container>
      <Stack direction='column'>
        <img src={Mooco} />
        <Box mt={10} />
        <Button 
        colorScheme='whiteAlpha' 
        size='lg'
        onClick={() => navigate('/create-barcord')}
        >
          추억 여행을 떠나보세요.
        </Button>
        </Stack>
        </Container>
        </Body>
  )
}
