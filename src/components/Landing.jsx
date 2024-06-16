import { Flex, Image,Text } from '@chakra-ui/react'
import React from 'react'
import Typewriter from 'typewriter-effect';

import me from '../assets/me2.jpg'
function Landing() {
  return (
    <Flex
     gap={6} width={'96vw'}  direction={'column'}   justifyContent={'center'} height={'95vh'}  zIndex={20} position={'relative'} backdropFilter={'blur(4px)'} bgGradient={'linear(to-bl,rgb(30 41 59),rgb(41 37 36))'} rounded={'4rem'}>
  <Flex

   direction={'column'} justifyContent={'center'} alignItems={'center'}>
   <Image objectFit={'cover'} src={me} w={64} height={64} rounded={'4rem'}/>
    <Text fontSize={'5xl'} fontStyle={'light'} color={'white'} fontWeight={'bold'}>LOVEBIN JOSEPH ROBIN</Text>
    <Text brightness={'40%'} contrast={'0%'} color={'#60a5fa'} letterSpacing={'0.025em'} fontSize={'3xl'} textAlign={'match-parent'}>
       <Typewriter options={{
        strings:['Tech Enthusiast','Frontend Developer'],
        autoStart:true,
        loop:true
       }}/>
    </Text>
    </Flex>
    </Flex>
  )
}

export default Landing