import { Flex, Image,Text } from '@chakra-ui/react'
import React, { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Typewriter from 'typewriter-effect';

import me from '../../assets/me2.jpg'
function Landing() {
  const squareVariants = {
    visible: { opacity: 1, scale: 1, transition: { duration: 1 } },
    hidden: { opacity: 0, scale: 0 }
  };
  const controls=useAnimation()
  const [ref,inView]=useInView({
    threshold:0.4
  })
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);
  
  return (
    <motion.div ref={ref} animate={controls} initial="hidden" variants={squareVariants}>

    <Flex 
     gap={6} cursor={'context-menu'} className='square' position={'relative'}  bottom={2} right={1} width={'96vw'}  direction={'column'}   justifyContent={'center'} height={'96vh'} backdropFilter={'blur(4px)'} bgGradient={'linear(to-bl,rgb(30 41 59),rgb(41 37 36))'} rounded={'4rem'}>
  <Flex 
   direction={'column'} justifyContent={'center'} alignItems={'center'}>
   <Image objectFit={'cover'} src={me} w={64} height={64} rounded={'4rem'}/>
    <Text fontSize={'5xl'} fontStyle={'light'} color={'white'} fontWeight={'bold'}>LOVEBIN JOSEPH ROBIN</Text>
    <Text brightness={'40%'} contrast={'0%'} color={'#60a5fa'} letterSpacing={'0.025em'} fontSize={'3xl'} textAlign={'match-parent'}>
       <Typewriter options={{
        strings:['Tech Enthusiast','Fullstack Developer'],
        autoStart:true,
        loop:true
       }}/>
    </Text>
    </Flex>
    </Flex>
    </motion.div>

  )
}

export default Landing