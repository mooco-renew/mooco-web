import { useNavigate } from 'react-router-dom';
import { Container } from '../../style/style';
import Mooco  from '/src/assets/main/mooco.svg';
import { Body } from '/src/style/style';
import { Button, Box, Stack, Text} from '@chakra-ui/react'
import '/src/screen/main/mainAnimation.css';


export default function MainPage() {
  const navigate = useNavigate();

  return (
    <Body>
      <Container>
      <Stack direction='column' justifyContent='center'>
      <img src={Mooco} className='fadeIn' />
      <Box mt={100} />
        <Text 
        fontSize='xl'
        color='#ffffff'
        textAlign='center'
        as='b'
        className="fadeInUp"
        >당신의 추억을 기록해보세요.</Text>
         <Box mt={5} />
        <Button 
        colorScheme='whiteAlpha' 
        size='lg'
        onClick={() => navigate('/create-barcord')}
        className="fadeInUpDelayed"
        opacity={0}
        >
          시작하기
        </Button>
        </Stack>
        </Container>
        </Body>
  )
}
