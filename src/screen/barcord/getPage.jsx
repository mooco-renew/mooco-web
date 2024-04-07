import CustomCreateDatePicker from '../../component/barcord/CustomCreateDatePicker'
import CustomCreateInput from '../../component/barcord/CustomCreateInput'
import { Body, Container } from '../../style/style'
import { useNavigate } from 'react-router-dom';
import { Button, Box, Stack } from '@chakra-ui/react'
import { Text } from '@chakra-ui/react'
import CustomCreateInputPicture from '../../component/barcord/CustomCreateInputPicture';

export default function GetPage() {
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
        </Stack>
      </Container>
    </Body>
  )
}
