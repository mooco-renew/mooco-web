import CustomCreateDatePicker from '../../component/barcord/CustomCreateDatePicker'
import CustomCreateInput from '../../component/barcord/CustomCreateInput'
import { Body, Container } from '../../style/style'
import { useNavigate } from 'react-router-dom';
import { Button, Box, Stack } from '@chakra-ui/react'
import { Text } from '@chakra-ui/react'

export default function CreatePage() {
  const navigate = useNavigate();

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
        >(4xl) 함께 할 이벤트 생성하기</Text>
        <Box mt={20} />
        <CustomCreateInput />
        <Box mt={1} />
        <CustomCreateDatePicker />
        <Box mt={1} />
        <CustomCreateDatePicker />
        <Box mt={10} />
        <Button 
        colorScheme='whiteAlpha' 
        size='lg'
        onClick={() => navigate('/get-barcord')}
        >
          추억 여행을 떠나보세요.
        </Button>
        </Stack>
      </Container>
    </Body>
  )
}
