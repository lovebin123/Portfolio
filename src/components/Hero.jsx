import { Flex, Image,Text } from '@chakra-ui/react'
import React from 'react'
import me from '../assets/me2.jpg'
function Hero() {
  return (
    <Flex gap={3} width={'98vw'} direction={'column'}   justifyContent={'center'} height={'full'} alignItems={'center'} zIndex={20} position={'relative'} backdropFilter={'blur(4px)'} bgGradient={'linear(to-bl, rgb(41 37 36),rgb(112, 128, 144))'} rounded={'4rem'}>
   <Image objectFit={'cover'} src={me} w={64} height={64} rounded={'4rem'}/>
    <Text fontSize={'4xl'} fontStyle={'light'} color={'white'} fontWeight={'bold'}>LOVEBIN JOSEPH ROBIN</Text>
    <Text color={'blue'}></Text>
    </Flex>
  )
}

export default Hero