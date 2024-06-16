import React from 'react';
import { Flex, Text } from '@chakra-ui/react';
import ProjectCard from './ProjectCard.jsx';
import MECSphere from './MecSphere.jsx'
import FaceFindr from './FaceFindr.jsx';
import mecsphere from '../../assets/mecsphere.jpg';
import facefindr from '../../assets/facefindr.jpg';
import './Project.css';

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
  ];

  return (
    <Flex direction={'column'} px={20}  mb={5} w={'full'} h={'full'}>
      <Text color={'white'} fontWeight={'bold'} fontSize={'5xl'}>
        Projects
      </Text>
      <Flex gap={3} mt={6}>
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            imgSrc={project.imgSrc}
            projectTitle={project.projectTitle}
            projectSubtitle={project.projectSubtitle}
            ModalContentComponent={project.ModalContentComponent}
          />
        ))}
      </Flex>
    </Flex>
  );
}

export default Project;
