// External imports
import { ComponentMeta } from '@storybook/react';

// Local imports
import MyPagePage from '.';

// Story placement in the story list
export default {
  title: 'Pages/MyPage',
  component: MyPagePage,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof MyPagePage>;

// Default export
export const Default = () => <MyPagePage />;
