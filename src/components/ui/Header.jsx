import React from "react";
import { Box, Flex, Container, Heading, Spacer, HStack, Button } from '@chakra-ui/react'
import { ColorModeToggle } from "./ColorModeToggle";

const Header = () => {
    return (
        <Box
        as="header"
        bg="blue.500"
        color="white"
        position="sticky"
        top={0}
        zIndex="sticky"
        px={8}
        py={4}
        boxShadow="lg"
        >
        <Container maxW="7xl">
        <Flex h={16} align="center">
            <Heading size="md">my portfolio</Heading>
            <Spacer />
            <HStack spacing={6}>
            <Button variant="ghost" color="white" _hover={{ color: "black"}} _dark={{_hover: { color: "white"} }}>projects</Button>
            <Button variant="ghost" color="white" _hover={{ color: "black"}} _dark={{_hover: { color: "white"} }}>about</Button>
            <Button variant="ghost" color="white" _hover={{ color: "black"}} _dark={{_hover: { color: "white"} }}>contact</Button>
        <ColorModeToggle />
            </HStack>
        </Flex>
        </Container>
        </Box>
    );
};

export default Header;