import React, { useState } from 'react';
import PortfolioPage from './pages/PortfolioPage';
import PortfolioItemPage from './pages/PortfolioItemPage';
// import { portfolioItems } from './utils/data';


function App() {
    const [selectedItem, setSelectedItem] = useState(null); // null = liste anzeigen
console.log("Selected item", selectedItem);
    return (
        <>
            {selectedItem ? (
                <PortfolioItemPage 
                    item={selectedItem}
                    setSelectedItem={setSelectedItem} // für zurück button
                />
                 ) : (
                <PortfolioPage 
                    setSelectedItem={setSelectedItem} />
                 )}
        </>
    );
};

export default App;