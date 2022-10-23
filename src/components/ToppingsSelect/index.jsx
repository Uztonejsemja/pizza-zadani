import React, { useState } from 'react';
import Topping from '../Topping';
import './style.css';

const ToppingsSelect = ({ toppings }) => {
  const [pizza, setPizza] = useState(toppings);
  const [count, setCount] = useState(0);
  const [price, setPrice] = useState(0);

  const handlePizzaChange = (i, newTopping) => {
    const newPizza = [...pizza];
    newPizza[i].checked = newTopping;
    setPizza(newPizza);
    total(newPizza)
  };

  const total = (pizza) => {
    let countUpdate = 0;
    let priceUpdate = 0;
    pizza.forEach(topping => {
      if (topping.checked === true) {
        countUpdate += 1;
        priceUpdate += topping.price;
      }
        setCount(countUpdate);
        setPrice(Math.round(priceUpdate * 100) / 100);
    });
  };


  return (
    <>
      <p>Choose as many toppings as you want</p>
      <p>
        Selected toppings: {count}, total price: {price} Euro{' '}
      </p>

      <div className="toppings">
        {pizza.map((topping, i) => (
          <Topping
            topping={topping}
            key={topping.name}
            onToppingChange={(newTopping) => handlePizzaChange(i, newTopping)}
          />
        ))}
      </div>
    </>
  );
};

export default ToppingsSelect;