/**
 * Storybook file for the MyComponent component.
 */
import { ComponentMeta, ComponentStory } from '@storybook/react';
import MyComponent from '.';

// Story placement in the story list
export default {
  title: 'Components/MyComponent',
  component: MyComponent,
} as ComponentMeta<typeof MyComponent>;

const Template: ComponentStory<typeof MyComponent> = (args) => <MyComponent {...args} />;

// Story #1
export const Green = Template.bind({});
Green.args = {
};

// Story #2
export const Red = Template.bind({});
Red.args = {
  alert: { severity: 'error' },
};
