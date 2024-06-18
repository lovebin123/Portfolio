import { Flex, Image,Text } from '@chakra-ui/react'
import React from 'react'
import strokes from '../../assets/strokes.png'
import reactim from '../../assets/react.png'
import framer from '../../assets/framer.svg'
function Footer() {
  return (
    <Flex direction={'column'} mt={20} >
    <Flex direction={'column'} gap={3}>
    <Text textAlign={'center'} letterSpacing={'0.1em'} color={'white'}>Made With</Text>
    <Flex gap={3} alignItems={'center'}>
        <Image src={reactim} h={12}/>
        <Image src='https://img.icons8.com/color/48/chakra-ui.png' h={12}/>
        <Image src={framer} h={8}/>

    </Flex>
    </Flex>
    </Flex>
  )
}

export default Footer