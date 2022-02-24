import clsx from 'clsx';
import { useEffect } from 'react';
import { useFormContext } from 'react-hook-form';

import { PizzaTopping } from '@/types/pizza';

import { usePizzaToppings } from '../api/getPizzaToppings';

export const Toppings = () => {
  const {
    register,
    setValue,
    getValues,
    watch,
    formState: { errors },
  } = useFormContext();
  const toppingsQuery = usePizzaToppings();
  const watchToppings = watch('toppings', []);
  const toppings = getValues('toppings') || [];

  useEffect(() => {
    register('toppings', { required: true });
  }, [register]);

  const onChangeTopping = (topping: PizzaTopping, selectedToppings: PizzaTopping[]) => {
    if (selectedToppings.find((t) => t.id === topping.id) !== undefined) {
      setValue(
        'toppings',
        selectedToppings.filter((t: PizzaTopping) => topping.label !== t.label)
      );
    } else {
      setValue('toppings', [...selectedToppings, topping]);
    }
  };

  return (
    <>
      <div className="flex items-center pb-4 2xl:pt-10 lg:pt-6 pt-4">
        <h2 className="text-gray-400 text-sm font-medium uppercase">Add toppings :</h2>
        <span className="text-red-500 pl-1 pt-1">*</span>
        {errors.toppings?.type === 'required' && (
          <span className="text-red-500 text-xs font-normal pt-1 pl-2">
            At least 3 toppings are required.
          </span>
        )}
      </div>
      <div className="grid md:grid-cols-3 grid-cols-2 gap-2 md:gap-4 2xl:gap-6">
        {toppingsQuery?.data?.map((topping, index: number) => (
          <div className="group flex" key={index}>
            <label
              className={clsx(
                'flex items-center border-2 cursor-pointer rounded overflow-hidden bg-gray-50 text-gray-800 text-sm w-full mb-4',
                watchToppings?.find((t: PizzaTopping) => t.id === topping.id)
                  ? 'border-green-500'
                  : 'border-gray-200'
              )}
            >
              <input
                type="checkbox"
                className="hidden w-0 h-0"
                value={topping.label}
                onChange={() => onChangeTopping(topping, toppings)}
              />
              <span className="flex justify-center bg-gray-200 bg-cover h-full w-9 2xl:w-14 {{ topping.label }}">
                <img
                  src={require(`@/assets/images/${topping.label}.svg`).default}
                  className="w-6 2xl:w-9"
                  alt=""
                />
              </span>
              <span
                className={clsx('px-2 py-3 2xl:text-base capitalize', {
                  'text-green-500 font-semibold':
                    watchToppings?.find((t: PizzaTopping) => t.id === topping.id) !== undefined,
                })}
              >
                {topping.label}
              </span>
            </label>
          </div>
        ))}
      </div>
    </>
  );
};
