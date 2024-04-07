import CustomCreateDatePicker from '../../component/create-barcord/CustomCreateDatePicker'
import CustomCreateInput from '../../component/create-barcord/CustomCreateInput'
import { Body, Container } from '../../style/style'
import { Button, Box, Stack } from '@chakra-ui/react'
import { Text } from '@chakra-ui/react'
import { useEffect} from 'react';

export default function CreateInputPage({startDate, setStartDate, endDate, setEndDate, title, name, handleTitleChange,  handleNameChange, inputRef, pictureRef, scrollToRef}) {

  return (
    <Body>
      <Container>
      <Stack 
      direction='column'
      justifyContent='center'
      p={50}
      ref={inputRef}
      >
        <Text 
        fontSize='xl'
        color='#ffffff'
        textAlign='center'
        as='b'
        >기록하고 싶은 이벤트의 정보를 입력해주세요.</Text>
        <Box mt={10} />
        <Text color='rgba(255, 255, 255, 0.8)' fontSize='sm' >이름</Text>
        <CustomCreateInput value={name} setValue={handleNameChange} placeholder="이름을 입력해주세요."/>
        <Text color='rgba(255, 255, 255, 0.8)' fontSize='sm'>제목</Text>
        <CustomCreateInput value={title} setValue={handleTitleChange} placeholder="이벤트명을 입력해주세요."/>
        <Text color='rgba(255, 255, 255, 0.8)' fontSize='sm'>시작일</Text>
        <CustomCreateDatePicker value={startDate} setValue={setStartDate}/>
        <Text color='rgba(255, 255, 255, 0.8)' fontSize='sm'>종료일</Text>
        <CustomCreateDatePicker value={endDate} setValue={setEndDate}/>
        <Box mt={10} />
        {/* 
          <Button 
        colorScheme='whiteAlpha' 
        size='lg'
        w={100}
        onClick={() => scrollToRef(pictureRef)}
        >
          다음으로
        </Button>
        */}
        <Box />
        </Stack>
      </Container>
    </Body>
  )
}
