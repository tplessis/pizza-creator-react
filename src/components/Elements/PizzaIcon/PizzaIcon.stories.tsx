import { Meta, Story } from '@storybook/react';

import { PizzaIcon, PizzaIconProps } from './PizzaIcon';

const meta: Meta = {
  title: 'Components/Elements/PizzaIcon',
  component: PizzaIcon,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<PizzaIconProps> = (props) => <PizzaIcon {...props} />;

export const IconLarge = Template.bind({});
IconLarge.args = {
  size: { label: 'large', value: 13, price: 8.5 },
  active: false,
  darkMode: false,
};

export const IconMedium = Template.bind({});
IconMedium.args = {
  size: { label: 'medium', value: 11, price: 7 },
  active: false,
  darkMode: false,
};

export const IconSmall = Template.bind({});
IconSmall.args = {
  size: { label: 'small', value: 9, price: 6 },
  active: false,
  darkMode: false,
};
