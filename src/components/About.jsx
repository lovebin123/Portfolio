import { Avatar, Flex,Image,Link,Text,filter,keyframes } from '@chakra-ui/react'
import React from 'react'
import bitmoji from '../assets/bitmoji.jpg'
import './About.css'
import me from '../assets/me2.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import gameboy from '../assets/gameboy3.png'
function About() {
  
  return (
    <Flex w={'full'} h={'full'} direction={'column'} gap={40}>
    <Flex justifyContent={'space-between'} px={20} position={'sticky'} top={0} zIndex={40} >
        <Flex   alignItems={'center'} gap={3}>
   <Image objectFit={'cover'} src={me} w={20} height={20} rounded={'1rem'}/>
          <Text fontSize={'2xl'} display={'inline-block'} whiteSpace={'nowrap'} color={'white'}>LOVEBIN JOSEPH ROBIN</Text>
        </Flex>
        <Flex  justifyContent={'center'} alignItems={'center'} gap={4}>
        <Link  href='https://drive.google.com/file/d/1s1Cfnx-TTpg7mAk4giXracWMigaCsCEJ/view?usp=sharing' isExternal>
        <svg stroke="currentColor" fill="white" stroke-width="0" viewBox="0 0 32 32" class="hover:text-bright cursor-pointer" height="40" width="40" xmlns="http://www.w3.org/2000/svg"><title>Download resume</title><path d="M 9 4 L 9 11 L 7 11 C 5.355469 11 4 12.355469 4 14 L 4 24 L 9 24 L 9 28 L 23 28 L 23 24 L 28 24 L 28 14 C 28 12.355469 26.644531 11 25 11 L 23 11 L 23 4 Z M 11 6 L 21 6 L 21 11 L 11 11 Z M 7 13 L 25 13 C 25.566406 13 26 13.433594 26 14 L 26 22 L 23 22 L 23 18 L 9 18 L 9 22 L 6 22 L 6 14 C 6 13.433594 6.433594 13 7 13 Z M 8 14 C 7.449219 14 7 14.449219 7 15 C 7 15.550781 7.449219 16 8 16 C 8.550781 16 9 15.550781 9 15 C 9 14.449219 8.550781 14 8 14 Z M 11 20 L 21 20 L 21 26 L 11 26 Z"></path></svg>
        </Link>
        <Link href='https://www.linkedin.com/in/lovebin-robin-650639230/' isExternal>
        <svg stroke="currentColor" fill="white"  stroke-width="0" viewBox="0 0 32 32" class="hover:text-bright cursor-pointer" height="40" width="40" xmlns="http://www.w3.org/2000/svg"><path d="M 8.6425781 4 C 7.1835781 4 6 5.181625 6 6.640625 C 6 8.099625 7.182625 9.3085938 8.640625 9.3085938 C 10.098625 9.3085938 11.283203 8.099625 11.283203 6.640625 C 11.283203 5.182625 10.101578 4 8.6425781 4 z M 21.535156 11 C 19.316156 11 18.0465 12.160453 17.4375 13.314453 L 17.373047 13.314453 L 17.373047 11.310547 L 13 11.310547 L 13 26 L 17.556641 26 L 17.556641 18.728516 C 17.556641 16.812516 17.701266 14.960938 20.072266 14.960938 C 22.409266 14.960937 22.443359 17.145609 22.443359 18.849609 L 22.443359 26 L 26.994141 26 L 27 26 L 27 17.931641 C 27 13.983641 26.151156 11 21.535156 11 z M 6.3632812 11.310547 L 6.3632812 26 L 10.923828 26 L 10.923828 11.310547 L 6.3632812 11.310547 z"></path></svg>
        </Link>
        <Link href='mailto:lovebinjosephrobin.mec@gmail.com' isExternal>
        <svg stroke="currentColor" fill="white" stroke-width="0" viewBox="0 0 32 32" class="hover:text-bright cursor-pointer" height="40" width="40" xmlns="http://www.w3.org/2000/svg"><path d="M 3 8 L 3 26 L 29 26 L 29 8 Z M 7.3125 10 L 24.6875 10 L 16 15.78125 Z M 5 10.875 L 15.4375 17.84375 L 16 18.1875 L 16.5625 17.84375 L 27 10.875 L 27 24 L 5 24 Z"></path></svg>
        </Link>
        <Link href='https://github.com/lovebin123' isExternal>
        <svg stroke="currentColor" fill="white" stroke-width="0" viewBox="0 0 32 32" class="hover:text-bright cursor-pointer" height="40" width="40" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M 16 4 C 9.371094 4 4 9.371094 4 16 C 4 21.300781 7.4375 25.800781 12.207031 27.386719 C 12.808594 27.496094 13.027344 27.128906 13.027344 26.808594 C 13.027344 26.523438 13.015625 25.769531 13.011719 24.769531 C 9.671875 25.492188 8.96875 23.160156 8.96875 23.160156 C 8.421875 21.773438 7.636719 21.402344 7.636719 21.402344 C 6.546875 20.660156 7.71875 20.675781 7.71875 20.675781 C 8.921875 20.761719 9.554688 21.910156 9.554688 21.910156 C 10.625 23.746094 12.363281 23.214844 13.046875 22.910156 C 13.15625 22.132813 13.46875 21.605469 13.808594 21.304688 C 11.144531 21.003906 8.34375 19.972656 8.34375 15.375 C 8.34375 14.0625 8.8125 12.992188 9.578125 12.152344 C 9.457031 11.851563 9.042969 10.628906 9.695313 8.976563 C 9.695313 8.976563 10.703125 8.65625 12.996094 10.207031 C 13.953125 9.941406 14.980469 9.808594 16 9.804688 C 17.019531 9.808594 18.046875 9.941406 19.003906 10.207031 C 21.296875 8.65625 22.300781 8.976563 22.300781 8.976563 C 22.957031 10.628906 22.546875 11.851563 22.421875 12.152344 C 23.191406 12.992188 23.652344 14.0625 23.652344 15.375 C 23.652344 19.984375 20.847656 20.996094 18.175781 21.296875 C 18.605469 21.664063 18.988281 22.398438 18.988281 23.515625 C 18.988281 25.121094 18.976563 26.414063 18.976563 26.808594 C 18.976563 27.128906 19.191406 27.503906 19.800781 27.386719 C 24.566406 25.796875 28 21.300781 28 16 C 28 9.371094 22.628906 4 16 4 Z"></path></svg>
        </Link>
        </Flex>
        </Flex>

        <Flex justifyContent={'space-between'} px={20}>
        <Flex w={'30rem'} h={100}>
          <Text color={'white'} fontStyle={'light'} lineHeight={1.625} fontSize={'xl'}>
          Growing up in <Link color={'#60a5fa'} isExternal href='https://en.wikipedia.org/wiki/Kottayam' style={{textDecoration:'none'}}>Kottayam <FontAwesomeIcon size='xs' icon={faExternalLinkAlt} color='#60a5fa'/> </Link>, I was always fascinated by computers. As a kid, I loved figuring out how they worked and exploring their capabilities. This curiosity only grew stronger as I got older, leading me to pursue a degree in computer science. I honed my skills in programming and software development, working on various projects that tested my creativity and problem-solving skills. <br></br><br></br>
          Now, I'm driven to use my expertise to create innovative solutions and make a meaningful impact in the tech world. I'm passionate about collaborating with others to bring new ideas to life. In my free time, I enjoy experimenting with new technologies and learning about the latest advancements in the field. My ultimate goal is to make a lasting difference through technology
          </Text>
        </Flex>
        <Flex overflow={'hidden'} position={'relative'}   justifyContent={'flex-end'} >
      <Image  filter={"brightness(100%) "} className='gameboy'  w={'50rem'} src={gameboy} position={'relative'} left={80}></Image>
      <Text as={'sub'} color={'white'}  transform={'rotate(90deg) translateY(270px)'}  >20's kids Nostalgia</Text>
      </Flex>
        </Flex>
    </Flex>
  )
}

export default About