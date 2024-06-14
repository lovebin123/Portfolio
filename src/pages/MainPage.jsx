import { Flex,Text } from '@chakra-ui/react'
import React from 'react'
import Hero from '../components/Hero'
function MainPage() {
  return (
   <Flex h={'100vh'} background={'black'} justifyContent={'center'}  alignItems={'center'} w={'full'} direction={'column'} p={0} pb={8} pt={4} overflow={'hidden'} pos={'relative'}>
    <Hero/>
   </Flex>
  )
}

export default MainPage