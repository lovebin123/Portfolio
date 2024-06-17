import { Avatar, Flex,Image,Link,Text,filter,keyframes } from '@chakra-ui/react'
import React from 'react'
import './About.css'
import gameboy from '../../assets/gameboy3.png'
import share from '../../assets/share.png'
function About() {
  
  return (
    <Flex w={'full'} h={'full'} direction={'column'} gap={32} zIndex={40}>


        <Flex justifyContent={'space-between'} px={20}>
        <Flex w={'30rem'} h={100}>
          <Text  color={'white'} fontStyle={'light'} lineHeight={1.625} fontSize={'xl'}>
          Growing up in {' '}<Link color={'#60a5fa'} isExternal href='https://en.wikipedia.org/wiki/Kottayam' style={{textDecoration:'none', display:'inline-flex',alignItems:'center'}}>Kottayam<Image src={share} height={5}/> </Link>, I was always fascinated by computers. As a kid, I loved figuring out how they worked and exploring their capabilities. This curiosity only grew stronger as I got older, leading me to pursue a degree in computer science. I honed my skills in programming and software development, working on various projects that tested my creativity and problem-solving skills. <br></br><br></br>
          Now, I'm driven to use my expertise to create innovative solutions and make a meaningful impact in the tech world. I'm passionate about collaborating with others to bring new ideas to life. In my free time, I enjoy experimenting with new technologies and learning about the latest advancements in the field. My ultimate goal is to make a lasting difference through technology
          </Text>
        </Flex>
        <Flex overflow={'hidden'} position={'relative'}   justifyContent={'flex-end'} >
      <Image  filter={"brightness(100%) "} className='gameboy'  w={'50rem'} src={gameboy} position={'relative'} left={80}></Image>
      <Text as={'sub'} color={'gray.500'}  transform={'rotate(90deg) translateY(270px)'}  >20's kids Nostalgia</Text>
      </Flex>
        </Flex>
    </Flex>
  )
}

export default About