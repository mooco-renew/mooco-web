import CustomCreateDatePicker from '../../component/create-barcord/CustomCreateDatePicker'
import CustomCreateInput from '../../component/create-barcord/CustomCreateInput'
import { Body, Container } from '../../style/style'
import { Button, Box, Stack } from '@chakra-ui/react'
import { Text } from '@chakra-ui/react'
import { useEffect} from 'react';

export default function CreateInputPage({startDate, setStartDate, endDate, setEndDate, title, handleChange, inputRef, pictureRef, scrollToRef}) {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    }
  }, []);

  return (
    <Body>
      <Container>
      <Stack 
      direction='column'
      justifyContent='center'
      p={50}
      ref={inputRef}
      >
        <Box y={50}/>
        <Text 
        fontSize='xl'
        color='#ffffff'
        textAlign='center'
        as='b'
        mt={60}
        >제목, 시작일, 종료일을 입력해주세요.</Text>
        <Box mt={20} />
        <CustomCreateInput value={title} setValue={handleChange}/>
        <Box mt={1} />
        <CustomCreateDatePicker value={startDate} setValue={setStartDate}/>
        <Box mt={1} />
        <CustomCreateDatePicker value={endDate} setValue={setEndDate}/>
        <Box mt={100} />
        <Button 
        colorScheme='whiteAlpha' 
        size='lg'
        w={100}
        onClick={() => scrollToRef(pictureRef)}
        >
          다음으로
        </Button>
        <Box />
        </Stack>
      </Container>
    </Body>
  )
}
