
import React from 'react'
import { SimpleGrid, Container } from '@chakra-ui/react';
import PortfolioItemCard from '../components/ui/PortfolioItemCard';
import { portfolioItems } from '../utils/data';




const PortfolioPage = ({ setSelectedItem }) => {

return (

    <Container maxW="7xl" py={10}>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3}} spacing={8}>
        {portfolioItems.map((item)=> (
        <PortfolioItemCard 
            key={item.id}
            item={item}
            setSelectedItem={setSelectedItem}
            />
       ))}
        </SimpleGrid>
    </Container>
    )
}

export default PortfolioPage;