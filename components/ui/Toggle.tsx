import React from 'react';
import { ToggleOnIcon } from '../icons/ToggleOnIcon';
import { ToggleOffIcon } from '../icons/ToggleOffIcon';

interface ToggleProps {
  isToggleOn?: boolean;
}

function Toggle({ isToggleOn = true }: ToggleProps) {
  return (
    <div className="relative h-5 w-10">
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
    </div>
  );
}

export default Toggle;
