import React from 'react';
import { ToggleOnIcon } from '../icons/ToggleOnIcon';
import { ToggleOffIcon } from '../icons/ToggleOffIcon';

interface ToggleProps {
  isToggleOn?: boolean;
  handleClick: () => void;
}

function Toggle({ isToggleOn, handleClick }: ToggleProps) {
  return (
    <button onClick={handleClick} className="relative h-7">
      <ToggleOnIcon
        className={`absolute top-0 transition duration-200 ease-out ${
          isToggleOn ? 'opacity-100' : 'opacity-0'
        }`}
        width={44}
        height={24}
      />
      <ToggleOffIcon
        className={`absolute top-0 transition duration-200 ease-out ${
          isToggleOn ? 'opacity-0' : 'opacity-100'
        }`}
        width={44}
        height={24}
      />
    </button>
  );
}

export default Toggle;
