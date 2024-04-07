import React from 'react'
import { BsCalendar4Event } from "react-icons/bs";
import { Input } from '@chakra-ui/react'
import "/src/component/create-barcord/CustomCreateValue.css";


export default function CustomCreateInput({value, setValue, placeholder}) {
  return (
    <div className='InputWrap'>
        <Input 
        value={value}
        onChange={setValue}
        className='InputStyle'
        placeholder={placeholder}
        size='md'
        variant='filled'
        w='100%'
        backgroundColor='rgba(255, 255, 255, 0.2)'
        _placeholder={{ color: 'rgba(255, 255, 255, 0.2)' }}
        border='2px solid rgba(255, 255, 255, 0.2)'
         />
        <div className='EventIconWrap'>
            <BsCalendar4Event className='EventIconStyle' />
        </div>
    </div>
  )
}
