// SkillItem.jsx
import React from 'react';
import { Flex, Image, Text } from '@chakra-ui/react';

const SkillItem = ({ imageSrc, title, description }) => {
    return (
        <Flex gap={6}>
            <Image src={imageSrc} h={20} />
            <Flex direction={'column'} gap={5}>
                <Text color={'#60a5fa'} fontSize={'2xl'} lineHeight={'0.025em'} fontWeight={'semibold'}>
                    {title}
                </Text>
                <Text color={'gray.500'} display={'inline-block'} inlineSize={180} fontSize={'md'}>
                    {description}
                </Text>
            </Flex>
        </Flex>
    );
};

export default SkillItem;
