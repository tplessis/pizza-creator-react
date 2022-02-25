import clsx from 'clsx';
import { createRef, useState } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import { Pizza, PizzaTopping } from '@/types/pizza';

import './viewer.scss';
import { CartIndicator } from '../components/CartIndicator';

type ViewerProps = {
  toppings: PizzaTopping[];
  pizzas: Pizza[];
};

export const Viewer = ({ toppings, pizzas }: ViewerProps) => {
  const [isActive, setIsActive] = useState(false);

  setTimeout(() => {
    setIsActive(true);
  }, 300);

  return (
    <div className="relative md:h-full h-96">
      <div className="table-side" />
      <div className="table" />
      <div className={clsx('pizza', isActive && 'active')}>
        <div className="board" />
        <div className="base" />
        {toppings?.length > 0 && (
          <TransitionGroup className="toppings">
            {toppings?.map((topping, index) => {
              const itemRef = createRef<HTMLInputElement>();
              return (
                <CSSTransition
                  nodeRef={itemRef}
                  key={topping.id}
                  timeout={500}
                  appear={true}
                  classNames="item"
                >
                  <div ref={itemRef} style={{ zIndex: index }}>
                    <div className={clsx('topping', topping.label)} />
                    <div className={clsx('topping', topping.label)} />
                    <div className={clsx('topping', topping.label)} />
                    <div className={clsx('topping', topping.label)} />
                    <div className={clsx('topping', topping.label)} />
                  </div>
                </CSSTransition>
              );
            })}
          </TransitionGroup>
        )}
      </div>
      <div className="absolute bottom-4 md:left-6 left-8">
        <CartIndicator cartItemsCount={pizzas?.length ?? 0} />
      </div>
    </div>
  );
};
