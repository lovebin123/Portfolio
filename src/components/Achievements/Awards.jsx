import React from 'react'
import { Flex, Text, Image, transition } from '@chakra-ui/react';
import award from '../../assets/awards.svg'
import achievement from '../../assets/achievement.png'
import firstprize from '../../assets/1st-prize.png'
import secondprize from '../../assets/second-prize.png'
import thirdprize from '../../assets/3rd-place.png'
function Awards() {
  return (
    <Flex direction={'column'} gap={10} px={4} justifyContent={'center'} alignItems={'center'}>
        <Text  color={'white'} fontWeight={'bold'} fontSize={'5xl'}>
        Achievements
    </Text>
   <Flex rounded={'4rem'}  overflow={'hidden'}  bgGradient={'linear(to-bl,#0f172a,#1c1917)'} w={'85vw'} h={'35rem'}  position={'relative'} direction={'column'}   px={20} py={10} pb={12} bgImage={achievement} bgPos={'center'} bgSize={'40%'} bgRepeat={'no-repeat'} >
   <Flex position={'absolute'} top={0} left={0} right={0} bottom={0} bgGradient={'linear(to-bl,#0f172a,#1c1917)'} style={{opacity:0.610}}/>
   <Flex direction={'row'} justifyContent={'space-between'}>
    <Flex direction={'column'} gap={16} justifyContent={'left'} flexFlow={'column'}>
    <Flex filter={'brightness(90%)'} rounded={'4rem'} w={'14rem'} h={'12rem'} direction={'column'} gap={3} backgroundColor={'rgb(12, 74, 110,0.4)'} justifyContent={'center'} alignItems={'center'}>
        <Image src={firstprize} h={12} w={12} />
        <Text fontSize={'sm'} color={'#38bdf8'} textAlign={'center'} display={'inline-block'} inlineSize={140}>First Prize in Blind Coding conducted by SB College, Changanacherry</Text>
    </Flex>
    <Flex filter={'brightness(90%)'} rounded={'4rem'} w={'14rem'} h={'12rem'} direction={'column'} gap={3} backgroundColor={'rgb(12, 74, 110,0.4)'} justifyContent={'center'} alignItems={'center'}>
        <Image src={firstprize} h={12} w={12} />
        <Text fontSize={'sm'} color={'#38bdf8'} textAlign={'center'} display={'inline-block'} inlineSize={140}>First Prize in Neural Net conducted by Excel MEC 2023</Text>
    </Flex>
    </Flex>
    <Flex direction={'column'} gap={16} justifyContent={'flex-start'} flexFlow={'column'}>
    <Flex filter={'brightness(90%)'} rounded={'4rem'} w={'14rem'} h={'12rem'} direction={'column'} gap={3} backgroundColor={'rgb(12, 74, 110,0.4)'} justifyContent={'center'} alignItems={'center'}>
        <Image src={thirdprize} h={12} w={12} />
        <Text fontSize={'sm'} color={'#38bdf8'} textAlign={'center'} display={'inline-block'} inlineSize={140}>Third Prize in Ozone 3.0, conducted by TLE MEC</Text>
    </Flex>
    <Flex filter={'brightness(90%)'} rounded={'4rem'} w={'14rem'} h={'12rem'} direction={'column'} gap={3} backgroundColor={'rgb(12, 74, 110,0.4)'} justifyContent={'center'} alignItems={'center'}>
        <Image src={thirdprize} h={12} w={12} />
        <Text fontSize={'sm'} color={'#38bdf8'} textAlign={'center'} display={'inline-block'} inlineSize={140}>Third Prize in 4*120, condurcted by Excel MEC</Text>
    </Flex>
    </Flex>
    
    </Flex>
   
   </Flex>
   </Flex>
  )
}

export default Awards