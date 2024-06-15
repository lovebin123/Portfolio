import { Flex,Text } from '@chakra-ui/react'
import React from 'react'
import Landing from '../components/Landing'
import About from '../components/About'
import Study from '../components/Study'
import Project from '../components/Project/Project_1'
function MainPage() {
  return (
   <Flex gap={32}   h={'100vh'} zIndex={30} background={'black'}  w={'full'} direction={'column'} p={0} pb={1} pt={6} overflowY={'auto'} overflowX={'hidden'} >  
   <Flex opacity={1} alignItems={'center'} justifyContent={'center'} direction={'column'}>
    <Landing/>
    </Flex>
    <Flex aspectRatio={11/12} zIndex={20}>
    <About/>
    </Flex>
    <Flex opacity={1} transform={'none'}>
      <Study/>
    </Flex>
    <Flex opacity={1} transform={'none'}>
      <Project/>
    </Flex>
   </Flex>
  )
}

export default MainPage