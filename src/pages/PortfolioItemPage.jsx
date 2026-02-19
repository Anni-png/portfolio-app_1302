import React from 'react';
import { Box, Image, Text, Stack, Tag, Flex, Button } from '@chakra-ui/react'

const PortfolioItemPage = ({ item, setSelectedItem }) => {

    if(!item) return null;

    return (
        
        <Box 
        border="1px solid white"
        borderRadius="2xl"
        overflow="hidden"
        p={7} 
        minH="100vh"
        >
            <Button
            _hover={{transform: 'scale(1.05)', boxShadow: '2xl'}}
            onClick={()=> setSelectedItem(null)} >
            Zurück
            </Button>

        <Stack
        spacing={5}
        mt={5}
        >
            <Text
            fontWeight="bold"
            fontSize="4xl">{item.title}</Text>
            <Image
            borderRadius="3xl"
            objectFit="cover"
            mb={2}
            src={item.imageUrl}
            alt={item.title} />
            <Text
            mb={4}
            >{item.description}</Text>
        
            <Flex wrap="wrap" gap={2}>
                {item.skills?.map((skill) => (
                    <Tag.Root key={skill} colorScheme="blue" size="sm">{skill}</Tag.Root>
                ))}
            </Flex>
        </Stack>
        </Box>      
    );
};

export default PortfolioItemPage;