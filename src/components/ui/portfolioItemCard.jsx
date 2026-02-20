
import React from 'react';
import { Box, Flex, Tag, Image, Stack, Text, Heading } from '@chakra-ui/react';

const PortfolioItemCard = ({ item, setSelectedItem }) => {
    return (
    <Box 
        border="1px solid white" 
        borderRadius="2xl"
        overflow="hidden"
        cursor="pointer"
        p={7}
        onClick={()=> setSelectedItem(item)}
        _hover={{ transform: 'scale(0.95)', boxShadow: 'xl'}}
        transition="transform 0.3s ease-in-out"
        >
        
    <Image 
        src={item.imageUrl}
        alt={item.title}
        borderRadius="2xl"
        objectFit="cover"
        w="100%"
        h="350px"
    />

<Stack 
    spacing={5}
    mt={5}>

        <Heading
            fontWeight="bold"
            fontSize="6xl"
            lineHeight="1"
                >{item.title}
        </Heading>

        <Text
            fontSize="sm"
            color="gray.600"
            mb={2}>
                {item.summary}
        </Text>

        <Flex wrap="wrap" gap={2}>
        {Array.isArray(item.skills) && item.skills.map((skill, index) => (
        <Tag.Root colorScheme="purple" key={index} size="sm">
            <Tag.Label>{skill}</Tag.Label>
            </Tag.Root>
        ))}
        </Flex>
    </Stack>
</Box>
);
};

export default PortfolioItemCard;

