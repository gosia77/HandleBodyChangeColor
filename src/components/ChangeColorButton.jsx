import React, { useState } from 'react';
import { getRandomColor } from './getRandomColor';

function ChangeColorButton() {  
    const [elementColor, setElementColor] = useState('#FFF')

    const changeBodyColor = () => {
        setElementColor(getRandomColor())
    };

    return(
        <div className='wrapper' style={{ backgroundColor: elementColor}} data-testid='wrapper'> 
            <button 
            data-testid='change-color-button'
            onClick={changeBodyColor}
            style={{ padding: '10px 20px', fontSize: '16px', color: 'black', border: 'none', borderRadius: '10px', marginTop: '60px', marginLeft: '60px' }}>
                Click to change color
                </button>
        </div>
    )
}

export default ChangeColorButton;