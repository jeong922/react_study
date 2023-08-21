import React from 'react';
import { useDarkMode } from '../context/DarkModeContext';
import { BsFillMoonFill, BsFillSunFill } from 'react-icons/bs';

export default function ThemeButton() {
  const { darkMode, toggleDarkMode } = useDarkMode();
  return (
    <button
      onClick={toggleDarkMode}
      className='flex items-center justify-center ml-4 text-xl text-yellow-500 rounded-full '
    >
      {darkMode ? <BsFillMoonFill /> : <BsFillSunFill />}
    </button>
  );
}
