import { Body, Container } from '../../style/style'
import { Box, Stack } from '@chakra-ui/react'
import { Button, Text } from '@chakra-ui/react'
import CustomCreateInputPicture from '../../component/create-barcord/CustomCreateInputPicture';

export default function CreateInputPicturePage({images,setImages, inputRef, pictureRef, buttonRef, scrollToRef}) {

  return (
    <Body>
      <Container>
      <Stack 
      direction='column'
      p={50}
      minW={430}
      ref={pictureRef}
      >
        <Text 
        fontSize='xl'
        color='#ffffff'
        textAlign='center'
        as='b'
        >사진을 넣어주세요. (30~120장 사이)</Text>
          <Text 
        fontSize='sm'
        color='rgba(255, 255, 255, 0.5)'
        textAlign='center'
        as='b'
        >사진은 30장에서 120장 사이여야 해요. </Text>
           <Text 
        fontSize='sm'
        color='#ffffff'
        textAlign='center'
        as='b'
        >현재 {images.length}장</Text>
        <CustomCreateInputPicture 
        images={images}
        setImages={setImages}
        />
        <Box mt={30} />
        <Stack direction='row'>
        <Button 
        colorScheme='blackAlpha' 
        size='lg'
        onClick={() => scrollToRef(inputRef)}
        >
          이전으로
        </Button>
        <Box mt={2} />
        <Button 
        colorScheme='whiteAlpha' 
        size='lg'
        w={100}
        onClick={() => scrollToRef(buttonRef)}
        >
          다음으로
        </Button>
        </Stack>
        </Stack>
      </Container>
    </Body>
  )
}
