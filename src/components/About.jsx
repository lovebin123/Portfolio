import { Flex,Image,Text } from '@chakra-ui/react'
import me from '../assets/me2.jpg'
import React from 'react'

function About() {
  return (
    <Flex w={'full'} h={'full'} direction={'column'} mt={3} willChange={'transform'}>
        <Flex justifyContent={'center'} alignItems={'start'}>
            <Image src={me} boxSize={20} objectFit={'cover'} rounded={'4rem'} ></Image>
        </Flex>
    </Flex>
  )
}

export default About