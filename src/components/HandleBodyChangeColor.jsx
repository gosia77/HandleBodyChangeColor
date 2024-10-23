import React, { useState } from 'react';

function HandleBodyChangeColor() {
    
    
    const getRandomColor = () => {
        const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`
        return randomColor;
    };

    const changeBodyColor = () => {
        const newColor = getRandomColor();
        document.body.style.backgroundColor = newColor;
    };

    return(
        <div>
            <button 
            onClick={changeBodyColor}
            style={{ padding: '10px 20px', fontSize: '16px', color: 'black', border: 'none', borderRadius: '10px', marginTop: '60px', marginLeft: '60px' }}>
                Click to change color
                </button>
        </div>
    )




}

export default HandleBodyChangeColor;