import React from 'react';
import { useTheme } from './ThemeContext';
import { FaSun, FaMoon } from 'react-icons/fa';

const ThemeToggle = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <button onClick={toggleTheme} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
            {theme === 'light' ?<FaSun />    : <FaMoon /> }
        </button>
    );
};

export default ThemeToggle;
