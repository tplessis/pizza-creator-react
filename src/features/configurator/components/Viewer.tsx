import clsx from 'clsx';
import { useState } from 'react';

import { PizzaTopping } from '@/types/pizza';

import './viewer.scss';

type ViewerProps = {
  toppings: PizzaTopping[];
};

export const Viewer = ({ toppings }: ViewerProps) => {
  const [isActive, setIsActive] = useState(false);

  setTimeout(() => {
    setIsActive(true);
  }, 500);

  return (
    <div className="relative md:h-full h-96">
      <div className="table-side" />
      <div className="table" />
      <div className={clsx('pizza', isActive && 'active')}>
        <div className="board" />
        <div className="base" />
        {toppings?.length > 0 ?? (
          <div className="toppings">
            {toppings?.map((topping, index) => (
              <div key={topping.id} style={{ zIndex: index }}>
                <div className={clsx('topping', topping.label)} />
                <div className={clsx('topping', topping.label)} />
                <div className={clsx('topping', topping.label)} />
                <div className={clsx('topping', topping.label)} />
                <div className={clsx('topping', topping.label)} />
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="absolute bottom-4 md:left-6 left-8" />
    </div>
  );
};
