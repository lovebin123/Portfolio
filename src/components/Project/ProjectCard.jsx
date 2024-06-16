import React from 'react';
import { Flex, Image, Text, Modal, ModalBody, ModalContent, ModalCloseButton, ModalOverlay, useDisclosure } from '@chakra-ui/react';
import './Project.css';

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
          '.hoverClass': { color: 'blue.500' },
          '.bgChanger': { bgColor: 'rgb(207 250 254)' },
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
            filter={'brightness(50%)'}
            rounded={'4em'}
            transform={'scaleX(1.08) scaleY(1.04)'}
            w={'full'}
            h={'full'}
            src={imgSrc}
          />
          <Flex position={'absolute'} bottom={4} left={5}>
            <Flex
              p={2}
              position={'relative'}
              direction={'column'}
              className='bgChanger'
              w={'4/5'}
              _hover={{ bgColor: 'blue.200' }}
              rounded={'2em'}
            >
              <Text
                position={'relative'}
                color={'gray.500'}
                filter={'brightness(120%)'}
              >
                {projectSubtitle}
              </Text>
              <Text className='hoverClass' fontSize={'2xl'} color={'white'}>
                {projectTitle}
              </Text>
            </Flex>
          </Flex>
        </Flex>
      </Flex>

      <Modal isOpen={isOpen} size={'6xl'}  onClose={onClose} >
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
