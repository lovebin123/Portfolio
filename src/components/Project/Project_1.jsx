import React from 'react'
import { Flex,Modal,ModalBody,ModalContent,ModalCloseButton,ModalOverlay,Text, Image } from '@chakra-ui/react'
import mecsphere from '../../assets/mecsphere.jpg'
import './Project.css'
function Project() {
  return (
  <Flex direction={'column'} px={20}  gap={10} mb={5} w={'full'} h={'full'}>
  <Text color={'white'} fontWeight={'bold'} fontSize={'5xl'}>
    Projects
  </Text>
    <Flex mx={3} gridColumn={2} gap={2} justifyContent={'center'} >
      <Flex  _hover={{borderColor:'#60a5fa', '.hoverClass':{color:'blue.500'},'.bgChanger':{bgColor:'rgb(207 250 254)'}}}  rounded={'4rem'} overflow={'hidden'}   borderWidth={2}  cursor={'pointer'} position={'relative'} maxW={'32rem'} w={'full'}>
      <Image filter={"brightness(30%)"} objectFit={'contain'} rounded={'4em'}  transform={'scaleX(1.08) scaleY(1.04)'} w={'full'} h={'full'} src={mecsphere}/>
      <Flex  position={'absolute'} bottom={4} left={5}>
        <Flex  p={2} position={'relative'} direction={'column'} className='bgChanger' w={'4/5'}  _hover={{bgColor:'blue.200'}}  rounded={'2em'}>
          <Text color={'gray.500'} filter={'brightness(120%)'}  >Mini Project</Text>
          <Text className='hoverClass' fontWeight={'semibold'} fontSize={'2xl'} color={'white'}>MECSphere</Text>
        </Flex>
      </Flex>
      </Flex>
    </Flex>
  </Flex>
  )
}

export default Project