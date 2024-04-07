import React from 'react'
import { BsCalendar4Event } from "react-icons/bs";
import { Input } from '@chakra-ui/react'
import "/src/component/barcord/CustomCreateValue.css";


export default function CustomCreateInput({value, setValue}) {
  return (
    <div className='InputWrap'>
        <Input 
        value={value}
        onChange={setValue}
        className='InputStyle'
        placeholder='제목을 입력해주세요.'
        size='md'
        variant='filled'
        w='100%'
        backgroundColor='rgba(255, 255, 255, 0.2)'
        _placeholder={{ color: '#ffffff' }}
        border='2px solid rgba(255, 255, 255, 0.2)'
         />
        <div className='EventIconWrap'>
            <BsCalendar4Event className='EventIconStyle' />
        </div>
    </div>
  )
}
