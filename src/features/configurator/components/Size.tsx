import clsx from 'clsx';
import { useFormContext } from 'react-hook-form';

import { PizzaIcon } from '@/components/Elements/PizzaIcon/PizzaIcon';

import { usePizzaSizes } from '../api/getPizzaSizes';

export const Size = () => {
  const {
    register,
    watch,
    formState: { errors },
  } = useFormContext();
  const sizesQuery = usePizzaSizes();
  const watchSize = watch('size', false);

  return (
    <>
      <div className="flex items-center pb-4">
        <h2 className="text-gray-400 text-sm font-medium uppercase">Select pizza size :</h2>
        <span className="text-red-500 pl-1 pt-1">*</span>
        {errors.size?.type === 'required' && (
          <span className="text-red-500 text-xs font-normal pt-1 pl-2">Field is required</span>
        )}
      </div>
      <div className="flex flex-wrap md:flex-nowrap md:justify-between md:space-x-6">
        {sizesQuery?.data?.map((size, index: number) => (
          <label
            className="group flex md:flex-row flex-col flex-grow items-center cursor-pointer"
            key={index}
          >
            <input
              type="radio"
              className="hidden w-0 h-0"
              value={size.label}
              {...register('size', { required: true })}
            />
            <PizzaIcon size={size} active={watchSize === size.label} />
            <span
              className={clsx(
                'block 2xl:text-base text-sm ml-2',
                watchSize === size.label
                  ? 'text-green-500 font-semibold'
                  : 'font-normal text-gray-600'
              )}
            >
              <span className="block md:inline-block capitalize">{size.label}</span>
              <span> ({size.value}&quot;)</span>
            </span>
          </label>
        ))}
      </div>
    </>
  );
};
