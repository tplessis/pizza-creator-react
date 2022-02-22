import './pizza-icon.scss';
import clsx from 'clsx';

import { PizzaSize } from '@/types/pizza';

export type PizzaIconProps = {
  size?: PizzaSize;
  active?: boolean;
  darkMode?: boolean;
};

export const PizzaIcon = ({ size, active = false, darkMode = false }: PizzaIconProps = {}) => {
  return (
    <div
      className={clsx(
        'rounded-full m-1 inline-block',
        !darkMode ? 'border-2' : '',
        active ? 'border-green-500' : 'border-white'
      )}
    >
      <div
        className={clsx(
          'pizza m-1 relative rounded-full bg-yellow-400 border-2 border-red-900',
          size?.label,
          { 'opacity-70': darkMode, 'opacity-40': !darkMode }
        )}
      >
        <div
          className={clsx('line absolute bg-white transform origin-center', {
            'rotate-45': size?.label === 'large',
            'rotate-30': size?.label === 'medium',
            hidden: size?.label === 'small',
          })}
        />
        <div
          className={clsx('line absolute bg-white transform origin-center rotate-0', {
            '-rotate-45': size?.label === 'large',
            '-rotate-30': size?.label === 'medium',
            hidden: size?.label === 'small',
          })}
        />
        <div
          className={clsx('line absolute bg-white transform origin-center rotate-0', {
            hidden: size?.label === 'medium',
          })}
        />
        <div className="line absolute bg-white transform origin-center rotate-90" />
      </div>
    </div>
  );
};
