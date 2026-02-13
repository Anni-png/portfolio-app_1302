
import React from 'react';
import { Box, Image, Text, Stack, Tag, Flex } from '@chakra-ui/react'


const PortfolioItemCard = ({ item, onClick }) => {
    return (
    <Box
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        p={4}
        cursor="pointer"
        onClick={onClick}
        _hover={{ bg: "gray.400" }}
    >
        <Stack spacing={3}>
            <Image 
            src={item.imageUrl}
            alt={item.title}
            borderRadius="lg"
            />

            <Text fontSize="xl" fontWeight="bold">
                {item.title}
            </Text>

            <Text >
                {item.summary}
            </Text>

            <Flex wrap="wrap" gap={2}>
            {(item.skill || []).map((skill, index) => (
                <Tag key={index} colorScheme="blue">
                    {skill}
                </Tag>
            ))}
            </Flex> 
        </Stack>
    </Box>
    );
}

export default PortfolioItemCard;