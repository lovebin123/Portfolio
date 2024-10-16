import { Flex,Text } from '@chakra-ui/react'
import React from 'react'
import Landing from '../components/Landing/Landing'
import About from '../components/About/About'
import Study from '../components/Study/Study'
import Project from '../components/Project/Project_1'
import Topbar from '../components/About/Topbar'
import Skills from '../components/Skills/Skills'
import Footer from '../components/Footer/Footer'
import Awards from '../components/Achievements/Awards'
function MainPage() {
  return (
   <Flex gap={32}   h={'100vh'} zIndex={50} background={'black'}  w={'full'} direction={'column'} p={0} pb={1} pt={6} overflowY={'auto'} overflowX={'hidden'} >  
   <Flex opacity={1} alignItems={'center'} justifyContent={'center'} direction={'column'}>
    <Landing/>
    </Flex>
    <Flex  zIndex={60} opacity={1} transform={'none'}  position={'sticky'} top={0} >
      <Topbar/>
    </Flex>
    <Flex id='About' opacity={1} transform={'none'}>
    <About/>
    </Flex>
    <Flex id='Education' opacity={1} transform={'none'}>
      <Study/>
    </Flex>
    <Flex id='Projects' opacity={1} transform={'none'}>
      <Project/>
    </Flex>
    <Flex id='Skills' opacity={1} justifyContent={'center'} transform={'none'}>
      <Skills/>
    </Flex>
    <Flex justifyContent={'center'} id='Achievements' opacity={1} transform={'none'}>
    <Awards/>
    </Flex>
    <Flex opacity={1} textAlign={'center'} direction={'column'} transform={'none'}>
      <Footer/>
    </Flex>
   </Flex>
  )
}

export default MainPage