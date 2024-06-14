import { Flex,Text } from '@chakra-ui/react'
import React from 'react'
import Hero from '../components/Hero'
import About from '../components/About'
import { Fade, ScaleFade, Slide, SlideFade, Collapse } from '@chakra-ui/react'
function MainPage() {
  return (
   <Flex gap={8}   h={'100vh'} zIndex={30} background={'black'} justifyContent={'center'}  alignItems={'center'} w={'full'} direction={'column'} p={0} pb={1} pt={10} overflowY={'auto'} overflowX={'hidden'} position={'relative'}>  
   <Flex opacity={1}>
    <Hero/>
    </Flex>
    <Flex aspectRatio={11/12} zIndex={20} mx={'auto'}>

    <About/>
    </Flex>
   </Flex>
  )
}

export default MainPage