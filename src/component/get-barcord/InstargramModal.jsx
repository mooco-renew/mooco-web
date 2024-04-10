import React, {useEffect} from 'react'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Button,
    Image
  } from '@chakra-ui/react'

export default function InstargramModal() {
    const { isOpen, onOpen, onClose } = useDisclosure();

    useEffect(() => {
        onOpen();
    }, [onOpen]);

    return (
      <>
        <Button onClick={onOpen}>Open Modal</Button>
  
        <Modal 
        isOpen={isOpen} 
        onClose={onClose}
        >
          <ModalOverlay />
          <ModalContent
          border="2px solid #ffffff"
          >
            <ModalHeader
            bg="#000000"
            ></ModalHeader>
            <ModalCloseButton
            color="#ffffff"
            />
            <ModalBody
            bg="#000000"
            >
              <Image 
                src='/src/assets/get/mooco-instargram.jpeg'
                alt='instargram-modal'
                w='100%' 
              />
            </ModalBody>
            <ModalFooter
            bg="#000000"
            >
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
}