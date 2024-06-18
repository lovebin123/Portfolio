import React from 'react';
import { Flex, Text } from '@chakra-ui/react';
import ProjectCard from './ProjectCard.jsx';
import MECSphere from './MecSphere.jsx';
import FaceFindr from './FaceFindr.jsx';
import Genesis from './Genesis.jsx';
import Airbnb from './Airbnb.jsx'
import mecsphere from '../../assets/mecsphere.jpg';
import facefindr from '../../assets/facefindr.jpg';
import genesis from '../../assets/genesis.jpg';
import airbnb from '../../assets/airbnb.jpg'
import './Project.css'
function Project() {
  const projects = [
    {
      imgSrc: mecsphere,
      projectTitle: 'MECSphere',
      projectSubtitle: 'Mini Project',
      ModalContentComponent: MECSphere,
    },
    {
      imgSrc: facefindr,
      projectTitle: 'FaceFindr',
      projectSubtitle: 'Personal Project',
      ModalContentComponent: FaceFindr,
    },
    {
      imgSrc: genesis,
      projectTitle: 'Genesis',
      projectSubtitle: 'DBMS Project',
      ModalContentComponent: Genesis,
    },
    {
      imgSrc: airbnb,
      projectTitle: 'Airbnb clone',
      projectSubtitle: 'Personal Project',
      ModalContentComponent:Airbnb,
    },
  ];

  return (
    <Flex direction={'column'} px={20} mb={5} w={'full'} h={'full'}>
      <Text color={'white'} fontWeight={'bold'} fontSize={'5xl'}>
        Projects
      </Text>
      <Flex className='containers' flexWrap={'wrap'}  mt={6}>
        {projects.map((project, index) => (
          <Flex  key={index} position={'relative'} flex={'0 0 33.3333%'} mb={10}   >
          
            <ProjectCard
              imgSrc={project.imgSrc}
              projectTitle={project.projectTitle}
              projectSubtitle={project.projectSubtitle}
              ModalContentComponent={project.ModalContentComponent}
            />
          </Flex>
        ))}
      </Flex>
    </Flex>
  );
}

export default Project;
