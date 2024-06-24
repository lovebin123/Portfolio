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

      <Modal isCentered isOpen={isOpen} size={'5xl'}  w onClose={onClose} >
        <ModalOverlay background={'black'} />
        <ModalContent rounded={'4em'}  w={'full'} minH={'100vh'}  bgGradient={'linear(to-bl, rgb(15 23 42), rgb(28 25 23))'}>
          <ModalCloseButton mr={3} mt={2} > <svg stroke="currentColor" fill="#60a5fa" stroke-width="0" viewBox="0 0 32 32" class="cursor-pointer text-bright" height="30" width="30" xmlns="http://www.w3.org/2000/svg"><path d="M 16 3 C 8.832031 3 3 8.832031 3 16 C 3 23.167969 8.832031 29 16 29 C 23.167969 29 29 23.167969 29 16 C 29 8.832031 23.167969 3 16 3 Z M 16 5 C 22.085938 5 27 9.914063 27 16 C 27 22.085938 22.085938 27 16 27 C 9.914063 27 5 22.085938 5 16 C 5 9.914063 9.914063 5 16 5 Z M 12.21875 10.78125 L 10.78125 12.21875 L 14.5625 16 L 10.78125 19.78125 L 12.21875 21.21875 L 16 17.4375 L 19.78125 21.21875 L 21.21875 19.78125 L 17.4375 16 L 21.21875 12.21875 L 19.78125 10.78125 L 16 14.5625 Z"></path></svg></ModalCloseButton>
          <ModalBody  >
            <ModalContentComponent />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ProjectCard;
