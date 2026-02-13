
import React from 'react'
import { portfolioItems } from '../utils/data';
import PortfolioItemCard from '../components/ui/portfolioItemCard';



const PortfolioPage = ({ setSelectedItem }) => {

return (
    <>
    {portfolioItems.map((item)=> (
        <PortfolioItemCard 
            key={item.id}
            item={item}
            onClick={()=> setSelectedItem(item)}
            />
    ))}
    </>
    );
}

export default PortfolioPage;