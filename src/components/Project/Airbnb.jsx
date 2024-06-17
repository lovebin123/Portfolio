import React from 'react'
import { Flex,Text,Image, Link } from '@chakra-ui/react'
import Carousal from './Carousal/Carousal'
import air1 from '../../assets/airbnb.jpg'
import air2 from '../../assets/air2.jpg'
import air3 from '../../assets/air3.jpg'
function Airbnb() {
    const images=[air1,air2,air3]
  return (
    <Flex px={4}   direction={'column'} mt={8}>
    <Text color={'#60a5fa'}>Personal Project</Text>
    <Text color={'white'} fontSize={'4xl'}>Airbnb Clone</Text>
    <Flex gap={6}>
    <Link _hover={{textDecoration:'none'}} href='https://github.com/lovebin123/airbnbclone' isExternal>
    <Flex w={24} cursor={'pointer'} bgColor={' rgb(30 41 59)'} _hover={{bgColor:'rgb(7 89 133)',}} h={12} px={3} py={2} alignItems={'center'} mt={4} rounded={10}>
      <Text  gap={1} display={'flex'} alignItems={'center'} color={'rgb(56 189 248)'}>Code         <svg stroke="currentColor" fill="rgb(56 189 248)" stroke-width="0" viewBox="0 0 32 32" class="hover:text-bright cursor-pointer" height="40" width="40" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M 16 4 C 9.371094 4 4 9.371094 4 16 C 4 21.300781 7.4375 25.800781 12.207031 27.386719 C 12.808594 27.496094 13.027344 27.128906 13.027344 26.808594 C 13.027344 26.523438 13.015625 25.769531 13.011719 24.769531 C 9.671875 25.492188 8.96875 23.160156 8.96875 23.160156 C 8.421875 21.773438 7.636719 21.402344 7.636719 21.402344 C 6.546875 20.660156 7.71875 20.675781 7.71875 20.675781 C 8.921875 20.761719 9.554688 21.910156 9.554688 21.910156 C 10.625 23.746094 12.363281 23.214844 13.046875 22.910156 C 13.15625 22.132813 13.46875 21.605469 13.808594 21.304688 C 11.144531 21.003906 8.34375 19.972656 8.34375 15.375 C 8.34375 14.0625 8.8125 12.992188 9.578125 12.152344 C 9.457031 11.851563 9.042969 10.628906 9.695313 8.976563 C 9.695313 8.976563 10.703125 8.65625 12.996094 10.207031 C 13.953125 9.941406 14.980469 9.808594 16 9.804688 C 17.019531 9.808594 18.046875 9.941406 19.003906 10.207031 C 21.296875 8.65625 22.300781 8.976563 22.300781 8.976563 C 22.957031 10.628906 22.546875 11.851563 22.421875 12.152344 C 23.191406 12.992188 23.652344 14.0625 23.652344 15.375 C 23.652344 19.984375 20.847656 20.996094 18.175781 21.296875 C 18.605469 21.664063 18.988281 22.398438 18.988281 23.515625 C 18.988281 25.121094 18.976563 26.414063 18.976563 26.808594 C 18.976563 27.128906 19.191406 27.503906 19.800781 27.386719 C 24.566406 25.796875 28 21.300781 28 16 C 28 9.371094 22.628906 4 16 4 Z"></path></svg>
</Text>
    </Flex>
    </Link>
    <Link _hover={{textDecoration:'none'}} href='https://lovebin123.github.io/airbnbclone/' isExternal>
    <Flex w={24} cursor={'pointer'} bgColor={' rgb(30 41 59)'} _hover={{bgColor:'#134e4a',}} h={12} px={2} py={2} alignItems={'center'} mt={4} rounded={10}>
      <Text  gap={1} display={'flex'} alignItems={'center'} color={'#19AB2C'}>  Website
        <Image src='https://img.icons8.com/ios/50/40C057/globe--v1.png' w={22} h={22}/>
</Text>
    </Flex>
    </Link>
    </Flex>

    <Flex gap={4} mt={6}>
      <Flex rounded={'full'} bgColor={'#134e4a'} opacity={40} px={4} py={2} mt={2} fontWeight={'bold'}>
        <Text color={'#2dd4bf'}>ReactJS</Text>
      </Flex>
      <Flex rounded={'full'} bgColor={'#134e4a'} opacity={40} px={4} py={2} mt={2} fontWeight={'bold'}>
        <Text color={'#2dd4bf'}>Material UI</Text>
      </Flex>
      <Flex rounded={'full'} bgColor={'#134e4a'} opacity={40} px={4} py={2} mt={2} fontWeight={'bold'}>
        <Text color={'#2dd4bf'}>Slick Carousal</Text>
      </Flex>

    </Flex>
    <Flex  mt={8} alignItems={'center'} gap={10}>
    <Text letterSpacing={' 0.050em'} color={'white'}>
    I built a clone of Airbnb's website to challenge myself and learn ReactJS. I used Material UI to give it a modern look and feel, and Slick Carousel to showcase property listings in a smooth and engaging way.<br></br><br></br> This project was my first big undertaking in ReactJS, and it helped me wrap my head around key web development concepts like component-based architecture . I'm proud of what I've accomplished, and I'm excited to keep building on this foundation. I learned a ton about what makes a website tick, and I'm ready to take on even more ambitious projects.<br></br><br></br> I'm thrilled to have had the opportunity to put my skills to the test and see my vision come to life!
</Text>
<Carousal  images={images}/>
    </Flex>

</Flex>
  )
}

export default Airbnb