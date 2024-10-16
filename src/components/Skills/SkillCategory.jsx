// SkillCategory.jsx
import React, { useRef } from 'react';
import { Flex, Text, Image, transition } from '@chakra-ui/react';
import { animate, useScroll } from 'framer-motion';
import { motion } from "framer-motion"
const SkillCategory = ({ icon, title, skills }) => {
    const ref=useRef(null)
    const rows = [[], [], []]; // Initialize rows for 3 rows and 2 columns
    const variants = {
        initial: { opacity: 0,y:55},
        animate:()=>({
            opacity: 1,y:0,
            transition:{
                delay:0.5
            }
        }),
      }
    skills.forEach((skill, index) => {
        rows[Math.floor(index / 2)].push(skill);
    });

    return (
        <Flex ref={ref} gap={5} direction={'column'} rounded={'4em'} p={7} overflow={'hidden'} bgGradient={'linear(to-bl,#0f172a,#1c1917)'}>
            <Flex cursor={'context-menu'} gap={4}>
                <Image src={icon} h={10} />
                <Flex direction={'column'} gap={5} alignItems={'flex-start'}>
                <motion.text  initial={{opacity:0,y:-30}} transition={{delay:0.2}} whileInView={{opacity:1,y:0}} viewport={{once:true}}>
                    <Text color={'gray.500'} fontSize={'xl'}>{title}</Text>
                    </motion.text>

                    <Flex direction={'column'} gap={4}>
                        {rows.map((row, rowIndex) => (
                            <Flex key={rowIndex} gap={4}>
                                {row.map((skill, skillIndex) => (
                                    <Flex key={skillIndex} className='foc' bgColor={'rgb(19,78,74,0.4)'} px={4} py={2} rounded={'3xl'}>
                                    <motion.text custom={skillIndex} variants={variants} initial="initial" whileInView="animate" transition={{}} viewport={{once:true}}>
                                        <Text color={'rgb(45,212,191)'} fontWeight={'bold'} mx={2}>
                                            {skill}
                                        </Text>
                                        </motion.text>

                                    </Flex>
                                ))}
                            </Flex>
                        ))}
                    </Flex>
                </Flex>
            </Flex>
        </Flex>
    );
};

export default SkillCategory;
