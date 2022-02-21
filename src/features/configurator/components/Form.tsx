import { Button } from '@/components/Elements';

export const Form = () => {
  return (
    <form className="flex flex-col md:h-full p-6">
      <div className="flex flex-col flex-grow justify-between h-full">
        <div className="flex flex-col h-full">
          <h1 className="text-3xl 2xl:text-4xl font-light text-gray-800">Pizza Creator</h1>
          <span className="text-base 2xl:text-lg text-gray-400 font-thin pb-8">
            Compose your pizza by selecting a size and some toppings!
          </span>
        </div>
        <Button size="lg" type="submit">
          Add to cart
        </Button>
      </div>
    </form>
  );
};
