import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';

import { Button } from '@/components/Elements';
import { configuratorSlice } from '@/features/configurator/store/configuratorSlice';
import { PizzaSize, PizzaTopping } from '@/types/pizza';

import { Size } from '../components/Size';
import { Toppings } from '../components/Toppings';

type Inputs = {
  size?: PizzaSize;
  toppings?: PizzaTopping[];
};

export const Form = () => {
  const methods = useForm();
  const dispatch = useDispatch();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  const handleToppingsSelection = (toppings: PizzaTopping[]) => {
    dispatch(configuratorSlice.actions.toppingUpdated(toppings));
  };

  return (
    <FormProvider {...methods}>
      <form className="flex flex-col md:h-full p-6" onSubmit={methods.handleSubmit(onSubmit)}>
        <div className="flex flex-col flex-grow justify-between h-full">
          <div className="flex flex-col h-full">
            <h1 className="text-3xl 2xl:text-4xl font-light text-gray-800">Pizza Creator</h1>
            <span className="text-base 2xl:text-lg text-gray-400 font-thin pb-8">
              Compose your pizza by selecting a size and some toppings!
            </span>
            <div>
              <Size />
            </div>
            <div>
              <Toppings onSelectTopping={handleToppingsSelection} />
            </div>
          </div>
          <Button size="lg" type="submit">
            Add to cart
          </Button>
        </div>
      </form>
    </FormProvider>
  );
};
