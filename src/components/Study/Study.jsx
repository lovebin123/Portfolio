import React, { useEffect, useRef } from 'react'
import { Flex,Text,Image, Avatar, Heading } from '@chakra-ui/react'
import meclogo from '../../assets/mec_logo.png'
import kj from '../../assets/kj.png'
import kjvn from '../../assets/kjvn.png'
import { motion,useInView,useAnimation} from "framer-motion"
import { cubicBezier } from "framer-motion"

function Study() {
    const mecRef = useRef(null);
  const kjRef = useRef(null);
const kjvnRef=useRef(null);
  const mecInView = useInView(mecRef,{once:true});
  const kjInView = useInView(kjRef,{once:true});
const kjvnInView=useInView(kjvnRef,{once:true})
  const mecControls=useAnimation()
  const kjControls=useAnimation()
const kjvnControls=useAnimation()
  useEffect(() => {
    if (mecInView) {
      mecControls.start('visible');
    }
  }, [mecInView]);

  useEffect(() => {
    if (kjInView) {
      kjControls.start('visible');
    }
  }, [kjInView]);
  useEffect(() => {
    if (kjvnInView) {
      kjvnControls.start('visible');
    }
  }, [kjvnInView]);

  return (
    <Flex cursor={'context-menu'} direction={'column'} justifyContent={'center'} px={20} mt={20} gap={10} mb={5}>
    <Text color={'white'} fontWeight={'bold'} fontSize={'5xl'}>
        Education
    </Text>
    <Flex direction={'column'} gap={24}>
    <Flex direction={'column'} alignItems={'center'} gap={8} rounded={'4rem'} overflow={'hidden'} p={10} bgGradient={'linear(to-bl,rgb(15,23,42),rgb(28,25,23))'}>
    <Flex gap={4}>
        <Image filter={'contrast(100%) brightness(110%)'} src={meclogo} boxSize={20} objectFit={'contain'} borderRadius={'50%'}/>
        <Flex direction={'column'} >
        <Flex gap={4} alignItems={'center'}>
            <Text color={'#60a5fa'} fontSize={'xl'} fontWeight={'semibold'}>Graduation</Text>
            <Text fontStyle={'light'} color={'gray.500'} letterSpacing={' 0.025em'}>
                November 2021 ~ July 2025
            </Text>
        </Flex>
        <Text fontSize={'larger'} color={'white'}>Model Engineering College</Text>
        <Text fontSize={'larger'} color={'white'}>B.Tech Computer Science Engineering</Text>
        </Flex>
    </Flex>
    <Flex className='MEC' direction={'column'} ref={mecRef}  >
    <motion.div transition={{delay:0.4,duration:0.8}} variants={{hidden:{filter: "blur(40px)" },visible:{ filter:"blur(0px)"}}} initial="hidden"  animate={mecControls} >
        <Flex gap={3} direction={'row'} overflow={'hidden'} >
            <Flex opacity={40} gap={2} px={2} py={2} alignItems={'center'} m={2} background={'rgb(12, 74, 110,0.4)'} rounded={'full'} >
           
                <svg stroke="currentColor" fill="#38bdf8" stroke-width="0" viewBox="0 0 32 32" class="flex-shrink-0" height="30" width="30" xmlns="http://www.w3.org/2000/svg"><path d="M 16 4.875 L 15.53125 5.125 L 2.03125 12.125 L 0.3125 13 L 2 13.84375 L 2 22.28125 C 1.402344 22.628906 1 23.261719 1 24 C 1 25.105469 1.894531 26 3 26 C 4.105469 26 5 25.105469 5 24 C 5 23.261719 4.597656 22.628906 4 22.28125 L 4 14.875 L 6 15.90625 L 6 21 C 6 21.441406 6.203125 21.839844 6.4375 22.09375 C 6.671875 22.347656 6.957031 22.5 7.25 22.65625 C 7.839844 22.964844 8.539063 23.183594 9.40625 23.375 C 11.140625 23.761719 13.453125 24 16 24 C 18.546875 24 20.859375 23.761719 22.59375 23.375 C 23.460938 23.183594 24.160156 22.964844 24.75 22.65625 C 25.042969 22.5 25.328125 22.347656 25.5625 22.09375 C 25.796875 21.839844 26 21.441406 26 21 L 26 15.90625 L 29.96875 13.875 L 31.6875 13 L 29.96875 12.125 L 16.46875 5.125 Z M 16 7.125 L 27.3125 13 L 25.53125 13.90625 C 25.304688 13.667969 25.03125 13.492188 24.75 13.34375 C 24.164063 13.035156 23.460938 12.816406 22.59375 12.625 C 20.863281 12.238281 18.558594 12 16 12 C 13.441406 12 11.136719 12.238281 9.40625 12.625 C 8.539063 12.816406 7.835938 13.035156 7.25 13.34375 C 6.96875 13.492188 6.695313 13.667969 6.46875 13.90625 L 4.6875 13 Z M 16 14 C 18.441406 14 20.636719 14.222656 22.15625 14.5625 C 22.914063 14.730469 23.523438 14.925781 23.84375 15.09375 C 23.945313 15.148438 23.960938 15.1875 24 15.21875 L 24 19.03125 C 23.582031 18.878906 23.125 18.742188 22.59375 18.625 C 20.859375 18.238281 18.546875 18 16 18 C 13.453125 18 11.140625 18.238281 9.40625 18.625 C 8.875 18.742188 8.417969 18.878906 8 19.03125 L 8 15.21875 C 8.039063 15.1875 8.054688 15.148438 8.15625 15.09375 C 8.476563 14.925781 9.085938 14.730469 9.84375 14.5625 C 11.363281 14.222656 13.558594 14 16 14 Z M 16 20 C 18.425781 20 20.632813 20.222656 22.15625 20.5625 C 22.789063 20.703125 23.1875 20.851563 23.53125 21 C 23.1875 21.148438 22.789063 21.296875 22.15625 21.4375 C 20.632813 21.777344 18.425781 22 16 22 C 13.574219 22 11.367188 21.777344 9.84375 21.4375 C 9.210938 21.296875 8.8125 21.148438 8.46875 21 C 8.8125 20.851563 9.210938 20.703125 9.84375 20.5625 C 11.367188 20.222656 13.574219 20 16 20 Z"></path></svg>
                <Text color={'#38bdf8'}>8.5 CGPA</Text>
            </Flex>

        </Flex>
        </motion.div>

    </Flex>
    </Flex>
    <Flex direction={'column'} alignItems={'center'} gap={3} rounded={'4rem'} overflow={'hidden'} p={10} bgGradient={'linear(to-bl,rgb(15,23,42),rgb(28,25,23))'}>
    <Flex gap={4}>
        <Image boxSize={20} objectFit={'contain'} borderRadius={'50%'} src={kj}></Image>
        <Flex direction={'column'}>
        <Flex gap={4} alignItems={'center'}>
        <Text color={'#60a5fa'} fontSize={'xl'} fontWeight={'semibold'}>CLASS XII</Text>
        <Text fontStyle={'light'} color={'gray.500'} letterSpacing={' 0.025em'}>
                June 2019 ~ May 2021
            </Text>
        </Flex>
        <Text fontSize={'larger'} color={'white'}>Kristu Jyoti HSS</Text>
        <Text fontSize={'larger'} color={'white'}>Physics Chemistry Maths Computer</Text>
        </Flex>
    </Flex>
    <Flex className='KJ' ref={kjRef} direction={'column'} >
    <motion.div transition={{delay:0.4,duration:0.8}} variants={{hidden:{filter: "blur(40px)" },visible:{ filter:"blur(0px)"}}} initial="hidden"  animate={kjControls} >
    <Flex gap={3} direction={'row'} >
            <Flex opacity={40} gap={2} px={2} py={2} alignItems={'center'} m={2} background={'rgb(12, 74, 110,0.4)'} rounded={'full'} >
                <svg stroke="currentColor" fill="#38bdf8" stroke-width="0" viewBox="0 0 32 32" class="flex-shrink-0" height="30" width="30" xmlns="http://www.w3.org/2000/svg"><path d="M 16 4.875 L 15.53125 5.125 L 2.03125 12.125 L 0.3125 13 L 2 13.84375 L 2 22.28125 C 1.402344 22.628906 1 23.261719 1 24 C 1 25.105469 1.894531 26 3 26 C 4.105469 26 5 25.105469 5 24 C 5 23.261719 4.597656 22.628906 4 22.28125 L 4 14.875 L 6 15.90625 L 6 21 C 6 21.441406 6.203125 21.839844 6.4375 22.09375 C 6.671875 22.347656 6.957031 22.5 7.25 22.65625 C 7.839844 22.964844 8.539063 23.183594 9.40625 23.375 C 11.140625 23.761719 13.453125 24 16 24 C 18.546875 24 20.859375 23.761719 22.59375 23.375 C 23.460938 23.183594 24.160156 22.964844 24.75 22.65625 C 25.042969 22.5 25.328125 22.347656 25.5625 22.09375 C 25.796875 21.839844 26 21.441406 26 21 L 26 15.90625 L 29.96875 13.875 L 31.6875 13 L 29.96875 12.125 L 16.46875 5.125 Z M 16 7.125 L 27.3125 13 L 25.53125 13.90625 C 25.304688 13.667969 25.03125 13.492188 24.75 13.34375 C 24.164063 13.035156 23.460938 12.816406 22.59375 12.625 C 20.863281 12.238281 18.558594 12 16 12 C 13.441406 12 11.136719 12.238281 9.40625 12.625 C 8.539063 12.816406 7.835938 13.035156 7.25 13.34375 C 6.96875 13.492188 6.695313 13.667969 6.46875 13.90625 L 4.6875 13 Z M 16 14 C 18.441406 14 20.636719 14.222656 22.15625 14.5625 C 22.914063 14.730469 23.523438 14.925781 23.84375 15.09375 C 23.945313 15.148438 23.960938 15.1875 24 15.21875 L 24 19.03125 C 23.582031 18.878906 23.125 18.742188 22.59375 18.625 C 20.859375 18.238281 18.546875 18 16 18 C 13.453125 18 11.140625 18.238281 9.40625 18.625 C 8.875 18.742188 8.417969 18.878906 8 19.03125 L 8 15.21875 C 8.039063 15.1875 8.054688 15.148438 8.15625 15.09375 C 8.476563 14.925781 9.085938 14.730469 9.84375 14.5625 C 11.363281 14.222656 13.558594 14 16 14 Z M 16 20 C 18.425781 20 20.632813 20.222656 22.15625 20.5625 C 22.789063 20.703125 23.1875 20.851563 23.53125 21 C 23.1875 21.148438 22.789063 21.296875 22.15625 21.4375 C 20.632813 21.777344 18.425781 22 16 22 C 13.574219 22 11.367188 21.777344 9.84375 21.4375 C 9.210938 21.296875 8.8125 21.148438 8.46875 21 C 8.8125 20.851563 9.210938 20.703125 9.84375 20.5625 C 11.367188 20.222656 13.574219 20 16 20 Z"></path></svg>
                <Text color={'#38bdf8'}>99.1%</Text>
            </Flex>
            <Flex opacity={40} px={2} py={2} alignItems={'center'} m={2} background={'orange.900'} rounded={'full'} gap={2}>
            <svg stroke="currentColor" fill="rgb(255, 167, 38)" stroke-width="0" viewBox="0 0 32 32" class="flex-shrink-0" height="30" width="30" xmlns="http://www.w3.org/2000/svg"><path d="M 16 2.125 L 15.09375 4.1875 L 11.84375 11.46875 L 3.90625 12.3125 L 1.65625 12.5625 L 3.34375 14.0625 L 9.25 19.40625 L 7.59375 27.21875 L 7.125 29.40625 L 9.09375 28.28125 L 16 24.28125 L 22.90625 28.28125 L 24.875 29.40625 L 24.40625 27.21875 L 22.75 19.40625 L 28.65625 14.0625 L 30.34375 12.5625 L 28.09375 12.3125 L 20.15625 11.46875 L 16.90625 4.1875 Z M 16 7.03125 L 18.5625 12.8125 L 18.8125 13.34375 L 19.375 13.40625 L 25.65625 14.0625 L 20.96875 18.28125 L 20.53125 18.6875 L 20.65625 19.25 L 21.96875 25.40625 L 16.5 22.28125 L 16 21.96875 L 15.5 22.28125 L 10.03125 25.40625 L 11.34375 19.25 L 11.46875 18.6875 L 11.03125 18.28125 L 6.34375 14.0625 L 12.625 13.40625 L 13.1875 13.34375 L 13.4375 12.8125 Z"></path></svg>
            <Text color={'rgb(255, 167, 38)'}>Chemistry Subject Topper</Text>
            </Flex>
        </Flex>
        </motion.div>

    </Flex>
</Flex>
  <Flex direction={'column'} alignItems={'center'} gap={3} rounded={'4rem'} overflow={'hidden'} p={10} bgGradient={'linear(to-bl,rgb(15,23,42),rgb(28,25,23))'}>
    <Flex gap={4}>
        <Image boxSize={20} objectFit={'contain'} borderRadius={'50%'} src={kjvn}></Image>
        <Flex direction={'column'}>
        <Flex gap={4} alignItems={'center'}>
        <Text color={'#60a5fa'} fontSize={'xl'} fontWeight={'semibold'}>CLASS X</Text>
        <Text fontStyle={'light'} color={'gray.500'} letterSpacing={' 0.025em'}>
                May 2019
            </Text>
        </Flex>
        <Text fontSize={'larger'} color={'white'}>Kristu Jyoti Vidya Nikethan (ICSE)</Text>
        </Flex>
    </Flex>
    <Flex direction={'column'} ref={kjvnRef}>
    <motion.div transition={{delay:0.4,duration:0.8}} variants={{hidden:{filter: "blur(40px)" },visible:{ filter:"blur(0px)"}}} initial="hidden"  animate={kjvnControls} >

        <Flex gap={2} direction={'row'} >
            <Flex  opacity={40} gap={2} px={2} py={2} alignItems={'center'} m={2} background={'#0c4a6e'} rounded={'full'} >
                <svg stroke="currentColor" fill="#38bdf8" stroke-width="0" viewBox="0 0 32 32" class="flex-shrink-0" height="30" width="30" xmlns="http://www.w3.org/2000/svg"><path d="M 16 4.875 L 15.53125 5.125 L 2.03125 12.125 L 0.3125 13 L 2 13.84375 L 2 22.28125 C 1.402344 22.628906 1 23.261719 1 24 C 1 25.105469 1.894531 26 3 26 C 4.105469 26 5 25.105469 5 24 C 5 23.261719 4.597656 22.628906 4 22.28125 L 4 14.875 L 6 15.90625 L 6 21 C 6 21.441406 6.203125 21.839844 6.4375 22.09375 C 6.671875 22.347656 6.957031 22.5 7.25 22.65625 C 7.839844 22.964844 8.539063 23.183594 9.40625 23.375 C 11.140625 23.761719 13.453125 24 16 24 C 18.546875 24 20.859375 23.761719 22.59375 23.375 C 23.460938 23.183594 24.160156 22.964844 24.75 22.65625 C 25.042969 22.5 25.328125 22.347656 25.5625 22.09375 C 25.796875 21.839844 26 21.441406 26 21 L 26 15.90625 L 29.96875 13.875 L 31.6875 13 L 29.96875 12.125 L 16.46875 5.125 Z M 16 7.125 L 27.3125 13 L 25.53125 13.90625 C 25.304688 13.667969 25.03125 13.492188 24.75 13.34375 C 24.164063 13.035156 23.460938 12.816406 22.59375 12.625 C 20.863281 12.238281 18.558594 12 16 12 C 13.441406 12 11.136719 12.238281 9.40625 12.625 C 8.539063 12.816406 7.835938 13.035156 7.25 13.34375 C 6.96875 13.492188 6.695313 13.667969 6.46875 13.90625 L 4.6875 13 Z M 16 14 C 18.441406 14 20.636719 14.222656 22.15625 14.5625 C 22.914063 14.730469 23.523438 14.925781 23.84375 15.09375 C 23.945313 15.148438 23.960938 15.1875 24 15.21875 L 24 19.03125 C 23.582031 18.878906 23.125 18.742188 22.59375 18.625 C 20.859375 18.238281 18.546875 18 16 18 C 13.453125 18 11.140625 18.238281 9.40625 18.625 C 8.875 18.742188 8.417969 18.878906 8 19.03125 L 8 15.21875 C 8.039063 15.1875 8.054688 15.148438 8.15625 15.09375 C 8.476563 14.925781 9.085938 14.730469 9.84375 14.5625 C 11.363281 14.222656 13.558594 14 16 14 Z M 16 20 C 18.425781 20 20.632813 20.222656 22.15625 20.5625 C 22.789063 20.703125 23.1875 20.851563 23.53125 21 C 23.1875 21.148438 22.789063 21.296875 22.15625 21.4375 C 20.632813 21.777344 18.425781 22 16 22 C 13.574219 22 11.367188 21.777344 9.84375 21.4375 C 9.210938 21.296875 8.8125 21.148438 8.46875 21 C 8.8125 20.851563 9.210938 20.703125 9.84375 20.5625 C 11.367188 20.222656 13.574219 20 16 20 Z"></path></svg>
                <Text color={'#38bdf8'}>91.6%</Text>
            </Flex>
          
        </Flex>
        </motion.div>
    </Flex>
</Flex>
    </Flex>
    </Flex>
  )
}

export default Study