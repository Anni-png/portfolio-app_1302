import React from 'react';
import { Box, Image, Text, Stack, Tag, Flex, Button } from '@chakra-ui/react'

const PortfolioItemPage = ({ item, setSelectedItem }) => {
    return (
        
        <Box p={6}>
            <Button onClick={()=> setSelectedItem(null)} >
            Zurück
            </Button>

        <Stack>
            <Text>{item.title}</Text>
            <Image src={item.imageUrl} />
            <Text>{item.description}</Text>
        
            <Flex wrap="wrap" gap={2}>
                {(item.skill || []).map((skill, index) => (
                <Tag key={index}>{skill}</Tag>
                ))}
            </Flex>
        </Stack>
        </Box>      
    );
};

export default PortfolioItemPage;