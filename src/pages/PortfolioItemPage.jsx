import React from 'react';
import { Box, Image, Text, Stack, Tag, Flex, Button, Heading } from '@chakra-ui/react'

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


        <Stack
        spacing={5}
        mt={5}
        >


            <Heading as="h1"
            fontWeight="bold"
            fontSize="7xl">{item.title}</Heading>
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
        


            <Button
            _hover={{transform: 'scale(1.05)', boxShadow: '2xl'}}
            onClick={()=> setSelectedItem(null)}
            marginTop={3} >
            Back to projects
            </Button>

        </Stack>



        </Box>      
    );
};

export default PortfolioItemPage;