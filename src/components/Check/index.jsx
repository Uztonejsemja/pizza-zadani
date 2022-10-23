import React from 'react';
import { usePrefs } from '../../prefs_context';
import './style.css';

const Check = ({ checked, onChange, veganTopping }) => {
  const handleClick = () => {
    onChange(!checked);
  };

  const { veganOnly } = usePrefs();

  return (
    <button
      className={
        veganOnly && !veganTopping ? 'check check--disabled ' : 'check'
      }
      onClick={handleClick}
      disabled={veganOnly && !veganTopping}
    >
      {checked ? '✓' : ''}
    </button>
  );
};

export default Check;
