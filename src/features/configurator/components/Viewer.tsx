import clsx from 'clsx';
import { createRef, useState } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import { PizzaTopping } from '@/types/pizza';

import './viewer.scss';

type ViewerProps = {
  toppings: PizzaTopping[];
};

export const Viewer = ({ toppings }: ViewerProps) => {
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
      <div className="absolute bottom-4 md:left-6 left-8" />
    </div>
  );
};
