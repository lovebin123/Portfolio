import { Flex, Image,Link,Text } from '@chakra-ui/react'
import React from 'react'
import strokes from '../../assets/strokes.png'
import reactim from '../../assets/react.png'
import framer from '../../assets/framer.svg'
import insta from '../../assets/insta.png'
function Footer() {
  return (
    <Flex   direction={'column'} mt={20} >
    <Flex  direction={'column'} gap={3}>
    <Flex  direction={'column'}>
      <Text fontSize={'2xl'}  letterSpacing={'0.1em'} color={'rgb(56 189 248)'} textAlign={'center'}>Developed by</Text>
      <Text fontFamily={'sans-serif'} fontSize={'2xl'} letterSpacing={'0.1em'} color={'rgb(56 189 248)'} textAlign={'center'}>𝐿𝑜𝓋𝑒𝒷𝒾𝓃 𝑅𝑜𝒷𝒾𝓃</Text>
    </Flex>
  <Flex direction={'row'} justifyContent={'space-around'} mt={10}>
  <Flex direction={'column'} gap={5}>
    <Text color={'white'}>Helpful Links</Text>
    <Flex direction={'column'} gap={2}>
    <Link _hover={{textDecoration:'none'}} href='#About' color={'white'}>
    <Text color={'white'}>About</Text>
   </Link>
   <Link _hover={{textDecoration:'none'}} href='#Education' color={'white'}>
   <Text color={'white'}>Education</Text>
   </Link>
   <Link _hover={{textDecoration:'none'}} href='#Projects' color={'white'}>
   <Text color={'white'}>Projects</Text>
   </Link>
   <Link _hover={{textDecoration:'none'}} href='#Skills' color={'white'}>
   <Text color={'white'}>Skills</Text>
   </Link>
   <Link _hover={{textDecoration:'none'}} href='#Achievements' color={'white'}>
   <Text color={'white'}>Achievements</Text>
   </Link>
    </Flex>
  </Flex>
  <Flex justifyContent={'center'} alignItems={'center'} direction={'column'} pl={5}>
    <Text pl={4}  letterSpacing={'0.1em'} color={'white'} mt={5}>Made With</Text>
    <Flex justifyContent={'center'} gap={3} alignItems={'center'}>
        <Image src={reactim} h={12}/>
        <Image src='https://img.icons8.com/color/48/chakra-ui.png' h={12}/>
        <Image src={framer} h={8}/>

    </Flex>
    </Flex>

    <Flex direction={'column'} gap={8}>
    <Text textAlign={'center'} letterSpacing={'0.1em'} color={'white'} >Contact Me</Text>
    <Flex justifyContent={'center'} gap={4} alignItems={'center'}>
    <Link isExternal href='https://www.instagram.com/lovebinrobin/'>
    <Image src={insta} h={10} w={10}/>
    </Link>
    <Link isExternal href='https://x.com/lovebinrp123'>
    <Image src='https://img.icons8.com/color/48/twitter--v1.png' h={10} w={10}/>
    </Link>
    <Link isExternal href='https://www.facebook.com/lovebin.robin/'>
    <Image src='https://img.icons8.com/color/48/facebook.png' h={10} w={10}/>
    </Link>
    </Flex>
    </Flex>
</Flex>
    </Flex>
    <Flex justifyContent={'center'} alignItems={'center'}>
    <Image src={strokes} h={220} w={'15rem'}/>
    </Flex>
    </Flex>
  )
}

export default Footer