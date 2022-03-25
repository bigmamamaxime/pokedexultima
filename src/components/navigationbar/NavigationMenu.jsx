import { useState } from "react";

export const NavMenu = () => {
    
    const options = [
        { label: 'AbiDex', value: 'abiDex' },
        { label: 'EggDex', value: 'eggDex' },
        { label: 'MoveDex', value: 'moveDex' },
    ];

    const [value, setValue] = useState('abiDex');

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    return (  
        <div>
            <label>Where do you want to go?
                <select value={value} onChange={handleChange}>
                    {options.map((option) => (
                        <option value={option.value}>{option.label}</option>
                    ))}
                </select>
            </label>
        </div>
    );
};

