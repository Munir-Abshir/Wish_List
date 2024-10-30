import React from 'react'
import { useState } from 'react'
function GiftIdea() {
    const [query, setQuery] = useState('');

    const handleChange = (e) => {
        setQuery(e.target.value);
        // Call the onSearch function if you have one to handle the search logic
        // onSearch(e.target.value);
    };

    return (
        <>
            <div>Gift Ideas</div>
            <div>
                <input 
                    type="text" 
                    placeholder="Search for gift ideas..." 
                    value={query} 
                    onChange={handleChange} 
                    style={{
                        padding: '10px', 
                        width: '100%', 
                        borderRadius: '5px', 
                        border: '1px solid #ccc' 
                    }} 
                />
            </div>
        </>
    );
}

export default GiftIdea