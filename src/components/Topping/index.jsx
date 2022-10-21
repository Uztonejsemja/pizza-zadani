import React, { useState } from "react";
import Check from "../Check";
import './style.css';

const Topping = ({ topping }) => {
  const [checked, setChecked] = useState(false);

  const handleChecked = () => {
    setChecked(!checked);
  };
  
  return (
    <div className="topping">
      <Check 
      checked={checked}
      onChange={handleChecked}/>
      <span className="topping__content">
        {topping.name}: {topping.price} €
      </span>
    </div>
  );
};

export default Topping;