import React, { useState, useEffect, useContext } from 'react';
import GokuBlue from './../assets/Images/GokuBlue.jpg';
import { HiMoon, HiOutlineMagnifyingGlass, HiSun } from "react-icons/hi2";
import { ThemeContext } from '../Context/ThemeContext';

function Header() {
    const [toggle, setToggle] = useState(true);
    const { theme, setTheme } = useContext(ThemeContext);

    useEffect(() => {
        console.log("Theme", theme);
    }, [theme]);

    const handleThemeToggle = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
        setToggle(!toggle);
    };

    return (
        <div className='flex items-center p-3'>
            <img src={GokuBlue} width={100} height={100} alt="Goku" />
            <div className='flex bg-slate-200 bg-black p-2 
            w-full items-center mx-5 rounded-full'>
                <HiOutlineMagnifyingGlass />
                <input type="text" placeholder='Search Games' 
                className='px-2 bg-transparent outline-none' />
            </div>
            <div>
                {theme === 'light' ? (
                    <HiMoon className='text-2xl h-8 w-8 
                    bg-slate-500 text-black p-1 rounded-full' 
                    onClick={() => {setTheme('dark');localStorage.setItem('theme','dark')}} />
                ) : (
                    <HiSun className='text-2xl h-8 w-8 
                    bg-slate-100 text-black p-1 rounded-full' 
                    onClick={() => {setTheme('light');localStorage.setItem('theme','light')}} />
                )}
            </div>
        </div>
    );
}

export default Header;
