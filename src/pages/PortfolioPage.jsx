
import React from 'react'
import PortfolioItemCard from '../components/ui/PortfolioItemCard';
import { portfolioItems } from '../utils/data';




const PortfolioPage = ({ setSelectedItem }) => {

return (
    <>
    {portfolioItems.map((item)=> (
        <PortfolioItemCard 
            key={item.id}
            item={item}
            setSelectedItem={setSelectedItem}
            />
    ))}
    </>
    );
}

export default PortfolioPage;