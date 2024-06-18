// Skills.jsx
import React from 'react';
import { Flex, Text, Link } from '@chakra-ui/react';
import ibm from '../../assets/ibm.png';
import nptel from '../../assets/nptel.png';
import programming from '../../assets/programming.png';
import frontend from '../../assets/frontend.png';
import server from '../../assets/server.png';
import techno from '../../assets/technology.png';
import SkillItem from './SkillItem';
import SkillCategory from './SkillCategory';

function Skills() {
    return (
        <Flex direction={'column'} px={20} w={'full'} h={'full'} gap={6} mb={5}>
            <Flex gap={4} direction={'column'} justifyContent={'center'} alignItems={'center'}>
                <Text display={'block'} color={'white'} fontWeight={'bold'} fontSize={'5xl'}>
                    Skills 
                </Text>
                <Flex w={'30rem'} alignItems={'center'} justifyContent={'center'}>
                    <Text letterSpacing={'0.050em'} textAlign={'center'} color={'#60a5fa'} fontSize={'xl'}>
                        I used all these technologies to make my websites more incredible. Some of these tools significantly improved the aesthetics of my websites by adding vibrant colors and appealing designs. Others were essential in achieving the functionalities I envisioned, ensuring a seamless and intuitive user experience. By leveraging these technologies, I was able to create responsive, interactive, and visually striking websites.
                    </Text>
                </Flex>
            </Flex>
            <Flex gap={10} mt={10} px={4} justifyContent={'center'} alignItems={'center'} flexWrap={'wrap'}>
                <Flex gap={28} direction={'column'} rounded={'4em'} p={8} justifyContent={'center'} overflow={'hidden'} bgGradient={'linear(to-bl,#0f172a,#1c1917)'}>
                    <Link href='https://drive.google.com/file/d/1FrJWGwdgK2CJ7dL6I0o7JuXV6w7aaz73/view' isExternal>
                        <SkillItem
                            imageSrc={ibm}
                            title="IBM"
                            description="Python for Data Science, AI & Development"
                        />
                    </Link>
                    <Link href='https://drive.google.com/file/d/1jcOPe-_YdvJal2S3-XUVdjee7CNsHmix/view' isExternal>
                        <SkillItem
                            imageSrc={nptel}
                            title="IIT MADRAS"
                            description="Joy of Computing Using Python"
                        />
                    </Link>
                </Flex>

                <SkillCategory
                    icon={programming}
                    title="Programming Languages"
                    skills={['C++', 'Python', 'Java', 'C']}
                />
                <SkillCategory
                    icon={frontend}
                    title="Client Side"
                    skills={['HTML', 'CSS', 'Chakra UI', 'ReactJS', 'Tailwind', 'Material UI']}
                />
                <SkillCategory
                    icon={server}
                    title="Server Side"
                    skills={['NodeJS', 'Redis', 'Supabase']}
                />
                <SkillCategory
                    icon={techno}
                    title="Other Tools"
                    skills={['Linux', 'Git', 'Selenium', 'Docker']}
                />
            </Flex>
        </Flex>
    );
}

export default Skills;
