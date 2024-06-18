import React, { useEffect, useRef } from 'react';
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
import { motion,useInView,useAnimation} from "framer-motion"
function Project() {
  const projRef=useRef(null)
  const projInView=useInView(projRef,{once:true})
const projectControls=useAnimation()
useEffect(() => {
  if (projInView) {
    projectControls.start('visible');
  }
}, [projInView]);

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
          <Flex ref={projRef} key={index} position={'relative'} flex={'0 0 33.3333%'} mb={10}   >
          <motion.div style={{display:'flex',justifyContent:'center'}} variants={{"hidden":{translateY:200},"visible":{translateY:0}}} transition={{delay:0.4,duration:0.8}} initial="hidden" animate={projectControls} >
            <ProjectCard
              imgSrc={project.imgSrc}
              projectTitle={project.projectTitle}
              projectSubtitle={project.projectSubtitle}
              ModalContentComponent={project.ModalContentComponent}
            />
            </motion.div>
          </Flex>
        ))}
      </Flex>
    </Flex>
  );
}

export default Project;
