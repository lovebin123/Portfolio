import React from 'react'
import { Flex, Image, Text, Link } from '@chakra-ui/react'
import ibm from '../../assets/ibm.png'
import nptel from '../../assets/nptel.png'
import programming from '../../assets/programming.png'
import frontend from '../../assets/frontend.png'
import server from '../../assets/server.png'
import techno from '../../assets/technology.png'
function Skills() {
    return (
        <Flex direction={'column'} px={20} w={'full'} h={'full'} gap={6} mb={5}  >
            <Flex gap={4} direction={'column'} justifyContent={'center'} alignItems={'center'}>
                <Text display={'block'} color={'white'} fontWeight={'bold'} fontSize={'5xl'}>
                    Skills 
                </Text>
                <Flex w={'30rem'} alignItems={'center'} justifyContent={'center'}>
                    <Text letterSpacing={'0.050em'} textAlign={'center'} color={'#60a5fa'} fontSize={'xl'} >
                        I used all these technologies to make my websites more incredible. Some of these tools significantly improved the aesthetics of my websites by adding vibrant colors and appealing designs. Others were essential in achieving the functionalities I envisioned, ensuring a seamless and intuitive user experience. By leveraging these technologies, I was able to create responsive, interactive, and visually striking websites.
                    </Text>
                </Flex>
            </Flex>
            <Flex gap={10} mt={10} px={4} justifyContent={'center'} alignItems={'center'}>
            <Flex gap={10} alignItems={'center'} justifyContent={'center'} flexWrap={'wrap'}> 

                <Flex gap={28} direction={'column'} rounded={'4em'} p={8} justifyContent={'center'} overflow={'hidden'} bgGradient={'linear(to-bl,#0f172a,#1c1917)'}>
                    <Link href='https://drive.google.com/file/d/1FrJWGwdgK2CJ7dL6I0o7JuXV6w7aaz73/view' isExternal>
                        <Flex gap={6} >
                            <Image src={ibm} h={20}></Image>
                            <Flex direction={'column'} gap={5}  >
                                <Text color={'#60a5fa'} fontSize={'2xl'} lineHeight={'0.025em'} fontWeight={'semibold'}>IBM</Text>
                                <Text color={'gray.500'} display={'inline-block'} inlineSize={180} fontSize={'md'}>Python for Data Science, AI & Development</Text>
                            </Flex>
                        </Flex>
                    </Link>
                    <Link href='https://drive.google.com/file/d/1jcOPe-_YdvJal2S3-XUVdjee7CNsHmix/view' isExternal>
                        <Flex gap={6} >
                            <Image src={nptel} h={20}></Image>
                            <Flex direction={'column'} gap={5}  >
                                <Text color={'#60a5fa'} fontSize={'2xl'} lineHeight={'0.025em'} fontWeight={'semibold'}>IIT MADRAS</Text>
                                <Text color={'gray.500'} display={'inline-block'} inlineSize={130} fontSize={'md'} textAlign={'center'}>Joy of Computing Using Python</Text>
                            </Flex>
                        </Flex>
                    </Link>
                </Flex>



                <Flex gap={5}  alignItems={'center'}  direction={'column'} rounded={'4em'} p={7} overflow={'hidden'} bgGradient={'linear(to-bl,#0f172a,#1c1917)'}>
                <Flex cursor={'context-menu'} gap={4}>
                    <Image src={programming} h={10}></Image>
                    <Flex direction={'column'} gap={5} alignItems={'flex-start'}>
                        <Text  color={'gray.500'} fontSize={'xl'}>Programming Languages</Text>
                        <Flex direction={'column'} gap={6}>
                        <Flex gap={4}>
                        <Flex className='foc' bgColor={'rgb(19,78,74,0.4)'} px={4} py={2} rounded={'3xl'}>
                            <Text color={'rgb(45,212,191)'} fontWeight={'bold'} mx={2}>C++</Text>
                        </Flex>
                        <Flex className='foc' bgColor={'rgb(19,78,74,0.4)'} px={4} py={2} rounded={'3xl'}>
                            <Text color={'rgb(45,212,191)'} fontWeight={'bold'} mx={2}>Python</Text>
                        </Flex>
                        </Flex>

                        <Flex alignItems={'center'}  gap={4}>
                        <Flex className='foc' bgColor={'rgb(19,78,74,0.4)'} px={4} py={2} rounded={'3xl'}>
                            <Text color={'rgb(45,212,191)'} fontWeight={'bold'} mx={2}>Java</Text>
                        </Flex>
                        <Flex className='foc' bgColor={'rgb(19,78,74,0.4)'} px={4} py={2} rounded={'3xl'}>
                            <Text color={'rgb(45,212,191)'} fontWeight={'bold'} mx={2}>C</Text>
                        </Flex>
                        </Flex>
                        </Flex>
                    </Flex>
                </Flex>
                </Flex>
                <Flex  gap={5}  justifyContent={'center'} direction={'column'} rounded={'4em'} p={7} overflow={'hidden'} bgGradient={'linear(to-bl,#0f172a,#1c1917)'}>
                <Flex cursor={'context-menu'} gap={4}>
                    <Image src={frontend} h={10}></Image>
                    <Flex direction={'column'} gap={5} alignItems={'flex-start'}>
                        <Text   color={'gray.500'} fontSize={'xl'}>Client Side</Text>
                        <Flex justifyContent={'center'} direction={'column'}  gap={6}>
                        <Flex gap={4}>
                        <Flex className='foc' bgColor={'rgb(19,78,74,0.4)'} px={4} py={2} rounded={'3xl'}>
                            <Text color={'rgb(45,212,191)'} fontWeight={'bold'} mx={2}>HTML</Text>
                        </Flex>
                        <Flex className='foc' bgColor={'rgb(19,78,74,0.4)'} px={4} py={2} rounded={'3xl'}>
                            <Text color={'rgb(45,212,191)'} fontWeight={'bold'} mx={2}>CSS</Text>
                        </Flex>
                        
                        </Flex>

                        <Flex  alignItems={'center'}  gap={4}>
                        
                        <Flex className='foc' bgColor={'rgb(19,78,74,0.4)'} px={4} py={2} rounded={'3xl'}>
                            <Text color={'rgb(45,212,191)'} fontWeight={'bold'} mx={2}>Chakra UI</Text>
                        </Flex>
                        <Flex className='foc' bgColor={'rgb(19,78,74,0.4)'} px={4} py={2} rounded={'3xl'}>
                            <Text color={'rgb(45,212,191)'} fontWeight={'bold'} mx={2}>ReactJS</Text>
                        </Flex>
                        </Flex>
                        <Flex alignItems={'center'} cursor={'context-menu'}  gap={4}>
                        <Flex className='foc' bgColor={'rgb(19,78,74,0.4)'} px={4} py={2} rounded={'3xl'}>
                            <Text color={'rgb(45,212,191)'} fontWeight={'bold'} mx={2}>Tailwind</Text>
                        </Flex>
                        <Flex className='foc' bgColor={'rgb(19,78,74,0.4)'} px={4} py={2} rounded={'3xl'}>
                            <Text color={'rgb(45,212,191)'} fontWeight={'bold'} mx={2}>Material UI</Text>
                        </Flex>
                        
                        </Flex>
                        </Flex>
                    </Flex>
                </Flex>
                </Flex>
                <Flex  gap={5}   direction={'column'} rounded={'4em'} p={7} overflow={'hidden'} bgGradient={'linear(to-bl,#0f172a,#1c1917)'}>
                <Flex cursor={'context-menu'} gap={4}>
                    <Image src={server} h={10}></Image>
                    <Flex direction={'column'} gap={5} alignItems={'flex-start'}>
                        <Text   color={'gray.500'} fontSize={'xl'}>Server Side</Text>
                        <Flex className='foc' justifyContent={'center'} direction={'column'}  gap={6}>
                        <Flex gap={4}>
                        <Flex className='foc' bgColor={'rgb(19,78,74,0.4)'} px={4} py={2} rounded={'3xl'}>
                            <Text color={'rgb(45,212,191)'} fontWeight={'bold'} mx={2}>NodeJS</Text>
                        </Flex>
                        <Flex className='foc' bgColor={'rgb(19,78,74,0.4)'} px={4} py={2} rounded={'3xl'}>
                            <Text color={'rgb(45,212,191)'} fontWeight={'bold'} mx={2}>Redis</Text>
                        </Flex>
                        
                        </Flex>

                        <Flex  alignItems={'center'}  gap={4}>
                        
                        <Flex className='foc' bgColor={'rgb(19,78,74,0.4)'} px={4} py={2} rounded={'3xl'}>
                            <Text color={'rgb(45,212,191)'} fontWeight={'bold'} mx={2}>Supabase</Text>
                        </Flex>
                        </Flex>
                        </Flex>
                    </Flex>
                </Flex>
                </Flex>
                <Flex  gap={5}   direction={'column'} rounded={'4em'} p={7} overflow={'hidden'} bgGradient={'linear(to-bl,#0f172a,#1c1917)'}>
                <Flex cursor={'context-menu'} gap={4}>
                    <Image src={techno} h={10}></Image>
                    <Flex direction={'column'} gap={5} alignItems={'flex-start'}>
                        <Text   color={'gray.500'} fontSize={'xl'}>Other Tools</Text>
                        <Flex className='foc' justifyContent={'center'} direction={'column'}  gap={6}>
                        <Flex gap={4}>
                        <Flex className='foc' bgColor={'rgb(19,78,74,0.4)'} px={4} py={2} rounded={'3xl'}>
                            <Text color={'rgb(45,212,191)'} fontWeight={'bold'} mx={2}>Linux</Text>
                        </Flex>
                        <Flex className='foc' bgColor={'rgb(19,78,74,0.4)'} px={4} py={2} rounded={'3xl'}>
                            <Text color={'rgb(45,212,191)'} fontWeight={'bold'} mx={2}>Git</Text>
                        </Flex>
                        
                        </Flex>

                        <Flex  alignItems={'center'}  gap={4}>
                        
                        <Flex className='foc' bgColor={'rgb(19,78,74,0.4)'} px={4} py={2} rounded={'3xl'}>
                            <Text color={'rgb(45,212,191)'} fontWeight={'bold'} mx={2}>Selenium</Text>
                        </Flex>
                        <Flex className='foc' bgColor={'rgb(19,78,74,0.4)'} px={4} py={2} rounded={'3xl'}>
                            <Text color={'rgb(45,212,191)'} fontWeight={'bold'} mx={2}>Docker</Text>
                        </Flex>
                        </Flex>
                        </Flex>
                    </Flex>
                </Flex>
                </Flex>
            
            </Flex>
            
          
                </Flex>
                
        </Flex>
    )
}

export default Skills