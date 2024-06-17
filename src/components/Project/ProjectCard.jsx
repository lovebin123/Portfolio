import React from 'react';
import { Flex, Image, Text, Modal, ModalBody, ModalContent, ModalCloseButton, ModalOverlay, useDisclosure } from '@chakra-ui/react';
const ProjectCard = ({ imgSrc, projectTitle, projectSubtitle, ModalContentComponent }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Flex
        mx={3}
        gridColumn={2}
        gap={2}
        justifyContent={'center'}
        _hover={{
          '.topone':{borderColor: '#60a5fa'},
          '.hoverClass': { color: 'blue.200' },
          '.bgChanger': { bgColor: ' rgb(56,189,248,0.4)', opacity:20},
        }}
        onClick={onOpen}
      >
        <Flex
        className='topone'
          rounded={'4rem'}
          overflow={'hidden'}
          borderWidth={2}
          cursor={'pointer'}
          position={'relative'}
          maxW={'32rem'}
          w={'full'}
        >
          <Image
            filter={'brightness(45%)'}
            rounded={'4em'}
            transform={'scaleY(0.87) scaleX(1.02'}
            w={'full'}
            h={'full'}
  
            src={imgSrc}
          />
          <Flex position={'absolute'} bottom={4} left={5} >
            <Flex
               px={4} py={2}
              position={'relative'}
              direction={'column'}
              className='bgChanger'
              w={'4/5'}
              rounded={'2em'}
              bgColor={'rgb(41,37,36,0.3)'}
            >
              <Text
                position={'relative'}
                color={'gray.400'}
                filter={'brightness(120%)'}
              >
                {projectSubtitle}
              </Text>
              <Text className='hoverClass' lineHeight={'1.5rem'} fontSize={'2xl'} color={'white'}>
                {projectTitle}
              </Text>
            </Flex>
          </Flex>
        </Flex>
      </Flex>

      <Modal isCentered isOpen={isOpen} size={'5xl'}  onClose={onClose} >
        <ModalOverlay />
        <ModalContent rounded={'4em'}  w={'full'} minH={'100vh'}  bgGradient={'linear(to-bl, rgb(15 23 42), rgb(28 25 23))'}>
          <ModalCloseButton />
          <ModalBody  >
            <ModalContentComponent />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ProjectCard;
